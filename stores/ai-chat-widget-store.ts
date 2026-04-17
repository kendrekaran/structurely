import { create } from "zustand";

interface AiChatWidgetState {
  isOpen: boolean;
  isHomeLiveDemoInView: boolean;
  closeWidget: () => void;
  openWidget: () => void;
  setHomeLiveDemoInView: (inView: boolean) => void;
}

export const useAiChatWidgetStore = create<AiChatWidgetState>((set) => ({
  isOpen: true,
  isHomeLiveDemoInView: false,
  closeWidget: () => set({ isOpen: false }),
  openWidget: () => set({ isOpen: true }),
  setHomeLiveDemoInView: (inView) => set({ isHomeLiveDemoInView: inView }),
}));
