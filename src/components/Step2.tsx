"use client";

import React, { useEffect, useState } from "react";
import { useStepperStore } from "../stores/stepperStore";
import Image from "next/image";
import toast from "react-hot-toast";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import { useRouter } from "next/navigation";

const Step2: React.FC = () => {
  const router = useRouter();
  const setCurrentStep = useStepperStore((state) => state.setCurrentStep);
  const [isSelect, setIsSelect] = useState("");

  const [deviceType, setDeviceType] = useState<
    "mobile" | "tablet" | "desktop" | null
  >(null);

  useEffect(() => {
    if (isTablet) setDeviceType("tablet");
    else if (isMobile) setDeviceType("mobile");
    else setDeviceType("desktop");
  }, []);

  if (!deviceType) return null;

  return (
    <>
      <div className="flex flex-col items-center h-full gap-4 w-full overflow-hidden box-border">
        {isMobile ? (
          <Image
            width={100}
            height={100}
            src="./img/bg/chosenBG.png"
            alt=""
            className="w-full h-screen fixed object-cover object-center top-0 cursor-none -z-[1]"
          />
        ) : (
          <Image
            width={100}
            height={100}
            src="./img/bg/bgDesktop.png"
            alt=""
            className="w-full h-screen fixed object-cover object-center top-0 cursor-none -z-[1]"
          />
        )}
        <div className="w-full h-4/5 max-h-4/5 flex flex-col items-center justify-around">
          <div className={`w-full flex items-center justify-around py-4`}>
            <Image
              width={100}
              height={100}
              src="./img/elements/homeIcon.png"
              alt=""
              className="w-1/9 cursor-pointer"
              draggable={false}
              onClick={() => {
                router.push("/Gameplay");
                setCurrentStep(1);
              }}
            />
            <Image
              width={100}
              height={100}
              src="./img/logo/logo.png"
              alt=""
              className="w-2/6"
              draggable={false}
            />
            <Image
              width={100}
              height={100}
              src="./img/elements/homeIcon.png"
              alt=""
              className="w-1/8 opacity-0"
              draggable={false}
            />
          </div>

          <div className="max-w-4/5 md:max-w-3/5 lg:max-w-4/5  gap-2 flex flex-col items-center justify-center">
            <div className={`w-full flex items-center justify-center `}>
              <Image
                width={100}
                height={100}
                src={"./img/elements/imgStep1.png"}
                alt=""
                className={`w-3/6 ${
                  isSelect == "1" ? "border-4 border-pink-600 rounded-2xl" : ""
                } transition-all cursor-pointer`}
                onClick={() => setIsSelect("1")}
                draggable={false}
              />
            </div>
            <div className="w-full flex items-center justify-center gap-2">
              <Image
                width={100}
                height={100}
                src={"./img/elements/imgStep1.png"}
                alt=""
                className={`w-3/6 cursor-pointer ${
                  isSelect == "2" ? "border-4 border-pink-600 rounded-2xl" : ""
                } transition-all`}
                onClick={() => setIsSelect("2")}
                draggable={false}
              />
              <Image
                width={100}
                height={100}
                src={"./img/elements/imgStep1.png"}
                alt=""
                className={`w-3/6 ${
                  isSelect == "3" ? "border-4 border-pink-600 rounded-2xl" : ""
                } transition-all cursor-pointer`}
                onClick={() => setIsSelect("3")}
                draggable={false}
              />
            </div>
          </div>

          <div className="max-w-5/7 w-5/7 flex items-center justify-center relative">
            <Image
              width={100}
              height={100}
              src={"./img/elements/selectContext.png"}
              alt=""
              className="w-full"
              draggable={false}
            />
            <p className="absolute cursor-none z-10 text-center max-w-3/5 left-7/13 top-3/5 -translate-x-1/2 -translate-y-1/2 text-white font-bold">
              Chọn 1 trong 3 thân hình
            </p>
          </div>

          <button
            onClick={() => {
              if (!isSelect) {
                toast.error("Bạn chưa chọn thân hình!");
              } else {
                setCurrentStep(3);
              }
            }}
            className={`max-w-3/7 w-3/7 md:w-3/9 lg:w-3/7 flex items-center justify-center relative cursor-pointer hover:scale-110 hover:opacity-80 transition-all ${
              !isSelect ? "grayscale" : ""
            }`}
          >
            <Image
              width={100}
              height={100}
              src={"./img/elements/buttonBg3.png"}
              alt=""
              className="w-full "
              draggable={false}
            />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black uppercase">
              Next
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Step2;
