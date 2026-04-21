import { create } from "zustand";

export type LiveDemoAiCallState = {
  phoneRaw: string;
  submitted: boolean;
  hubspotSubmitSeq: number;
  lastHubspotE164: string | null;
  setPhoneRaw: (raw: string) => void;
  submitLiveDemoPhone: (e164: string) => void;
};

export const useLiveDemoAiCallStore = create<LiveDemoAiCallState>((set) => ({
  phoneRaw: "",
  submitted: false,
  hubspotSubmitSeq: 0,
  lastHubspotE164: null,
  setPhoneRaw: (raw) => set({ phoneRaw: raw }),
  submitLiveDemoPhone: (e164) =>
    set((s) => ({
      submitted: true,
      lastHubspotE164: e164,
      hubspotSubmitSeq: s.hubspotSubmitSeq + 1,
    })),
}));
