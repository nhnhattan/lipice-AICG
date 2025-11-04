"use client";

import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { isMobile, isTablet, isDesktop } from "react-device-detect";

const page = () => {
  const router = useRouter();

  const [selected, setSelected] = useState("register");

  const handleSubmitLogin = async () => {
    router.push("/Gameplay");
    console.log("login");
  };

  const handleSubmitRegister = async () => {
    router.push("/Gameplay");
    console.log("register");
  };

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
      {isMobile ? (
        <Image
          width={100}
          height={100}
          src="./img/bg/bgAuthMobile.png"
          alt=""
          className="w-full fixed object-cover object-center top-0 cursor-none -z-[1]"
        />
      ) : (
        <Image
          width={100}
          height={100}
          src="./img/bg/bgDesktop2.png"
          alt=""
          className="w-full fixed object-cover object-center top-0 cursor-none -z-[1]"
        />
      )}
      <div className="w-screen flex items-center justify-center">
        <div className="w-screen h-screen lg:w-1/4 lg:max-w-1/4  max-h-screen overflow-hidden p-4 flex flex-col items-center gap-4 relative box-border ">
          {/* <Image
            width={100}
            height={100}
            src="./img/bg/bgAuthMobile.png"
            alt=""
            className="w-full h-full absolute object-cover object-center top-0 left-0 z-0"
          /> */}
          <div className="w-2/5 2xl:w-2/6">
            <Image
              width={100}
              height={100}
              src="./img/logo/logo.png"
              alt=""
              className="w-full relative z-10"
              draggable="false"
            />
          </div>
          <Tabs className="w-full md:w-4/5 lg:w-full relative">
            <TabList className="grid grid-cols-2 gap-4 px-8 pb-1 ">
              <Tab
                onClick={() => setSelected("register")}
                className={`${
                  selected == "register"
                    ? "bg-white border-[#ffc1da]  rounded-t-md text-red -bottom-1.5 px-2 py-1 text-black z-[3]"
                    : "border-pink-200 rounded-t-md text-gray-400 -bottom-1.5 px-2 z-[1]"
                } border-3  cursor-pointer relative outline-none text-center border-b-0 flex items-center justify-center`}
              >
                <Image
                  width={100}
                  height={100}
                  src={"./img/contexts/registerContext.png"}
                  alt=""
                  className={`w-5/6 ${
                    selected == "register" ? "opacity-100" : "opacity-70"
                  } transition-all`}
                />
              </Tab>
              <Tab
                onClick={() => setSelected("login")}
                className={`${
                  selected == "login"
                    ? "bg-white border-[#ffc1da] rounded-t-md text-red  -bottom-1.5 px-2 py-1 text-black z-[3]"
                    : "border-pink-200  rounded-t-md text-gray-400 -bottom-1.5 px-2 z-[1]"
                } border-3  cursor-pointer relative outline-none text-center border-b-0 flex items-center justify-center`}
              >
                <Image
                  width={100}
                  height={100}
                  src={"./img/contexts/loginContext.png"}
                  alt=""
                  className={`w-5/6 ${
                    selected == "login" ? "opacity-100" : "opacity-70"
                  } transition-all`}
                />
              </Tab>
            </TabList>

            <TabPanel
              className={`${
                selected == "register"
                  ? "border-2 border-b-2 border-[#ffc1da]  rounded-md relative z-[2]"
                  : ""
              } z-10 bg-white`}
            >
              <div className="relative z-90 w-full h-[70vh] box-border flex flex-col items-center justify-center pt-8 md:pb-40">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitRegister();
                  }}
                  className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-6 "
                  id="register-form"
                >
                  <div className="relative w-3/5 md:w-3/6 flex items-center justify-center gap-0">
                    <div className="absolute top-0 left-0">
                      <Image
                        width={100}
                        height={100}
                        src="./img/elements/rabbit.png"
                        alt=""
                        className="w-full absolute bottom-[100%] left-1/2 -translate-x-1/2"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="./img/elements/inputBG.png"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="TÊN"
                      className="bg-transparent text-white font-bold placeholder:text-white placeholder:font-bold w-[90%] cursor-pointer rounded-sm uppercase  py-2 px-1 text-center relative z-10 mt-1 focus:outline-none"
                    />
                  </div>
                  <div className="relative w-3/5 md:w-3/6 flex items-center justify-center">
                    <div className="absolute top-0 left-0">
                      <Image
                        width={100}
                        height={100}
                        src="./img/elements/inputBG.png"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="SỐ ĐIỆN THOẠI"
                      className="bg-transparent text-white font-bold placeholder:text-white w-[90%] cursor-pointer rounded-sm uppercase  py-2 px-1 text-center relative z-10 mt-1 focus:outline-none"
                    />
                  </div>
                  <div className="relative w-3/5 md:w-3/6 flex items-center justify-center">
                    <div className="absolute top-0 left-0">
                      <Image
                        width={100}
                        height={100}
                        src="./img/elements/inputBG.png"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="EMAIL"
                      className="bg-transparent text-white font-bold placeholder:text-white w-[90%] cursor-pointer rounded-sm uppercase  py-2 px-1 text-center relative z-10 mt-1 focus:outline-none"
                    />
                  </div>
                  <div className="relative w-3/5 md:w-3/6 flex items-center justify-center">
                    <div className="absolute top-0 left-0">
                      <Image
                        width={100}
                        height={100}
                        src="./img/elements/inputBG.png"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <input
                      type="password"
                      placeholder="MẬT KHẨU"
                      className="bg-transparent text-white font-bold placeholder:text-white w-[90%] cursor-pointer rounded-sm uppercase  py-2 px-1 text-center relative z-10 mt-1 focus:outline-none"
                    />
                  </div>
                </form>
              </div>
            </TabPanel>
            <TabPanel
              className={`${
                selected == "login"
                  ? "border-2 border-b-2 border-[#ffc1da]  rounded-md relative z-[2]"
                  : ""
              } z-10 bg-white`}
            >
              <div className="w-full h-[70vh] flex items-center justify-center flex-col gap-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitLogin();
                  }}
                  className="w-full flex flex-col items-center justify-center gap-4 md:gap-6 md:pb-30"
                  id="login-form"
                >
                  <div className="relative w-3/5 md:w-3/6 flex items-center justify-center gap-0">
                    <div className="absolute top-0 left-0">
                      <Image
                        width={100}
                        height={100}
                        src="./img/elements/rabbit.png"
                        alt=""
                        className="w-full absolute bottom-[100%] left-1/2 -translate-x-1/2"
                      />
                      <Image
                        width={100}
                        height={100}
                        src="./img/elements/inputBG.png"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="TÊN"
                      className="bg-transparent text-white font-bold placeholder:text-white placeholder:font-bold w-[90%] cursor-pointer rounded-sm uppercase  py-2 px-1 text-center relative z-10 mt-1 focus:outline-none"
                    />
                  </div>
                  <div className="relative w-3/5 md:w-3/6 flex items-center justify-center mb-3">
                    <div className="absolute top-0 left-0">
                      <Image
                        width={100}
                        height={100}
                        src="./img/elements/inputBG.png"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <input
                      type="password"
                      placeholder="MẬT KHẨU"
                      className="bg-transparent text-white font-bold placeholder:text-white w-[90%] cursor-pointer rounded-sm uppercase  py-2 px-1 text-center relative z-10 mt-1 focus:outline-none"
                    />
                  </div>
                </form>
              </div>
            </TabPanel>
            {selected == "register" ? (
              <button
                type="submit"
                className="flex items-center justify-center w-1/7 transition-all hover:scale-110 hover:opacity-80 absolute z-40 bottom-[8%] md:bottom-[18%] left-1/2 -translate-x-1/2 cursor-pointer"
                form="register-form"
              >
                <Image
                  width={100}
                  height={100}
                  src="./img/elements/nextBtn.png"
                  alt=""
                />
              </button>
            ) : (
              <></>
            )}
            {selected == "login" ? (
              <button
                type="submit"
                className="flex items-center justify-center w-1/7 transition-all hover:scale-110 hover:opacity-80 absolute z-40 bottom-[8%] md:bottom-[30%] left-1/2 -translate-x-1/2 cursor-pointer"
                form="login-form"
              >
                <Image
                  width={100}
                  height={100}
                  src="./img/elements/nextBtn.png"
                  alt=""
                />
              </button>
            ) : (
              <></>
            )}
          </Tabs>

          <Image
            width={100}
            height={100}
            src="./img/elements/cloud.png"
            alt=""
            className="absolute w-full bottom-0 left-0 z-10 lg:hidden"
          />
        </div>
      </div>
    </>
  );
};

export default page;
