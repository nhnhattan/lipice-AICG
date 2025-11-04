// components/Modal.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  //   modalTittle: string;
  onClose: () => void;
  children: React.ReactNode;
  gift: boolean;
  //   buttonTittle: string;
}

export default function Modal2({
  isOpen,
  onClose,
  children,
  gift,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {gift ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="bg-[#ffe8f2] box-border border-4 text-white font-bold border-[#ff9fc7] rounded-lg shadow-lg p-4 w-4/5 max-w-md max-h-4/5 flex flex-col items-center justify-center gap-4 pt-[8vh] lg:pt-[8vh] relative mt-[10vh]"
          >
            <div className="absolute -top-10 -translate-y-1/2 flex justify-center items-center mb-4 w-6/8">
              <Image
                width={100}
                height={100}
                src="./img/elements/congrats.png"
                alt=""
                className="w-full absolute -z-[1]"
                draggable={false}
              />
              <p className="mt-[10%] font-black uppercase text-[#ff86a2]"></p>
            </div>
            <div className=" w-full flex flex-col gap-2 items-center justify-center overflow-y-scroll  scrollbar-hide">
              <Image
                width={100}
                height={100}
                src="./img/contexts/popup-context.png"
                alt=""
                className="w-[90%]"
                draggable={false}
              />
              {children}
              <div className="flex items-center justify-center py-2">
                <Image
                  width={100}
                  height={100}
                  src="./img/elements/bling.png"
                  alt=""
                  className="w-[60%]"
                  draggable={false}
                />
              </div>
            </div>
            <button
              onClick={onClose}
              className="relative text-[#ff86a2] font-black border-none uppercase w-3/6  rounded-md flex items-center justify-center cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
            >
              <Image
                width={100}
                height={100}
                src="./img/elements/buttonBg1.png"
                alt=""
                className="w-full"
              />
              <p className="absolute uppercase z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap">
                QUAY VỀ
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="bg-[#ffe8f2] box-border border-4 text-white font-bold border-[#ff9fc7] rounded-lg shadow-lg p-4 w-4/5 max-w-md flex flex-col items-center justify-center gap-4 pt-[4vh] lg:pt-[5vh] relative"
          >
            <div className=" w-full flex flex-col gap-2 items-center justify-center overflow-y-scroll  scrollbar-hide">
              <Image
                width={100}
                height={100}
                src="./img/contexts/luckagain.png"
                alt=""
                className="w-[90%]"
                draggable={false}
              />
            </div>
            <button
              onClick={onClose}
              className="relative text-[#ff86a2] font-black border-none uppercase w-3/6  rounded-md flex items-center justify-center cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
            >
              <Image
                width={100}
                height={100}
                src="./img/elements/buttonBg1.png"
                alt=""
                className="w-full"
              />
              <p className="absolute uppercase z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap">
                QUAY VỀ
              </p>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
