"use client";

import Image from "next/image";
import { useStepperStore } from "../stores/stepperStore";
import React, { useCallback, useRef, useState } from "react";
import Crop from "./Crop";
import toast from "react-hot-toast";
import Webcam from "react-webcam";


const Step4:React.FC = () => {
  const setCurrentStep = useStepperStore((state) => state.setCurrentStep);
  const reset = useStepperStore((state) => state.reset);

  const [isSelect, setIsSelect] = useState("");
  const [isCapture, setIsCapture] = useState("");
  const [isPhoto, setIsPhoto] = useState("");
  const [isUpload, setIsUpload] = useState(false);
  const webcamRef: any = useRef(null);
  const [loading, setLoading] = useState(true);
  const [cameraError, setCameraError] = useState(false);

  const handleUpload = () => {
    if (!isPhoto) {
      toast.error("Bạn chưa tải ảnh lên!");
    } else {
      setIsUpload(!isUpload);
    }
  };

  const handleCropDone = (croppedImg: string) => {
    const base64Data = croppedImg.replace(/^data:image\/\w+;base64,/, "");
    setIsPhoto(base64Data);
    toast.success("Cắt ảnh thành công!");
    console.log(base64Data);
    setIsUpload(false);
  };

  const handleResetPhoto = () => {
    setIsPhoto("");
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (!imageSrc) {
      toast.error("Camera chưa sẵn sàng để chụp. Vui lòng thử lại.");
      return;
    }
    setIsPhoto(imageSrc);
    console.log(imageSrc);
  }, []);

  const handleCameraReady = () => {
    setLoading(false);
    setCameraError(false);
    console.log("Camera is ready!");
  };

  const handleCameraError = (error: string | DOMException) => {
    setLoading(false);
    setCameraError(true);

    if (typeof error === "string") {
      console.error("Camera error:", error);
      toast.error("Không thể truy cập camera trong trình duyệt này: " + error);
    } else {
      console.error("Camera error:", error.message);
      toast.error("Không thể truy cập camera trong trình duyệt này: " + error);
    }
  };

  const videoConstraints = {
    width: 1024,
    height: 1024,
    facingMode: "user",
  };

  return (
    <>
      <div className="flex flex-col items-center h-full gap-4 w-full overflow-hidden box-border">
        <Image
          width={100}
          height={100}
          src="./img/bg/chosenBG.png"
          alt=""
          className="w-full fixed object-cover object-center top-0 cursor-none -z-[1]"
          draggable={false}
        />
        <div className="w-full h-[90%] max-h-[90%] flex flex-col items-center justify-center gap-8">
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
          {isSelect == "" ? (
            <>
              <div className="max-w-4/5 w-4/5 md:w-3/5 lg:w-4/5 gap-4 flex flex-col items-center justify-center relative oveflow-hidden">
                <button
                  onClick={() => {
                    setIsSelect("camera");
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
                    Chụp ảnh
                  </p>
                </button>
                <button
                  onClick={() => {
                    setIsSelect("upload");
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
                  <p className="absolute text-xs text-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black uppercase">
                    Tải ảnh lên
                  </p>
                </button>
              </div>
            </>
          ) : isSelect == "camera" ? (
            <div className="max-w-4/5 w-4/5 md:w-3/5 lg:w-4/5 gap-4 flex flex-col items-center justify-center relative oveflow-hidden">
              {isPhoto ? (
                <div className="max-w-4/5 w-4/5 gap-1 flex flex-col items-center justify-center relative oveflow-hidden">
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

                    <Image
                      width={100}
                      height={100}
                      src={isPhoto ? isPhoto : ""}
                      alt=""
                      className="w-[85%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-[1] object-contain rounded-lg"
                      draggable={false}
                    />
                  </div>
                </div>
              ) : (
                <div className="max-w-4/5 w-4/5  gap-1 flex flex-col items-center justify-center relative oveflow-hidden">
                  <Image
                    width={100}
                    height={100}
                    src={"./img/elements/imgStep3.png"}
                    alt=""
                    className={`absolute -bottom-[2%] w-full h-[102%] z-10 ${
                      loading ? "opacity-0" : "opacity-100"
                    }`}
                    draggable={false}
                  />
                  {loading && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <span className="text-pink-500 font-semibold flex items-center justify-center gap-4">
                        <div role="status">
                          <svg
                            aria-hidden="true"
                            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-pink-400"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                        Đang tải camera...
                      </span>
                    </div>
                  )}
                  {cameraError && (
                    <div className="text-red-500 font-semibold">
                      Không thể truy cập camera
                    </div>
                  )}
                  <Webcam
                    className={`rounded-md w-full border-2 border-pink-500 ${
                      loading ? "opacity-0" : "opacity-100"
                    }`}
                    ref={webcamRef}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    onUserMedia={handleCameraReady}
                    onUserMediaError={handleCameraError}
                    reversed
                  />
                </div>
              )}

              <div className="flex items-center justify-center gap-4">
                {isPhoto ? (
                  <button
                    onClick={() => {
                      setLoading(true);
                      setIsPhoto("");
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
                      Chụp lại
                    </p>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsSelect("");
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
                      Quay lại
                    </p>
                  </button>
                )}

                {isPhoto ? (
                  <button
                    onClick={() => {
                      if (!isPhoto) {
                        toast.error("Bạn chưa chụp ảnh/tải ảnh để tiếp tục!");
                      } else {
                        toast.success("Hoàn thành bước 4!");
                        setCurrentStep(5);
                      }
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
                      Next
                    </p>
                  </button>
                ) : (
                  <button
                    onClick={capture}
                    className={`max-w-5/7 w-4/7 flex items-center justify-center relative cursor-pointer hover:scale-110 hover:opacity-80 transition-all ${
                      loading ? "grayscale" : ""
                    }`}
                    disabled={loading}
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
                      Chụp ảnh
                    </p>
                  </button>
                )}
              </div>
            </div>
          ) : isSelect == "upload" ? (
            <div className="max-w-4/5 w-4/5 gap-4 flex flex-col items-center justify-center relative oveflow-hidden">
              <Crop onCropDone={handleCropDone} onReset={handleResetPhoto} />

              {isPhoto ? (
                <button
                  onClick={() => {
                    if (!isPhoto) {
                      toast.error("Bạn chưa chụp ảnh/tải ảnh để tiếp tục!");
                    } else {
                      toast.success("Hoàn thành bước 4!");
                      setCurrentStep(5);
                    }
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
                    Next
                  </p>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsSelect("");
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
                    Quay lại
                  </p>
                </button>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Step4;
