import { useEffect, useRef } from "react";

function getCssVar(name: string) {
  if (typeof window === "undefined") return "#b6ff2e";
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const W = 360, H = 360, CELL = 9, COLS = W / CELL, ROWS = H / CELL;
    const G = [
      [0,1,1,1,1,1,0,0],[1,0,0,0,0,0,1,0],[1,0,0,0,0,0,0,0],[1,0,0,1,1,1,1,0],
      [1,0,0,0,0,0,1,0],[1,0,0,0,0,0,1,0],[0,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0],
    ];
    const rnd = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;

    function draw() {
      if (!ctx) return;
      const acid = getCssVar("--acid") || "#b6ff2e";
      const mag = getCssVar("--mag") || "#ff2d78";
      const cyn = getCssVar("--cyn") || "#00e5ff";
      const bg = getCssVar("--background") || "#060606";
      const s1 = getCssVar("--surface-1");
      const s2 = getCssVar("--surface-2");
      const s3 = getCssVar("--surface-3");

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < 60; i++) {
        const x = rnd(0, COLS - 1) * CELL, y = rnd(0, ROWS - 1) * CELL;
        ctx.fillStyle = [s1, s2, s3][rnd(0, 2)];
        ctx.fillRect(x, y, CELL, CELL);
      }
      const ox = 11, oy = 10, s = 3;
      G.forEach((row, ry) =>
        row.forEach((cell, rx) => {
          if (cell) {
            ctx.fillStyle = acid;
            ctx.fillRect((ox + rx * s) * CELL, (oy + ry * s) * CELL, CELL * s, CELL * s);
          }
        }),
      );
      for (let i = 0; i < rnd(0, 2); i++) {
        const gy = rnd(0, ROWS - 1) * CELL,
          gx = rnd(0, COLS - 4) * CELL,
          gw = rnd(3, 10) * CELL;
        ctx.fillStyle = [mag, cyn, acid][rnd(0, 2)];
        ctx.globalAlpha = 0.35;
        ctx.fillRect(gx, gy, gw, CELL);
        ctx.globalAlpha = 1;
      }
      for (let r = 0; r < ROWS; r += 2) {
        ctx.fillStyle = "rgba(0,0,0,.14)";
        ctx.fillRect(0, r * CELL, W, CELL);
      }
      ctx.strokeStyle = acid;
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, W - 2, H - 2);
    }

    draw();
    const id = setInterval(draw, 1000);
    return () => clearInterval(id);
  }, []);

  return <canvas ref={ref} width={360} height={360} className="block h-full w-full [image-rendering:pixelated]" />;
}

export function CaseCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const W = 600, H = 220;
    const colors = ["#5a3fbf","#26b885","#c878d4","#f0ae78","#e83850","#f07030","#2a6ae0","#50c8f0"];
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < 120; i++) {
      const x = Math.random() * W, y = Math.random() * H;
      const s = Math.random() * 12 + 4;
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      ctx.globalAlpha = Math.random() * 0.3 + 0.05;
      ctx.fillRect(x, y, s, s);
    }
    ctx.globalAlpha = 1;
  }, []);
  return (
    <canvas
      ref={ref}
      width={600}
      height={220}
      className="absolute inset-0 h-full w-full opacity-40"
    />
  );
}

interface AvatarProps {
  hair: string;
  skin: string;
  shirt: string;
  accent: string;
}
export function PixelAvatar({ hair, skin, shirt, accent }: AvatarProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;
    const CELL = 10;
    const bg = getCssVar("--surface-1") || "#111";
    const grid = [
      [0,0,0,2,2,2,2,2,2,0,0,0,0,0],
      [0,0,2,2,2,2,2,2,2,2,0,0,0,0],
      [0,0,2,1,2,1,1,2,1,2,0,0,0,0],
      [0,0,2,1,1,1,1,1,1,2,0,0,0,0],
      [0,0,0,1,1,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,1,1,1,1,0,0,0,0,0,0],
      [0,0,0,0,0,1,1,0,0,0,0,0,0,0],
      [0,0,0,3,3,3,3,3,3,0,0,0,0,0],
      [0,0,3,3,3,3,3,3,3,3,0,0,0,0],
      [0,3,3,3,3,3,3,3,3,3,3,0,0,0],
      [0,3,3,3,3,3,3,3,3,3,3,0,0,0],
      [0,3,3,3,3,3,3,3,3,3,3,0,0,0],
      [0,0,4,0,0,0,0,0,0,0,4,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ];
    const map: Record<number, string> = { 0: bg, 1: skin, 2: hair, 3: shirt, 4: accent };
    ctx.clearRect(0, 0, 140, 140);
    grid.forEach((row, ry) =>
      row.forEach((cell, rx) => {
        ctx.fillStyle = map[cell] || bg;
        ctx.fillRect(rx * CELL, ry * CELL, CELL, CELL);
      }),
    );
  }, [hair, skin, shirt, accent]);
  return (
    <canvas
      ref={ref}
      width={140}
      height={140}
      className="[image-rendering:pixelated]"
      style={{ width: 140, height: 140 }}
    />
  );
}
