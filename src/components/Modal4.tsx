// components/Modal.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleted: () => void;
  children: React.ReactNode;
}

export default function Modal4({
  isOpen,
  onClose,
  onCompleted,
  children,
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
        className="bg-[#ffc2d5] box-border border-4 text-white font-bold border-[#ff9fc7] rounded-lg shadow-lg p-6 w-4/5 max-w-md flex flex-col items-center justify-center gap-4  relative"
      >
        <div className="absolute left-4 -top-1 -translate-y-1/2 flex justify-center items-center mb-4 w-1/7">
          <Image
            width={100}
            height={100}
            src="./img/elements/noticeIcon.png"
            alt=""
            className="w-full absolute -z-[1]"
          />
        </div>
        <div className=" w-full flex items-center justify-center overflow-y-scroll scrollbar-hide">
          {children}
        </div>
        <div className="w-4/5 lg:w-3/5 flex items-center justify-center gap-4 absolute -bottom-4 lg:-bottom-6">
          <button
            onClick={onCompleted}
            className="relative text-[#ff86a2] font-black border-none uppercase w-3/6  rounded-md flex items-center justify-center cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
          >
            <Image
              width={100}
              height={100}
              src="./img/elements/buttonBg1.png"
              alt=""
              className="w-full"
            />
            <p className="absolute text-sm uppercase z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap">
              Tạo video
            </p>
          </button>
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
            <p className="absolute text-sm uppercase z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap">
              Đóng
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
