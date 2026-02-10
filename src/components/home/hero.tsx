"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-r from-[#3186FF] to-[#1B38CC] px-3 pt-20 text-white"
    >
      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, calc(-50% - 0.375rem), 0);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translate3d(0, calc(-50% - 0.375rem), 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .scroll-up {
          animation: scrollUp 24s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }

        .scroll-down {
          animation: scrollDown 24s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
      <div className="relative mx-auto h-full max-w-full overflow-hidden">
        {/* Geometric accents */}
        <div className="absolute -left-24 top-6 h-44 w-44 rounded-full border-14 border-white/95"></div>
        <div className="absolute left-[30%] top-[18%] h-12 w-12 rounded-full border-8 border-white/95"></div>
        <div className="absolute bottom-4 left-4 h-20 w-20 rounded-full border-10 border-white/95"></div>
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full border-12 border-white/95"></div>
        <div className="absolute right-[35%] top-[16%] h-48 w-48 border-10 border-white/95 rotate-45"></div>
        <div
          className="absolute right-[46%] top-[58%] -translate-y-1/2"
          style={{
            width: 0,
            height: 0,
            borderLeft: "60px solid transparent",
            borderRight: "60px solid transparent",
            borderTop: "100px solid rgba(255,255,255,0.95)",
          }}
        ></div>
        <div className="absolute bottom-8 left-[30%] h-20 w-20 rotate-45 border-8 border-white/95"></div>

        {/* Content */}
        <div className="relative mx-auto max-w-full px-4 py-10 md:px-6 md:py-8">
          <div className="grid items-center gap-8 md:grid-cols-2 md:items-start">
            {/* Left side - Content */}
            <div className="z-10 md:pt-6 md:pl-2">
              {/* CDG Logo + wordmark */}
              <div className="mb-4 inline-flex items-center gap-4 sm:gap-5">
                <div className="relative h-16 w-24 sm:h-20 sm:w-32 md:h-24 md:w-36">
                  <Image
                    src="/logo_1.svg"
                    alt="Centralian Developer Group logo"
                    fill
                    priority
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 120px, 144px"
                    className="object-contain object-left"
                  />
                </div>
                <h2 className="text-4xl font-medium leading-[1.08] sm:text-5xl md:text-[3rem]">
                  Centralian
                  <br />
                  Developer
                  <br />
                  Group
                </h2>
              </div>

              <p className="mb-5 max-w-[26rem] text-base leading-relaxed text-white/90">
                Be a part of CDG to learn, build, and grow with fellow student
                developers
              </p>

              <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-white/90">
                Join Now
                <span className="text-base leading-none">{">"}</span>
              </button>
            </div>

            {/* Right side - Photo Collage */}
            <div className="relative h-full min-h-96 overflow-hidden pt-2 md:pl-6 md:pt-2">
              {/* Edge fade masks */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-linear-to-b from-[#2f79f2] to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-linear-to-t from-[#2559d9] to-transparent" />

              <div className="grid h-130 grid-cols-2 gap-3">
                <div className="overflow-hidden">
                  <div className="scroll-up flex  flex-col gap-3">
                    {[1, 2, 3, 1, 2, 3].map((photo, idx) => (
                      <div
                        key={`left-${photo}-${idx}`}
                        className="aspect-4/5 rounded-xl bg-yellow-400 shadow-lg overflow-hidden"
                      >
                        <div className="w-full h-full bg-yellow-400 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            Photo {photo}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden">
                  <div className="scroll-down flex flex-col gap-3">
                    {[4, 5, 6, 4, 5, 6].map((photo, idx) => (
                      <div
                        key={`right-${photo}-${idx}`}
                        className="aspect-4/5 rounded-xl bg-yellow-400 shadow-lg overflow-hidden"
                      >
                        <div className="w-full h-full bg-yellow-400 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            Photo {photo}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
