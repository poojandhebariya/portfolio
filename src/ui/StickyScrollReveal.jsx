import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

const StickyScrollReveal = ({ content }) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const videoRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);

  const previousIndex = useRef(0);
  const activeIndexRef = useRef(0);
  const isSteppingRef = useRef(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const cardTransition = prefersReducedMotion
    ? "opacity 200ms linear"
    : "opacity 450ms ease, transform 550ms cubic-bezier(0.22, 1, 0.36, 1)";

  const scrollToProject = (index) => {
    const el = containerRef.current?.querySelector(
      `[data-project-trigger="${index}"]`,
    );

    el?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    });
  };

  /*
   * ---------------------------------------------------------
   * LOCK VERTICAL SCROLL UNTIL EVERY PROJECT HAS BEEN SEEN
   *
   * While the showcase is pinned to the viewport, each wheel
   * gesture steps to exactly one adjacent project instead of
   * letting the page scroll freely. Only at the first/last
   * project does a further scroll release the page to move
   * on to the previous/next section.
   * ---------------------------------------------------------
   */

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleWheel = (e) => {
      const wrapper = wrapperRef.current;

      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();

      const pinned = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;

      if (!pinned) return;

      const goingDown = e.deltaY > 0;
      const current = activeIndexRef.current;

      const atStart = current === 0;
      const atEnd = current === content.length - 1;

      /*
       * At first/last project,
       * allow normal browser scrolling.
       */
      if ((goingDown && atEnd) || (!goingDown && atStart)) {
        return;
      }

      /*
       * Ignore additional wheel events
       * while transition is running.
       */
      if (isSteppingRef.current) {
        e.preventDefault();
        return;
      }

      const triggers = containerRef.current?.querySelectorAll(
        "[data-project-trigger]",
      );

      if (!triggers) return;

      const targetIndex = goingDown ? current + 1 : current - 1;

      const target = triggers[targetIndex];

      if (!target) return;

      e.preventDefault();

      /*
       * IMPORTANT:
       * Use a different variable name here.
       */
      const targetRect = target.getBoundingClientRect();

      const center = window.innerHeight / 2;

      const targetCenter = targetRect.top + targetRect.height / 2;

      const distance = targetCenter - center;

      isSteppingRef.current = true;

      window.scrollBy({
        top: distance,
        behavior: "smooth",
      });

      setTimeout(() => {
        isSteppingRef.current = false;
      }, 650);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [content.length, prefersReducedMotion]);

  /*
   * ---------------------------------------------------------
   * TRACK SCROLL PROGRESS THROUGH THE CURRENT PROJECT
   *
   * Instead of a boolean "is this trigger's band visible"
   * check, this measures exactly how far the viewport center
   * has moved through the active trigger's own height (0..1).
   * The progress bar reflects this value directly, and
   * activeIndex only advances once it reaches a boundary —
   * so it can never jump by more than one project per crossing.
   * ---------------------------------------------------------
   */

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      const wrapper = wrapperRef.current;

      if (!wrapper) return;

      const wrapperRect = wrapper.getBoundingClientRect();
      const pinned =
        wrapperRect.top <= 0 && wrapperRect.bottom >= window.innerHeight;

      if (!pinned) return;

      const triggers = containerRef.current?.querySelectorAll(
        "[data-project-trigger]",
      );

      if (!triggers || !triggers.length) return;

      const centerY = window.innerHeight / 2;

      let idx = 0;
      let frac = 0;

      for (let i = 0; i < triggers.length; i++) {
        const r = triggers[i].getBoundingClientRect();
        const localProgress = (centerY - r.top) / r.height;

        if (localProgress < 0) {
          idx = i === 0 ? 0 : i - 1;
          frac = i === 0 ? 0 : 1;
          break;
        }

        idx = i;
        frac = Math.min(1, localProgress);

        if (localProgress <= 1) break;
      }

      setProgress(frac);

      if (idx !== previousIndex.current) {
        setDirection(idx > previousIndex.current ? 1 : -1);

        previousIndex.current = idx;

        setActiveIndex(idx);
      }
    };

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        measure();

        ticking = false;
      });
    };

    measure();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [content.length]);

  /*
   * ---------------------------------------------------------
   * PLAY ACTIVE VIDEO
   * ---------------------------------------------------------
   */

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();

        try {
          video.currentTime = 0;
        } catch {}
      }
    });
  }, [activeIndex]);

  /*
   * ---------------------------------------------------------
   * COLORS
   * ---------------------------------------------------------
   */

  const colors = [
    {
      text: "text-violet-400",
      bg: "bg-violet-500",
      border: "border-violet-500/30",
    },
    {
      text: "text-blue-400",
      bg: "bg-blue-500",
      border: "border-blue-500/30",
    },
    {
      text: "text-cyan-400",
      bg: "bg-cyan-500",
      border: "border-cyan-500/30",
    },
    {
      text: "text-indigo-400",
      bg: "bg-indigo-500",
      border: "border-indigo-500/30",
    },
  ];

  const color = colors[activeIndex % colors.length];

  return (
    <div ref={containerRef} className="relative">
      {/* =====================================================
          DESKTOP SHOWCASE
      ===================================================== */}

      <div ref={wrapperRef} className="hidden lg:block relative">
        {/* ===================================================
            STICKY SHOWCASE
        =================================================== */}

        <div className="sticky top-0 h-screen overflow-hidden z-20">
          {/* Background */}

          <div className="absolute inset-0 bg-dark-900">
            {/* Ambient glow — a heavily blurred rendition of the
                active project's own thumbnail, crossfaded between
                projects. Kept low-opacity so it reads as color/mood,
                never as a legible image. */}

            {content.map((item, index) => {
              const glow = item.image || item.video;

              if (!glow) return null;

              return (
                <div
                  key={index}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: item.image
                      ? `url(${item.image})`
                      : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "scale(1.3)",
                    filter: "blur(90px) saturate(1.3)",
                    opacity: index === activeIndex ? 0.16 : 0,
                    transition: prefersReducedMotion
                      ? "none"
                      : "opacity 900ms ease",
                  }}
                />
              );
            })}

            <div className="absolute inset-0 bg-grid-pattern opacity-[0.12]" />

            <div
              className={`
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[550px]
                h-[550px]
                rounded-full
                blur-[140px]
                opacity-[0.05]
                ${color.bg}
                transition-colors
                duration-700
              `}
            />
          </div>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="h-full max-w-[1400px] mx-auto px-10 xl:px-16 flex items-center">
            {/* LEFT */}

            <div className="w-[42%] relative h-[500px]">
              {content.map((item, index) => {
                const active = index === activeIndex;

                const previous = index === activeIndex - direction;

                let transform = "translateY(40px)";

                if (active) {
                  transform = "translateY(0px)";
                }

                if (previous) {
                  transform =
                    direction === 1 ? "translateY(-40px)" : "translateY(40px)";
                }

                if (prefersReducedMotion) {
                  transform = "translateY(0px)";
                }

                return (
                  <div
                    key={index}
                    className="absolute inset-0 flex items-center"
                    style={{
                      opacity: active ? 1 : 0,

                      transform,

                      transition: cardTransition,

                      pointerEvents: active ? "auto" : "none",
                    }}
                  >
                    <div className="max-w-[500px]">
                      {/* Number */}

                      <div className="flex items-center gap-3 mb-5">
                        <span
                          className={`
                            text-xs
                            font-medium
                            ${color.text}
                          `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="w-8 h-px bg-white/10" />

                        <span className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
                          Project
                        </span>
                      </div>

                      {/* Title */}

                      <h3 className="text-4xl xl:text-5xl font-outfit font-bold text-white leading-[1.05]">
                        {item.name}
                      </h3>

                      {/* Description */}

                      <p className="mt-5 text-sm xl:text-base text-slate-400 leading-relaxed max-w-[470px]">
                        {item.description}
                      </p>

                      {/* Tech */}

                      {(item.s1 ||
                        item.s2 ||
                        item.s3 ||
                        item.s4 ||
                        item.s5) && (
                        <div className="mt-6">
                          <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600 mb-3">
                            Built With
                          </p>

                          <div className="flex gap-2.5">
                            {item.s1 && (
                              <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] p-1.5">
                                <img
                                  src={item.s1}
                                  alt="Technology"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            )}

                            {item.s2 && (
                              <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] p-1.5">
                                <img
                                  src={item.s2}
                                  alt="Technology"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            )}

                            {item.s3 && (
                              <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] p-1.5">
                                <img
                                  src={item.s3}
                                  alt="Technology"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            )}

                            {item.s4 && (
                              <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] p-1.5">
                                <img
                                  src={item.s4}
                                  alt="Technology"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            )}

                            {item.s5 && (
                              <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] p-1.5">
                                <img
                                  src={item.s5}
                                  alt="Technology"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Buttons */}

                      <div className="flex gap-3 mt-7">
                        {item.github && (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex
                              items-center
                              gap-2
                              px-4
                              py-2.5
                              rounded-lg
                              bg-white
                              text-black
                              text-xs
                              font-medium
                              hover:-translate-y-1
                              transition-transform
                              duration-300
                            "
                          >
                            <FaGithub size={14} />
                            GitHub
                          </a>
                        )}

                        {item.linkedin && (
                          <a
                            href={item.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex
                              items-center
                              gap-2
                              px-4
                              py-2.5
                              rounded-lg
                              bg-white/[0.04]
                              border
                              border-white/[0.1]
                              text-white
                              text-xs
                              font-medium
                              hover:bg-white/[0.08]
                              transition-all
                              duration-300
                            "
                          >
                            <FaLinkedin size={14} />
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                RIGHT VIDEO
            ================================================= */}

            <div className="w-[58%] pl-10 xl:pl-16">
              <div className="relative">
                {/* Frame */}

                <div className="absolute -inset-2 rounded-[24px] border border-white/[0.04]" />

                {/* Video */}

                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/[0.1] shadow-2xl">
                  {content.map((item, index) => {
                    const active = index === activeIndex;

                    const previous = index === activeIndex - direction;

                    let transform = "translateY(40px) scale(1.02)";

                    if (active) {
                      transform = "translateY(0px) scale(1)";
                    }

                    if (previous) {
                      transform =
                        direction === 1
                          ? "translateY(-40px) scale(1.02)"
                          : "translateY(40px) scale(1.02)";
                    }

                    if (prefersReducedMotion) {
                      transform = "translateY(0px) scale(1)";
                    }

                    return (
                      <div
                        key={index}
                        className="absolute inset-0"
                        style={{
                          opacity: active ? 1 : 0,

                          transform,

                          transition: cardTransition,

                          zIndex: active ? 10 : 0,
                        }}
                      >
                        {item.video ? (
                          <video
                            ref={(el) => {
                              videoRefs.current[index] = el;
                            }}
                            src={item.video}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                          />
                        ) : item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-white/[0.02]">
                            <span className="text-slate-600 text-sm">
                              No preview
                            </span>
                          </div>
                        )}

                        {/* Overlay */}

                        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                        {/* Bottom gradient */}

                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                      </div>
                    );
                  })}
                </div>

                {/* Progress line — fills across the CURRENT project only */}

                <div className="absolute -bottom-4 left-0 right-0">
                  <div className="h-px bg-white/[0.08]">
                    <div
                      className={`h-full ${color.bg}`}
                      style={{
                        width: `${progress * 100}%`,
                        transition: prefersReducedMotion
                          ? "none"
                          : "width 120ms linear, background-color 500ms ease",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              SIDE INDICATOR
          ================================================= */}

          <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
            {content.map((item, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to ${item.name}`}
                onClick={() => scrollToProject(index)}
                className="py-1.5 cursor-pointer group/dot"
              >
                <span
                  className={`
                    block
                    transition-all
                    duration-500
                    group-hover/dot:bg-white/40
                    ${
                      index === activeIndex
                        ? `w-7 h-[2px] ${color.bg}`
                        : "w-2 h-px bg-white/10"
                    }
                  `}
                />
              </button>
            ))}
          </div>

          {/* Scroll indicator */}

          {activeIndex < content.length - 1 && (
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <span className="text-[8px] uppercase tracking-[0.3em] text-slate-600">
                Scroll
              </span>

              <FaArrowDown size={9} className="text-slate-600 animate-bounce" />
            </div>
          )}
        </div>

        {/* ===================================================
            SCROLL TRIGGERS
        =================================================== */}

        <div className="relative z-10">
          {content.map((_, index) => (
            <div
              key={index}
              data-project-trigger={index}
              className="pointer-events-none h-[55vh]"
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          MOBILE
      ===================================================== */}

      <div className="lg:hidden px-5 pb-20">
        <div className="space-y-20">
          {content.map((item, index) => (
            <MobileProject
              key={index}
              item={item}
              index={index}
              color={colors[index % colors.length]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/*
 * ===========================================================
 * MOBILE PROJECT
 * ===========================================================
 */

const MobileProject = ({ item, index, color }) => {
  const videoRef = useRef(null);
  const articleRef = useRef(null);

  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const el = articleRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article
      ref={articleRef}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0px)" : "translateY(40px)",
        transition:
          "opacity 500ms ease, transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Number */}

      <div className="flex items-center gap-3 mb-5">
        <span className={`text-xs font-medium ${color.text}`}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="w-8 h-px bg-white/10" />

        <span className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
          Project
        </span>
      </div>

      {/* Title */}

      <h3 className="text-3xl font-outfit font-bold text-white leading-tight">
        {item.name}
      </h3>

      {/* Description */}

      <p className="mt-4 text-sm text-slate-400 leading-relaxed">
        {item.description}
      </p>

      {/* Video */}

      <div className="relative mt-7 aspect-video rounded-xl overflow-hidden bg-black border border-white/[0.1]">
        {item.video ? (
          <video
            ref={videoRef}
            src={item.video}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        ) : item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      {/* Tech */}

      {(item.s1 || item.s2 || item.s3 || item.s4 || item.s5) && (
        <div className="mt-5 flex gap-2">
          {item.s1 && (
            <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] p-1.5">
              <img
                src={item.s1}
                alt="Technology"
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {item.s2 && (
            <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] p-1.5">
              <img
                src={item.s2}
                alt="Technology"
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {item.s3 && (
            <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] p-1.5">
              <img
                src={item.s3}
                alt="Technology"
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {item.s4 && (
            <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] p-1.5">
              <img
                src={item.s4}
                alt="Technology"
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {item.s5 && (
            <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] p-1.5">
              <img
                src={item.s5}
                alt="Technology"
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>
      )}

      {/* Buttons */}

      <div className="flex gap-3 mt-6">
        {item.github && (
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-black text-xs font-medium"
          >
            <FaGithub size={14} />
            GitHub
          </a>
        )}

        {item.linkedin && (
          <a
            href={item.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.1] text-white text-xs font-medium"
          >
            <FaLinkedin size={14} />
            LinkedIn
          </a>
        )}
      </div>
    </article>
  );
};

export default StickyScrollReveal;
