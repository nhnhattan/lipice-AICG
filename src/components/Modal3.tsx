// components/Modal.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  type: string;
}

export default function Modal3({
  isOpen,
  onClose,
  children,
  type,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div
          ref={modalRef}
          className="bg-[#ffe8f2] box-border border-4 text-white font-bold border-[#ff9fc7] rounded-lg shadow-lg p-4 w-4/5 max-w-md max-h-4/5 flex flex-col items-center justify-center gap-4 pt-[8vh] lg:pt-[8vh] relative mt-[10vh]"
        >
          <Image
            width={100}
            height={100}
            src="./img/elements/closeBtn.png"
            alt=""
            className="absolute top-0 -right-[15%] -translate-y-1/2 -translate-x-1/2 w-1/6"
            draggable={false}
            onClick={onClose}
          />
          <div className="absolute top-0 -translate-y-1/2 flex justify-center items-center mb-4 w-6/8">
            <Image
              width={100}
              height={100}
              src="./img/elements/headerStar.png"
              alt=""
              className="w-full absolute -z-[1]"
              draggable={false}
            />
          </div>

          <div className=" w-full flex flex-col gap-4 items-center justify-center overflow-y-scroll  scrollbar-hide">
            {type == "video" ? (
              <Image
                width={100}
                height={100}
                src="./img/contexts/createVideo.png"
                alt=""
                className="w-[90%]"
                draggable={false}
              />
            ) : (
              <Image
                width={100}
                height={100}
                src="./img/contexts/createImage.png"
                alt=""
                className="w-[90%]"
                draggable={false}
              />
            )}

            {children}
          </div>
          <button
            onClick={() => {
              if (type == "video") {
                Swal.fire({
                  title:
                    "Hãy nhớ tải video trước khi đến trang đổi quà!",
                  showCancelButton: true,
                  confirmButtonText: "Đổi quà",
                  cancelButtonText: `Hủy`,
                }).then(async (result) => {
                  if (result.isConfirmed) {
                    await router.push("/Redemption-Store");
                    onClose();
                  } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                  }
                });
              } else {
                Swal.fire({
                  title:
                    "Hãy nhớ chia sẻ hoặc tải ảnh trước khi đến trang đổi quà!",
                  showCancelButton: true,
                  confirmButtonText: "Đổi quà",
                  cancelButtonText: `Hủy`,
                }).then(async (result)  => {
                  if (result.isConfirmed) {
                    await router.push("/Redemption-Store");
                    onClose();
                  } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                  }
                });
              }
            }}
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
              Đổi quà
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
