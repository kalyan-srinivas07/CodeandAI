"use client";

import Image from "next/image";
import { useState } from "react";

type AmbientHeroBackgroundProps = {
  /** Optional looping video source. Falls back to image if missing/unavailable. */
  videoSrc?: string;
  imageSrc?: string;
};

export default function AmbientHeroBackground({
  videoSrc,
  imageSrc = "/hero-codeandai.jpg",
}: AmbientHeroBackgroundProps) {
  const [videoFailed, setVideoFailed] = useState(!videoSrc);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {!videoFailed && videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-50 will-change-transform"
          autoPlay
          muted
          loop
          playsInline
          poster={imageSrc}
          onError={() => setVideoFailed(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50 will-change-transform"
        />
      )}

      {/* Animated ambient orbs — GPU-friendly transform/opacity */}
      <div className="ambient-orb ambient-orb-a" />
      <div className="ambient-orb ambient-orb-b" />
      <div className="ambient-orb ambient-orb-c" />

      {/* Perspective grid motion */}
      <div className="ambient-grid" />

      {/* Dark scrim for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b12]/95 via-[#0b1c2c]/78 to-[#0b1c2c]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b12]/90 via-transparent to-[#050b12]/45" />
    </div>
  );
}
