"use client";

import React, { useEffect } from "react";
import { useStepperStore } from "../stores/stepperStore";
import { useRouter, useSearchParams } from "next/navigation";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

const Stepper: React.FC = () => {
  const currentStep = useStepperStore((state) => state.currentStep);
  const setCurrentStep = useStepperStore((state) => state.setCurrentStep);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const stepFromURL = Number(searchParams.get("step"));
    if (!isNaN(stepFromURL) && stepFromURL >= 1 && stepFromURL <= 6) {
      setCurrentStep(stepFromURL);
    }
  }, [searchParams]);

  useEffect(() => {
    const stepFromURL = Number(searchParams.get("step"));
    const isStepValid =
      !isNaN(stepFromURL) && stepFromURL >= 1 && stepFromURL <= 6;
    if (!isStepValid) return;
    if ((currentStep === 5 || currentStep === 6) && stepFromURL < currentStep) {
      return;
    }
    setCurrentStep(stepFromURL);
  }, [searchParams]);

  useEffect(() => {
    setCurrentStep(1);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", "1");
    router.replace(`?${newSearchParams.toString()}`);
  }, []);

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
