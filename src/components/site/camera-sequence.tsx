import { useEffect, useRef } from "react";

import camera from "@/assets/camera.png.asset.json";
import showreel from "@/assets/showreel.mp4.asset.json";
import showreelPoster from "@/assets/showreel-poster.jpg.asset.json";
import { project } from "@/lib/site";

// Screen area inside the camera photo (fractions of 1920x1264)
const SCREEN = { x0: 0.198, x1: 0.606, y0: 0.441, y1: 0.847 };
const RATIO = 1264 / 1920;

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function CameraSequence() {
  const wrap = useRef<HTMLDivElement>(null);
  const cam = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLImageElement>(null);
  const black = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = wrap.current;
      if (!el || !cam.current) return;
      const rect = el.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const p = clamp(-rect.top / (rect.height - vh));

      const w = cam.current.offsetWidth;
      const h = w * RATIO;
      const sw = (SCREEN.x1 - SCREEN.x0) * w;
      const sh = (SCREEN.y1 - SCREEN.y0) * h;
      const cx = ((SCREEN.x0 + SCREEN.x1) / 2 - 0.5) * w;
      const cy = ((SCREEN.y0 + SCREEN.y1) / 2 - 0.5) * h;

      const rise = ease(seg(p, 0, 0.22));
      const zoom = easeInOut(seg(p, 0.26, 0.5));
      const target = Math.max(vw / sw, vh / sh) * 1.02;
      const s = 1 + (target - 1) * zoom;
      const y = (1 - rise) * (vh * 0.75);

      cam.current.style.transformOrigin = `${50 + (cx / w) * 100}% ${50 + (cy / h) * 100}%`;
      cam.current.style.transform = `translate(${-cx * zoom}px, ${y - cy * zoom}px) scale(${s})`;
      cam.current.style.opacity = String((0.2 + rise * 0.8) * (1 - seg(p, 0.64, 0.66)));

      if (photo.current) photo.current.style.opacity = String(seg(p, 0.46, 0.52) * (1 - seg(p, 0.64, 0.66)));
      const toBlack = seg(p, 0.56, 0.64);
      const toWhite = seg(p, 0.86, 0.96);
      if (black.current) black.current.style.opacity = String(toBlack * (1 - toWhite));
      if (video.current) {
        const slide = ease(seg(p, 0.64, 0.8));
        video.current.style.transform = `translateX(${(1 - slide) * (vw * 0.6 + 200)}px)`;
        video.current.style.opacity = String(slide);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={wrap} className="relative h-[600vh] border-t border-subtle/25">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div ref={cam} className="w-[min(86vw,820px)] will-change-transform">
          <img
            src={camera.url}
            alt="Kamerans baksida med en bild från finsittningen på skärmen."
            width={1920}
            height={1264}
            className="h-auto w-full select-none"
            draggable={false}
          />
        </div>
        <img
          ref={photo}
          src={project.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-0"
        />
        <div ref={black} className="absolute inset-0 bg-ink opacity-0" />
        <div ref={video} className="absolute w-full max-w-[300px] px-6 opacity-0 md:max-w-[340px]">
          <video
            src={showreel.url}
            poster={showreelPoster.url}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            disablePictureInPicture
            controls={false}
            className="aspect-[9/16] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-ink/10"
          />
        </div>
      </div>
    </section>
  );
}
