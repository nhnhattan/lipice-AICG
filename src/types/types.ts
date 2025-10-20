export interface StepperState {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  reset: () => void;
}

export interface StepComponentProps {
  // Có thể thêm props nếu cần
}