"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useStepperStore } from "@/stores/stepperStore";
import toast from "react-hot-toast";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Step5: React.FC = () => {
  const router = useRouter();
  const setCurrentStep = useStepperStore((state) => state.setCurrentStep);

  const [isOpen, setIsOpen] = useState(false);
  const [isCreate, setIsCreate] = useState(true);
  const [isShared, setIsShared] = useState(false);

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
      {isOpen && (
        <Modal4
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          onCompleted={() => {
            setIsOpen(false);
            setCurrentStep(6);
          }}
        >
          <div className="flex items-center justify-center flex-col py-2">
            <Image
              width={100}
              height={100}
              src="./img/contexts/noticeContext.png"
              alt=""
              className="w-full"
            />
          </div>
        </Modal4>
      )}
      <Modal3
        isOpen={isCreate}
        onClose={() => {
          setIsCreate(false);
        }}
        type="image"
      >
        <>
          <div className="flex items-center justify-center w-full gap-4 py-2">
            <p className="font-black text-6xl text-[#ff85af]">50</p>
            <Image
              width={100}
              height={100}
              src="./img/elements/star-icon.png"
              alt=""
              className="w-1/4"
              draggable={false}
            />
          </div>
        </>
      </Modal3>
      <div className="flex flex-col items-center h-full gap-4 w-full overflow-hidden box-border">
        {isMobile ? (
          <Image
            width={100}
            height={100}
            src="./img/bg/chosenBG.png"
            alt=""
            className="w-full fixed object-cover object-center top-0 cursor-none -z-[1]"
          />
        ) : (
          <Image
            width={100}
            height={100}
            src="./img/bg/bgDesktop.png"
            alt=""
            className="w-full fixed object-cover object-center top-0 cursor-none -z-[1]"
          />
        )}
        <div className="w-full h-[90%] max-h-[90%] flex flex-col items-center  gap-8">
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
              src="./img/elements/star-icon.png"
              alt=""
              className="w-1/10 cursor-pointer"
              draggable={false}
              onClick={() => {
                Swal.fire({
                  title:
                    "Hãy nhớ chia sẻ hoặc tải ảnh trước khi đến trang đổi quà!",
                  showCancelButton: true,
                  confirmButtonText: "Đổi quà",
                  cancelButtonText: `Hủy`,
                }).then(async (result) => {
                  if (result.isConfirmed) {
                    await router.push("/Redemption-Store");
                  } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                  }
                });
              }}
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
                  <p className="absolute text-nowrap text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black uppercase">
                    Tạo video
                  </p>
                </button>
              </div>
              <div className="w-full flex items-center justify-center gap-4">
                <button
                  onClick={() => {
                    if (!isShared) {
                      toast.success(
                        "Chia sẻ thành công! Bạn nhận được 200 điểm"
                      );
                      setIsShared(true);
                    } else if (isShared) {
                      toast.error("Bạn đã chia sẻ rồi!");
                    }
                  }}
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
