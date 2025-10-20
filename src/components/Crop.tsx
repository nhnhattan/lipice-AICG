"use client";

import {
  ImageCrop,
  ImageCropApply,
  ImageCropContent,
  ImageCropReset,
} from "@/components/ui/shadcn-io/image-crop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { type ChangeEvent, useRef, useState, useEffect } from "react";

type CropProps = {
  onCropDone: (croppedImage: string) => void;
  onReset?: () => void; // Thêm prop này
};

const Crop = ({ onCropDone, onReset }: CropProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const hasCalled = useRef(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setCroppedImage(null);
      hasCalled.current = false;
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setCroppedImage(null);
    hasCalled.current = false;
    if (onReset) onReset();
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (croppedImage && !hasCalled.current) {
      hasCalled.current = true;
      onCropDone(croppedImage);
    }
  }, [croppedImage, onCropDone]);

  if (!selectedFile) {
    return (
      <div className="space-y-2 w-full">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-[#ffa0c1] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-[#ffa0c1]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-[#ffa0c1]">
                <span className="font-bold">Nhấn vào đây để tải ảnh lên</span>
              </p>
            </div>
            <Input
              id="dropzone-file"
              className="hidden"
              ref={fileInputRef}
              accept="image/*"
              type="file"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
    );
  }

  if (croppedImage) {
    return (
      <div className="space-y-4 flex flex-col items-center justify-center w-4/5">
        <Image
          alt="Cropped"
          height={100}
          src={croppedImage}
          unoptimized
          width={100}
          className="w-full"
        />
        <Button
          onClick={handleReset}
          size="icon"
          type="button"
          variant="ghost"
          className=" bg-red-500 rounded-md w-3/5 cursor-pointer text-white"
        >
          Tải lại ảnh
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <ImageCrop
        aspect={1}
        file={selectedFile}
        maxImageSize={1024 * 1024}
        onCrop={setCroppedImage}
      >
        <ImageCropContent className="max-w-md" />
        <div className="w-full flex items-center justify-evenly gap-2">
          <ImageCropApply className="bg-[#0fa730] px-8 cursor-pointer text-white">
            Cắt
          </ImageCropApply>
          <ImageCropReset className="hidden"></ImageCropReset>
          <Button
            onClick={handleReset}
            size="icon"
            type="button"
            variant="ghost"
            color="red"
            className="bg-[#ff0000] px-8 cursor-pointer text-white"
          >
            Hủy
          </Button>
        </div>
      </ImageCrop>
    </div>
  );
};

export default Crop;
