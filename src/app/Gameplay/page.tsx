"use client";

import Stepper from "@/components/Stepper";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-screen h-screen relative box-border flex items-center justify-center">
        <div className="w-full max-h-screen overflow-hidden py-2 flex flex-col items-center gap-4 relative box-border">
          <Stepper />
        </div>
      </div>
    </>
  );
};

export default page;
