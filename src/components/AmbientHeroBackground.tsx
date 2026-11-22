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
      {/* Cool slate base — not cream / not pure white */}
      <div className="absolute inset-0 bg-[#d7e0ea]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#c8d5e4] via-[#d9e3ee] to-[#b9c9db]" />

      {!videoFailed && videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18] will-change-transform"
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
          className="object-cover object-center opacity-[0.16] will-change-transform"
        />
      )}

      <div className="ambient-orb ambient-orb-a ambient-orb-slate" />
      <div className="ambient-orb ambient-orb-b ambient-orb-slate" />
      <div className="ambient-orb ambient-orb-c ambient-orb-slate" />

      <div className="ambient-grid ambient-grid-slate" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#c5d2e2]/90 via-[#d4dee9]/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#b7c6d8]/75 via-transparent to-[#d5e0ec]/45" />
    </div>
  );
}
