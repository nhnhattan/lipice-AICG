"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { isMobile, isTablet, isDesktop } from "react-device-detect";

const HomePage = () => {
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
      {!isMobile ? (
        <img
          src={`./img/bg/bgDesktop.png`}
          alt=""
          className="absolute -z-[1] w-full h-full object-cover object-center"
        />
      ) : (
        <img
          src={`./img/bg/bgHomeMobile.png`}
          alt=""
          className="absolute -z-[1] w-full h-full object-cover object-center"
        />
      )}
      <div className="w-screen h-screen 2xl:w-1/4 flex items-center justify-center relative box-border overflow-hidden">
        <div className="relative w-[100vw] h-screen flex items-center justify-center">
          <img
            src="./img/elements/gameMachine.png"
            alt=""
            className="max-h-full"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center md:scale-150 lg:scale-110">
            <div className="">
              <Image
                width={200}
                height={100}
                src={"./img/contexts/homeContext.png"}
                alt=""
                className="h-full"
              />
            </div>

            <Link
              href={"/Authentication"}
              className="cursor-pointer px-4 mt-4 flex items-center justify-center animate-wiggle animate-infinite animate-ease-linear hover:opacity-85 hover:scale-110 transition-all relative"
            >
              <img
                src="./img/elements/buttonStart.png"
                alt=""
                className="w-full absolute"
              />
              <p className="z-10 relative text-white">CLICK TO START</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
