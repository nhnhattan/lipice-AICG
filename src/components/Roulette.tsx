"use client";
import React, { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";

interface Prize {
  option: string;
  probability: number;
  color: string;
}

const prizes: Prize[] = [
  { option: "Giải 1", probability: 1.5, color: "#ff9999" },
  { option: "Giải 2", probability: 4.5, color: "#99ff99" },
  { option: "Giải 3", probability: 7, color: "#9999ff" },
  { option: "Giải 4", probability: 12, color: "#ffff99" },
  { option: "Giải 5", probability: 15, color: "orange" },
  { option: "Chúc bạn may mắn lần sau", probability: 60, color: "pink" },
];

interface RouletteWheelProps {
  onResult?: (result: { giftName: string; gift: boolean }) => void;
}

const RouletteWheel: React.FC<RouletteWheelProps> = ({ onResult }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const borderRef = useRef<HTMLImageElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 300, height: 300 });
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState("");

  // 🌀 Tính radius động
  const radius = canvasSize.width / 2 - 5;

  const pickPrizeIndex = (): number => {
    const rand = Math.random() * 100;
    let sum = 0;
    for (let i = 0; i < prizes.length; i++) {
      sum += prizes[i].probability;
      if (rand <= sum) return i;
    }
    return prizes.length - 1;
  };

  const drawCurvedText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    radius: number,
    arc: number
  ) => {
    const characters = text.split("");
    const anglePerChar = Math.min(arc / 1.4 / characters.length, 0.15);
    const startAngle = (-anglePerChar * (characters.length - 1)) / 2;

    ctx.save();
    ctx.rotate(Math.PI / 2);
    for (let i = 0; i < characters.length; i++) {
      const ch = characters[i];
      const angle = startAngle + i * anglePerChar;
      ctx.save();
      ctx.rotate(angle);
      ctx.translate(0, -radius);
      ctx.fillText(ch, 0, 0);
      ctx.restore();
    }
    ctx.restore();
  };

  const drawWheel = (rotation = 0) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvasSize;
    const radius = Math.max(width / 2 - 20, 0); // ✅ đảm bảo không âm
    if (radius <= 0) return; // 🚫 bỏ qua khi chưa sẵn sàng

    ctx.clearRect(0, 0, width, height);
    const total = prizes.length;
    let startAngle = rotation;

    for (let i = 0; i < total; i++) {
      const prize = prizes[i];
      const angle = (2 * Math.PI) / total;
      const bgColor = (i + 1) % 2 === 1 ? "#fe85a6" : "#ffffff";

      ctx.beginPath();
      ctx.moveTo(width / 2, height / 2);
      ctx.arc(width / 2, height / 2, radius, startAngle, startAngle + angle);
      ctx.fillStyle = bgColor;
      ctx.fill();
      ctx.closePath();

      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(startAngle + angle / 2);

      const text = prize.option;
      ctx.font = `bold 10px Arial`;
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";

      const words = text.split(" ");
      const lines: string[] = [];
      let line = "";
      for (let j = 0; j < words.length; j++) {
        const test = line ? line + " " + words[j] : words[j];
        const { width: w } = ctx.measureText(test);
        if (w > radius * 0.8 && line) {
          lines.push(line);
          line = words[j];
        } else {
          line = test;
        }
      }
      lines.push(line);

      const lineHeight = 14;
      const baseRadius = radius - 25;
      for (let k = 0; k < lines.length; k++) {
        const r = baseRadius - k * lineHeight;
        drawCurvedText(ctx, lines[k], r, angle);
      }

      ctx.restore();
      startAngle += angle;
    }
  };

  const spinWheel = () => {
    if (spinning) return;
    const pickedIndex = pickPrizeIndex();
    setSpinning(true);
    setWinner("");

    const total = prizes.length;
    const anglePerSlice = (2 * Math.PI) / total;
    const centerAngle = pickedIndex * anglePerSlice + anglePerSlice / 2;
    const spins = 15;
    const targetAngle = spins * 2 * Math.PI + (Math.PI / 2 - centerAngle);

    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const duration = 4000;
      const t = Math.min(progress / duration, 1);
      const easeOut = 1 - Math.pow(1 - t, 3);
      drawWheel(targetAngle * easeOut);

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        setSpinning(false);
        const giftName = prizes[pickedIndex].option;
        const gift = giftName !== "Chúc bạn may mắn lần sau";
        setWinner(giftName);
        onResult?.({ giftName, gift });
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const border = borderRef.current;
    if (!border) return;

    const handleLoad = () => {
      const size = border.clientWidth;
      setCanvasSize({ width: size, height: size });
    };

    border.addEventListener("load", handleLoad);
    handleLoad();

    return () => border.removeEventListener("load", handleLoad);
  }, []);
  
  useEffect(() => {
    drawWheel();
  }, [canvasSize]);

  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="absolute -top-10.5 md:-top-12.5 inset-0 flex items-center justify-center">
          <canvas
            ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}
            className="rounded-full z-10"
            draggable={false}
          />
          <button
            onClick={spinWheel}
            disabled={spinning}
            className="absolute w-1/5 md:w-1/6 z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-115 cursor-pointer"
          >
            <img
              src="./img/elements/spinBtn.png"
              alt=""
              className="w-full"
              draggable={false}
            />
          </button>
        </div>

        <img
          ref={borderRef}
          src="./img/elements/wheelBorder.png"
          alt="Wheel Border"
          className="w-[68%] md:w-[60%] lg:w-[85%] 2xl:w-[63%] relative z-30 top-0"
          draggable={false}
        />

        <img
          src="./img/elements/arrow.png"
          alt="Arrow"
          className="w-14 absolute bottom-[13%] 2xl:bottom-[15%] z-30 left-1/2 -translate-x-1/2"
          draggable={false}
        />

        <img
          src="./img/elements/rabbit2.png"
          alt="Rabbit"
          className="absolute w-1/4 z-20 right-[6%] md:right-[8%] top-[20%] lg:-right-[0.5%] 2xl:right-[7.5%] -translate-y-1/2 rotate-3 cat-shake"
        />
        <img
          src="./img/elements/cat.png"
          alt="Cat"
          className="absolute w-1/5 z-20 left-0 bottom-10 cat-shake"
        />
        <img
          src="./img/elements/mouse.png"
          alt="Mouse"
          className="absolute w-1/5 z-30 left-3/4 -translate-x-1/2 bottom-0 cat-shake"
        />
      </div>
    </div>
  );
};

export default RouletteWheel;
