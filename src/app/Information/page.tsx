"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();

  const [isSelect, setIsSelect] = useState("");

  const handleSubmitChange = async () => {
    console.log("change infor");
    toast.success("Đổi thông tin thành công!");
    // router.push("/Gameplay");
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="h-full w-screen lg:w-1/4 lg:max-w-1/4 box-border">
          <div className="flex flex-col items-center h-full gap-4 w-full overflow-hidden box-border">
            <Image
              width={100}
              height={100}
              src="./img/bg/informationBG.png"
              alt=""
              className="w-full fixed object-cover object-center top-0 cursor-none -z-[1]"
              draggable={false}
            />
            <div className="w-full h-full flex flex-col items-center justify-center gap-8">
              {isSelect == "" ? (
                <>
                  <div className="flex items-center justify-center flex-col gap-2 md:gap-6 mt-10 md:mt-30">
                    <button
                      onClick={() => {
                        setIsSelect("changeInfor");
                      }}
                      className="max-w-5/7 w-4/7 md:w-3/7 flex items-center justify-center relative cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
                    >
                      <Image
                        width={100}
                        height={100}
                        src={"./img/elements/buttonBg3.png"}
                        alt=""
                        className="w-full "
                        draggable={false}
                      />
                      <p className="absolute text-xs text-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black uppercase">
                        Chỉnh sửa thông tin
                      </p>
                    </button>
                    <button
                      onClick={() => {
                        setIsSelect("changePassword");
                      }}
                      className="max-w-5/7 w-4/7 md:w-3/7 flex items-center justify-center relative cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
                    >
                      <Image
                        width={100}
                        height={100}
                        src={"./img/elements/buttonBg3.png"}
                        alt=""
                        className="w-full "
                        draggable={false}
                      />
                      <p className="absolute text-xs  text-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black uppercase">
                        Đổi mật khẩu
                      </p>
                    </button>
                    <button
                      onClick={() => {
                        router.push("/Gameplay");
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
                      <p className="absolute text-xs  text-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black uppercase">
                        Quay lại
                      </p>
                    </button>
                  </div>
                </>
              ) : isSelect == "changeInfor" ? (
                <div className="flex flex-col items-center justify-center gap-4 mt-8 md:gap-10">
                  <div
                    className={`w-3/5 flex items-center justify-center py-4 relative`}
                  >
                    <Image
                      width={100}
                      height={100}
                      src="./img/elements/annouce.png"
                      alt=""
                      className="w-full"
                      draggable={false}
                    />
                    <p className="absolute mt-[12%] text-xs font-black uppercase text-[#ff86a2]">
                      THÔNG TIN CÁ NHÂN
                    </p>
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
                      placeholder="HỌ VÀ TÊN"
                      className="bg-transparent text-white font-bold placeholder:text-white w-[90%] cursor-pointer rounded-sm uppercase  py-2 px-1 text-center relative z-10 mt-1 focus:outline-none"
                    />
                  </div>
                  <div className="relative w-3/5 md:w-3/6  flex items-center justify-center">
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
                      placeholder="ĐỊA CHỈ"
                      className="bg-transparent text-white font-bold placeholder:text-white w-[90%] cursor-pointer rounded-sm uppercase  py-2 px-1 text-center relative z-10 mt-1 focus:outline-none"
                    />
                  </div>
                  <div className="relative w-3/5 md:w-3/6  flex items-center justify-center">
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
                  <button
                    onClick={() => {
                      setIsSelect("");
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
                    <p className="absolute text-xs  text-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black uppercase">
                      Lưu
                    </p>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 mt-8 md:gap-10">
                  <div className="relative w-3/5 md:w-3/6  flex items-center justify-center">
                    <div
                      className={`w-3/5 flex items-center justify-center py-4 relative`}
                    >
                      <Image
                        width={100}
                        height={100}
                        src="./img/elements/annouce.png"
                        alt=""
                        className="w-full"
                        draggable={false}
                      />
                      <p className="absolute mt-[12%] text-xs font-black uppercase text-[#ff86a2]">
                        ĐỔI MẬT KHẨU
                      </p>
                    </div>
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
                      placeholder="MẬT KHẨU MỚI"
                      className="bg-transparent text-white font-bold placeholder:text-white w-[90%] cursor-pointer rounded-sm uppercase  py-2 px-1 text-center relative z-10 mt-1 focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={() => {
                      setIsSelect("");
                    }}
                    className="max-w-3/7 w-3/7 md:w-2/7  flex items-center justify-center relative cursor-pointer hover:scale-110 hover:opacity-80 transition-all"
                  >
                    <Image
                      width={100}
                      height={100}
                      src={"./img/elements/buttonBg3.png"}
                      alt=""
                      className="w-full "
                      draggable={false}
                    />
                    <p className="absolute text-xs  text-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black uppercase">
                      Lưu
                    </p>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
