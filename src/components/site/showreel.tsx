import showreel from "@/assets/showreel.mp4.asset.json";
import showreelPoster from "@/assets/showreel-poster.jpg.asset.json";

export function Showreel() {
  return (
    <section className="border-t border-subtle/25">
      <div className="shell py-16 md:py-20">
        <div className="mx-auto w-full max-w-[320px] md:max-w-[360px]">
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
