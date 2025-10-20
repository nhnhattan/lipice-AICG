"use client";

import React from "react";
import { useStepperStore } from "../stores/stepperStore";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

interface Step {
  number: number;
  title: string;
}

const Stepper: React.FC = () => {
  const currentStep = useStepperStore((state) => state.currentStep);

  const renderStepContent = (): React.ReactNode => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-full w-screen lg:w-1/4 lg:max-w-1/4 box-border">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default Stepper;
