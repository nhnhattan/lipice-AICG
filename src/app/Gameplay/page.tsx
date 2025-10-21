"use client";

import Stepper from "@/components/Stepper";
import Image from "next/image";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      <div className="w-screen h-screen relative box-border flex items-center justify-center">
        <div className="w-full max-h-screen overflow-hidden py-2 flex flex-col items-center gap-4 relative box-border">
          <Suspense fallback={<div>Đang tải trò chơi...</div>}>
            <Stepper />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default page;
