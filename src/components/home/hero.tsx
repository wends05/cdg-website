"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-primary to-primary/90 text-white overflow-hidden pt-20"
    >
      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        .scroll-animation {
          animation: scrollUp 15s linear infinite;
        }
      `}</style>
      {/* Geometric shapes - circles */}
      <div className="absolute top-20 left-16 w-32 h-32 border-8 border-white/15 rounded-full"></div>
      <div className="absolute top-40 right-32 w-56 h-56 border-6 border-white/20 rounded-full"></div>
      <div className="absolute bottom-32 left-24 w-40 h-40 border-6 border-white/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 border-5 border-white/15 rounded-full"></div>

      {/* Geometric shapes - triangle */}
      <div
        className="absolute bottom-32 right-40"
        style={{
          width: 0,
          height: 0,
          borderLeft: "50px solid transparent",
          borderRight: "50px solid transparent",
          borderBottom: "80px solid rgba(255,255,255,0.15)",
        }}
      ></div>

      {/* Geometric shapes - inverted triangle */}
      <div
        className="absolute top-1/3 left-1/4"
        style={{
          width: 0,
          height: 0,
          borderLeft: "45px solid transparent",
          borderRight: "45px solid transparent",
          borderTop: "75px solid rgba(255,255,255,0.12)",
        }}
      ></div>

      {/* Geometric shapes - diamond */}
      <div className="absolute -top-16 right-16 w-20 h-20 border-6 border-white/20 transform rotate-45"></div>
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border-5 border-white/15 transform rotate-45"></div>

      {/* Geometric shapes - chevron/angle */}
      <div className="absolute top-1/2 -right-10 w-48 h-48 border-r-6 border-b-6 border-white/10 transform rotate-12"></div>
      <div className="absolute -bottom-20 left-1/3 w-56 h-40 border-l-6 border-t-6 border-white/12"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            {/* CDG Logo */}
            <div className="inline-flex items-center gap-3 mb-8 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <div className="flex">
                <div className="w-6 h-6 bg-primary rounded-sm"></div>
                <div className="w-6 h-6 bg-yellow-400 rounded-sm -ml-1"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Centralian
              <br />
              Developer
              <br />
              Group
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
              Be a part of CDG to learn, build, and grow with fellow student
              developers
            </p>

            <button className="rounded-full bg-white text-primary px-8 py-3 font-semibold hover:bg-white/90 transition-all transform hover:scale-105">
              Join Now
            </button>
          </div>

          {/* Right side - Photo Collage */}
          <div className="relative h-full min-h-96 flex flex-col overflow-hidden">
            {/* Fade gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-primary/30 pointer-events-none z-10"></div>
            <div className="absolute inset-0 bg-linear-to-t from-transparent via-transparent to-primary/20 pointer-events-none z-10"></div>
            <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-transparent pointer-events-none z-10"></div>

            <div className="grid grid-cols-2 gap-4 auto-rows-max scroll-animation relative">
              {/* Top right - larger image */}
              <div className="col-span-1 row-span-1">
                <div className="aspect-square bg-yellow-400 rounded-lg overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-linear-to-br from-yellow-300 to-yellow-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      Photo 1
                    </span>
                  </div>
                </div>
              </div>

              {/* Right column - stacked images */}
              <div className="col-span-1 flex flex-col gap-4">
                <div className="aspect-square bg-yellow-400 rounded-lg overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-linear-to-br from-yellow-300 to-yellow-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      Photo 2
                    </span>
                  </div>
                </div>
                <div className="aspect-square bg-yellow-400 rounded-lg overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-linear-to-br from-yellow-300 to-yellow-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      Photo 3
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom left */}
              <div className="col-span-1">
                <div className="aspect-square bg-yellow-400 rounded-lg overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-linear-to-br from-yellow-300 to-yellow-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      Photo 4
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom right */}
              <div className="col-span-1">
                <div className="aspect-square bg-yellow-400 rounded-lg overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-linear-to-br from-yellow-300 to-yellow-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      Photo 5
                    </span>
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
