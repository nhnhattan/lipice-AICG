"use client";

import React, { useEffect, useState } from "react";
import { useStepperStore } from "../stores/stepperStore";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Modal from "./Modal";
import Image from "next/image";
import { set } from "zod/v4";

const Step1: React.FC = () => {
  const router = useRouter();

  const setCurrentStep = useStepperStore((state) => state.setCurrentStep);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const rule = localStorage.getItem("rule");
    if (!rule) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 w-full ">
      <Image
        width={100}
        height={100}
        src="./img/bg/bgGameplay.png"
        alt=""
        className="w-full fixed object-cover object-center top-0 cursor-none -z-[1]"
      />
      <Modal
        isOpen={isOpen}
        modalTittle="Luật chơi"
        onClose={() => {
          setIsOpen(false);
          localStorage.setItem("rule", "true");
        }}
        buttonTittle="Đồng ý"
      >
        <p className="text-sm text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut libero
          tempore quisquam nesciunt provident adipisci est quod qui repellat
          atque, aliquam dolore earum soluta, temporibus officia ipsum modi
          similique natus.
        </p>
      </Modal>
      <div className=" w-full md:w-4/5 lg:w-full flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => {
            setCurrentStep(2);
          }}
          className="relative scalable-element text-[#ff86a2] font-black border-none uppercase w-6/8 rounded-md py-1 flex items-center justify-center cursor-pointer hover:scale-110 outline-none transition-all"
        >
          <Image
            width={100}
            height={100}
            src="./img/contexts/startGame.png"
            alt=""
            className=" w-full glow-image md:pb-4"
          />
        </button>
        <button
          onClick={() => {
            router.push("/Information");
          }}
          className="relative text-[#ff86a2] font-black border-none uppercase w-5/8 rounded-md py-1 flex items-center justify-center cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
        >
          <Image
            width={100}
            height={100}
            src="./img/elements/buttonBg2.png"
            alt=""
            className="h-full w-full absolute top-0 left-0 -z-[1]"
          />
          <p className="py-3 text-sm md:py-5">thông tin cá nhân</p>
        </button>
        <button
          onClick={() => {
            router.push("/Redemption-Store");
          }}
          className="relative text-[#ff86a2] font-black border-none uppercase w-5/8  px-4 rounded-md py-1 flex items-center justify-center cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
        >
          <Image
            width={100}
            height={100}
            src="./img/elements/buttonBg2.png"
            alt=""
            className="w-full h-full absolute top-0 left-0 -z-[1]"
          />
          <p className="py-3 text-sm md:py-5 text-nowrap">cửa hàng đổi thưởng</p>
        </button>
      </div>
    </div>
  );
};

export default Step1;
