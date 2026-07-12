import HeroContent from "./HeroContent";
import HeroPhoto from "./HeroPhoto";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#090b0f] pb-16 pt-28 text-white"
    >
      {/* Decoración sutil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-blue-600/[0.08] blur-[120px]" />

        <div className="absolute bottom-[-220px] right-[-160px] h-[460px] w-[460px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] xl:gap-20">
          <HeroContent />
          <HeroPhoto />
        </div>

        <div className="mt-16">
          <HeroStats />
        </div>
      </div>
    </section>
  );
}