import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ThreeDMarquee } from "./ui/3d-marquee";

const Hero = () => {
  // return (
  //   <div className="pb-20 pt-36 ">
  //     {/**
  //      *  UI: Spotlights
  //      *  Link: https://ui.aceternity.com/components/spotlight
  //      */}
  //     <div>
  //       <Spotlight
  //         className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
  //         fill="white"
  //       />
  //       <Spotlight
  //         className="h-[80vh] w-[50vw] top-10 left-full"
  //         fill="purple"
  //       />
  //       <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
  //     </div>
  //     {/**
  //      *  UI: grid
  //      *  change bg color to bg-black-100 and reduce grid color from
  //      *  0.2 to 0.03
  //      */}
  //     <div
  //       className="h-screen w-full dark:bg-black-100  dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
  //      absolute top-0 left-0 flex items-center justify-center"
  //     >
  //       {/* Radial gradient for the container to give a faded look */}
  //       <div
  //         // chnage the bg to bg-black-100, so it matches the bg color and will blend in
  //         className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
  //         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
  //       />
  //     </div>
  //     <div className="flex justify-center relative my-20 z-10">
  //       <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
  //         <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
  //           Dynamic Web Magic with Next.js
  //         </p>
  //         {/**
  //          *  Link: https://ui.aceternity.com/components/text-generate-effect
  //          *
  //          *  change md:text-6xl, add more responsive code
  //          */}
  //         <TextGenerateEffect
  //           words="Transforming Concepts into user Experiences"
  //           className="text-center text-[40px] md:text-5xl lg:text-6xl"
  //         />
  //         <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
  //           Hi! I&apos;m Talha , a Next.js Developer based in Croatia.
  //         </p>
  //         <a href="#about">
  //           <MagicButton
  //             title="Show my work"
  //             icon={<FaLocationArrow />}
  //             position="right"
  //           />
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // );
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];
  return (
    <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl leading-tight">
        I don’t just build websites. I craft{" "}
        <span className="relative z-20 inline-block rounded-xl bg-blue-900/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          realities
        </span>
        .
      </h2>

      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        I'm Talha — a front-end developer crafting smooth interfaces, fast
        experiences, and clean code. Driven by curiosity, powered by caffeine,
        and obsessed with creating things that feel alive.
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button className="rounded-md bg-blue-600/40 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          View My Work
        </button>
        <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
          Let’s Connect
        </button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
};

export default Hero;
