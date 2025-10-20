// components/Modal.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  modalTittle: string;
  onClose: () => void;
  children: React.ReactNode;
  buttonTittle: string;
}

export default function Modal({
  isOpen,
  onClose,
  modalTittle,
  children,
  buttonTittle,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-[#ffc2d5] box-border border-4 text-white font-bold border-[#ff9fc7] rounded-lg shadow-lg p-6 w-4/5 max-w-md flex flex-col items-center justify-center gap-4 pt-[10vh] lg:pt-[10vh] relative"
      >
        <div className="absolute -top-1 -translate-y-1/2 flex justify-center items-center mb-4 w-5/7">
          <Image
            width={100}
            height={100}
            src="./img/elements/annouce.png"
            alt=""
            className="w-full absolute -z-[1]"
          />
          <p className="mt-[10%] font-black uppercase text-[#ff86a2]">
            {modalTittle}
          </p>
        </div>
        <div className=" w-full flex items-center justify-center overflow-y-scroll  scrollbar-hide">
          {children}
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
            {buttonTittle}
          </p>
        </button>
      </div>
    </div>
  );
}
