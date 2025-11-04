"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// import Modal from "./Modal";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import Roulette from "@/components/Roulette";
import Modal2 from "@/components/Modal2";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [deviceType, setDeviceType] = useState<
    "mobile" | "tablet" | "desktop" | null
  >(null);
  const [gift, setGift] = useState(false);
  const [giftName, setGiftName] = useState("");

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
          src="./img/bg/bgHomeMobile.png"
          alt=""
          className="w-full h-full fixed object-cover object-center top-0 cursor-none -z-[1]"
        />
      ) : (
        <Image
          width={100}
          height={100}
          src="./img/bg/bgDesktop.png"
          alt=""
          className="w-full h-full fixed object-cover object-center top-0 cursor-none -z-[1]"
        />
      )}
      {historyOpen && (
        <Modal
          isOpen={historyOpen}
          modalTittle="Lịch sử đổi thưởng"
          onClose={() => {
            setHistoryOpen(false);
          }}
          buttonTittle="Đóng"
        >
          <p className="text-sm text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut libero
            tempore quisquam nesciunt provident adipisci est quod qui repellat
            atque, aliquam dolore earum soluta, temporibus officia ipsum modi
            similique natus.
          </p>
        </Modal>
      )}
      <div className="w-screen h-screen relative box-border flex items-center justify-center">
        <div className="w-full lg:max-w-1/4 h-screen overflow-hidden py-2 flex flex-col items-center gap-4 relative box-border">
          <div className=" w-full md:w-4/5 lg:w-full h-screen flex flex-col items-center justify-center gap-4">
            <Modal2
              isOpen={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
              gift={gift}
            >
              <>
                <div className="text-center">
                  <p className="mt-2">{giftName}</p>
                </div>
              </>
            </Modal2>
            <div className="flex flex-col items-center h-full gap-4 2xl:gap-8 w-full box-border">
              <header className="w-full flex items-center justify-between p-4">
                <div className="w-1/4 px-1 py-1.5 flex items-center justify-evenly bg-white rounded-xl border-2 border-pink-500">
                  <img
                    src="./img/elements/star-icon.png"
                    alt=""
                    className="w-1/4"
                  />
                  <p className="">200</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="./img/elements/history.png"
                    alt=""
                    className="w-[2.5rem] cursor-pointer hover:scale-110"
                    onClick={() => {
                      setHistoryOpen(true);
                    }}
                  />
                  <img
                    src="./img/elements/homeIcon.png"
                    alt=""
                    className="w-[2.5rem] cursor-pointer"
                    onClick={() => {
                      router.push("/Gameplay");
                    }}
                  />
                </div>
              </header>
              <div className="flex flex-col gap-2 2xl:gap-8 items-center justify-center relative">
                <img
                  src="./img/contexts/contextWheel1.png"
                  alt=""
                  className="w-3/6 lg:w-2/6"
                />
                <img
                  src="./img/contexts/contextWheel2.png"
                  alt=""
                  className="w-4/6 lg:w-3/6"
                />

                <Roulette
                  onResult={({ giftName, gift }) => {
                    setGift(gift);
                    setGiftName(giftName);
                    setIsOpen(true);
                    console.log("🎁 Kết quả:", giftName, gift);
                  }}
                />
                <p className="">Bạn có 01 lượt đổi thưởng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
