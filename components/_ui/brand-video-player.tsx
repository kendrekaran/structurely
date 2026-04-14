"use client";

import { cn } from "@/lib/utils";
import { Maximize2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

export type BrandVideoPlayerProps = {
  src: string;
  poster?: string;
  /** Accessible label for the player region */
  title?: string;
  className?: string;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function BrandVideoPlayer({
  src,
  poster,
  title = "Video",
  className,
}: BrandVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideControlsRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);

  const progressPct =
    duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  const clearHideTimer = useCallback(() => {
    if (hideControlsRef.current) {
      clearTimeout(hideControlsRef.current);
      hideControlsRef.current = null;
    }
  }, []);

  const scheduleHideControls = useCallback(() => {
    clearHideTimer();
    if (!playing) return;
    hideControlsRef.current = setTimeout(() => {
      setControlsVisible(false);
    }, 2500);
  }, [clearHideTimer, playing]);

  useEffect(() => {
    return () => clearHideTimer();
  }, [clearHideTimer]);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((m) => !m);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) void el.requestFullscreen();
    else void document.exitFullscreen();
  }, []);

  const seekFromClientX = useCallback(
    (clientX: number, rect: DOMRect) => {
      const v = videoRef.current;
      if (!v || !duration) return;
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(1, x / rect.width));
      v.currentTime = pct * duration;
    },
    [duration],
  );

  const onSeekBarPointer = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? (e.touches[0]?.clientX ?? 0) : e.clientX;
    seekFromClientX(clientX, rect);
  };

  const onContainerKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      togglePlay();
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex min-h-[240px] w-full items-center justify-center overflow-hidden bg-[#0a0a0a] outline-none md:min-h-[480px]",
        className,
      )}
      tabIndex={0}
      role="region"
      aria-label={title}
      onKeyDown={onContainerKeyDown}
      onMouseMove={() => {
        setControlsVisible(true);
        scheduleHideControls();
      }}
      onMouseLeave={() => {
        if (playing) setControlsVisible(false);
      }}
      onFocus={() => setControlsVisible(true)}
    >
      <video
        ref={videoRef}
        className="block max-h-[min(90vh,720px)] w-full object-contain"
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        muted={muted}
        onPlay={() => {
          setPlaying(true);
          scheduleHideControls();
        }}
        onPause={() => {
          setPlaying(false);
          setControlsVisible(true);
          clearHideTimer();
        }}
        onTimeUpdate={() => {
          const v = videoRef.current;
          if (v) setCurrentTime(v.currentTime);
        }}
        onLoadedMetadata={() => {
          const v = videoRef.current;
          if (v) {
            setDuration(v.duration);
            setMuted(v.muted);
          }
        }}
        onVolumeChange={() => {
          const v = videoRef.current;
          if (v) setMuted(v.muted);
        }}
        onClick={togglePlay}
      />

      {!playing ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/15">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="pointer-events-auto flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#006FFF] text-white shadow-lg backdrop-blur-lg transition-transform focus-visible:ring-2 focus-visible:ring-[#006FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] md:h-20 md:w-20"
            aria-label="Play video"
          >
            <svg
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-1/2 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2"
            >
              <path
                d="M31.5318 78.5604L76.5869 52.3139C79.8982 50.3849 79.8978 45.601 76.5861 43.6726L31.531 17.4373C28.1977 15.4964 24.015 17.9009 24.015 21.7582V74.24C24.015 78.0976 28.1985 80.5022 31.5318 78.5604Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      ) : null}

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 pt-10 pb-3 transition-opacity duration-200 md:px-4 md:pb-4",
          controlsVisible || !playing ? "opacity-100" : "opacity-0",
        )}
      >
        <div
          className="mb-3 h-1.5 w-full cursor-pointer rounded-full bg-white/25 md:h-1.5"
          role="slider"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={Math.round(duration) || 0}
          aria-valuenow={Math.round(currentTime)}
          aria-label="Seek"
          onKeyDown={(e) => {
            const v = videoRef.current;
            if (!v || !duration) return;
            if (e.key === "ArrowRight") {
              e.preventDefault();
              v.currentTime = Math.min(duration, v.currentTime + 5);
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              v.currentTime = Math.max(0, v.currentTime - 5);
            }
          }}
          onClick={(e) => {
            e.stopPropagation();
            onSeekBarPointer(e);
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            onSeekBarPointer(e);
          }}
        >
          <div
            className="pointer-events-none h-full rounded-full bg-[#006FFF]"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <div className="flex items-center gap-3 text-[13px] font-medium tracking-[-0.01em] text-white md:text-sm">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="flex shrink-0 items-center justify-center rounded-md p-1.5 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#006FFF]"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <Pause className="h-5 w-5 fill-current stroke-transparent" />
            ) : (
              <Play className="h-5 w-5 fill-current stroke-transparent" />
            )}
          </button>

          <span className="min-w-[6.5em] text-white/90 tabular-nums">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <div className="flex flex-1 justify-end gap-1">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="flex shrink-0 items-center justify-center rounded-md p-1.5 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#006FFF]"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              className="flex shrink-0 items-center justify-center rounded-md p-1.5 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#006FFF]"
              aria-label="Fullscreen"
            >
              <Maximize2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
