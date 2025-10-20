import { create } from 'zustand';

export interface StepperState {
  currentStep: number;
  readRule: boolean;
  setCurrentStep: (step: number) => void;
  setReadRule: (read: boolean) => void;
  reset: () => void;
}

export const useStepperStore = create<StepperState>((set) => ({
  currentStep: 1,
  readRule: false,
  setReadRule: (read: boolean) => set({ readRule: read }),
  setCurrentStep: (step: number) => set({ currentStep: step }),
  reset: () =>
    set((state) => ({
      ...state,
      currentStep: 1,
    })),
}));