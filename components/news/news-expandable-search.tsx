"use client";

import { buildNewsListingHref } from "@/lib/news-listing-url";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NewsExpandableSearchProps = {
  currentCategory: string;
  searchQuery: string;
};

export default function NewsExpandableSearch({
  currentCategory,
  searchQuery,
}: NewsExpandableSearchProps) {
  const router = useRouter();
  const [expanded, setExpanded] = useState(() => Boolean(searchQuery.trim()));
  const [draft, setDraft] = useState(searchQuery);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDraft(searchQuery);
    if (searchQuery.trim()) setExpanded(true);
  }, [searchQuery]);

  useEffect(() => {
    if (!expanded) return;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [expanded]);

  useEffect(() => {
    if (!expanded) return;
    const onDocMouseDown = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el?.contains(e.target as Node)) {
        setDraft(searchQuery);
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [expanded, searchQuery]);

  const navigateWithQuery = (q: string) => {
    router.push(
      buildNewsListingHref({
        category:
          currentCategory && currentCategory !== "All"
            ? currentCategory
            : undefined,
        q: q.trim() || undefined,
      }),
    );
  };

  const submit = () => {
    navigateWithQuery(draft);
  };

  const onIconClick = () => {
    if (!expanded) {
      setExpanded(true);
      return;
    }
    if (draft.trim()) {
      submit();
      return;
    }
    setExpanded(false);
  };

  return (
    <div
      ref={containerRef}
      className="flex h-[52px] shrink-0 items-stretch overflow-hidden border-l border-[#E5E7EB] active:bg-[#F0F0F0] sm:border-[#E5E7EB]"
    >
      <div
        className={cn(
          "flex h-full min-w-0 items-center overflow-hidden transition-[max-width] duration-300 ease-in-out",
          expanded ? "max-w-[min(calc(100vw-7rem),320px)]" : "max-w-0",
        )}
      >
        <label className="sr-only" htmlFor="news-search-input">
          Search articles
        </label>
        <input
          id="news-search-input"
          ref={inputRef}
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              setDraft(searchQuery);
              setExpanded(false);
            }
            if (e.key === "Enter") {
              e.preventDefault();
              submit();
            }
          }}
          placeholder="Search articles…"
          autoComplete="off"
          className="h-full w-[min(calc(100vw-7rem),300px)] shrink-0 border-0 bg-transparent px-3 text-[14px] leading-[20px] text-[#202020] outline-none placeholder:text-[#646464]"
        />
      </div>
      <button
        type="button"
        onClick={onIconClick}
        aria-expanded={expanded}
        aria-controls="news-search-input"
        className="flex h-full w-[52px] shrink-0 cursor-pointer items-center justify-center bg-transparent transition-colors"
        aria-label={
          expanded
            ? draft.trim()
              ? "Run search"
              : "Close search"
            : "Open search"
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M17.5005 17.5001L13.8838 13.8835"
            stroke="#646464"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
            stroke="#646464"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
