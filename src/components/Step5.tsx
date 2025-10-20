"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import { useStepperStore } from "@/stores/stepperStore";
import toast from "react-hot-toast";

const Step5 = () => {
  const setCurrentStep = useStepperStore((state) => state.setCurrentStep);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          modalTittle="Lưu ý"
          onClose={() => {
            setIsOpen(false);
          }}
          buttonTittle="Hủy"
        >
          <div className="flex items-center justify-center flex-col gap-4 p-2">
            <p className="text-base uppercase font-black text-center">
              Nhớ tải ảnh và chia sẻ để tích điểm bạn nhé!
            </p>
            <button
              onClick={() => {
                setIsOpen(false);
                setCurrentStep(6);
              }}
              className="max-w-3/7 w-3/7 flex items-center justify-center relative cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
            >
              <Image
                width={100}
                height={100}
                src={"./img/elements/buttonBg3.png"}
                alt=""
                className="w-full "
                draggable={false}
              />
              <p className="absolute text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black uppercase">
                Tạo video
              </p>
            </button>
          </div>
        </Modal>
      )}
      <div className="flex flex-col items-center h-full gap-4 w-full overflow-hidden box-border">
        <Image
          width={100}
          height={100}
          src="./img/bg/chosenBG.png"
          alt=""
          className="w-full fixed object-cover object-center top-0 cursor-none -z-[1]"
          draggable={false}
        />
        <div className="w-full h-[90%] max-h-[90%] flex flex-col items-center  gap-8">
          <div className={`w-full flex items-center justify-center py-4`}>
            <Image
              width={100}
              height={100}
              src="./img/logo/logo.png"
              alt=""
              className="w-2/6"
              draggable={false}
            />
          </div>
          <div className="max-w-4/5 w-4/5 md:w-3/5 lg:w-4/5 gap-4 flex flex-col items-center justify-center relative oveflow-hidden">
            <div
              className={`w-full flex items-center justify-center overflow-hidden`}
            >
              <Image
                width={100}
                height={100}
                src={"./img/elements/imgStep3.png"}
                alt=""
                className="w-full h-full relative z-10"
                draggable={false}
              />

              {/* <Image
                width={100}
                height={100}
                src={""}
                alt=""
                className="w-[85%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-[1] object-contain rounded-lg"
                draggable={false}
              /> */}
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <div className="w-full flex items-center justify-center gap-4">
                <button
                  onClick={() => {
                    toast.success("Tải ảnh thành công!");
                  }}
                  className="max-w-5/7 w-4/7 flex items-center justify-center relative cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
                >
                  <Image
                    width={100}
                    height={100}
                    src={"./img/elements/buttonBg3.png"}
                    alt=""
                    className="w-full "
                    draggable={false}
                  />
                  <p className="absolute text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black uppercase">
                    Tải ảnh
                  </p>
                </button>
                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className="max-w-5/7 w-4/7 flex items-center justify-center relative cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
                >
                  <Image
                    width={100}
                    height={100}
                    src={"./img/elements/buttonBg3.png"}
                    alt=""
                    className="w-full "
                    draggable={false}
                  />
                  <p className="absolute text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black uppercase">
                    Tạo video
                  </p>
                </button>
              </div>
              <div className="w-full flex items-center justify-center gap-4">
                <button
                  onClick={() => {toast.success("Chia sẻ thành công!")}}
                  className="max-w-5/8 min-w-4/7 flex items-center justify-center relative cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
                >
                  <Image
                    width={100}
                    height={100}
                    src={"./img/elements/buttonBg3.png"}
                    alt=""
                    className="w-full "
                    draggable={false}
                  />
                  <p className="absolute text-nowrap text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black uppercase">
                    Chia sẻ để tích điểm
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step5;
