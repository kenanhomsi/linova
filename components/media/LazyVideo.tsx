"use client";

import React from "react";

type LazyVideoProps = Omit<
  React.VideoHTMLAttributes<HTMLVideoElement>,
  "src" | "preload" | "autoPlay"
> & {
  src: string;
  /** When true, loads the video source after first paint (still avoids render-blocking preload). */
  eager?: boolean;
  /** IntersectionObserver rootMargin, used when eager=false. */
  rootMargin?: string;
  /** Initial preload mode before src is attached. Defaults to "none". */
  initialPreload?: "none" | "metadata" | "auto";
  /** Once loaded, the preload mode to use. Defaults to "metadata". */
  loadedPreload?: "none" | "metadata" | "auto";
  /** If true, attempts to autoplay once src is attached. */
  autoPlay?: boolean;
};

export function LazyVideo({
  src,
  eager = false,
  rootMargin = "200px 0px",
  initialPreload = "none",
  loadedPreload = "metadata",
  autoPlay = false,
  muted = true,
  playsInline = true,
  ...rest
}: LazyVideoProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = React.useState(eager);

  React.useEffect(() => {
    if (eager) {
      // Defer attaching src until after first paint.
      const id = requestAnimationFrame(() => setShouldLoad(true));
      return () => cancelAnimationFrame(id);
    }
  }, [eager]);

  React.useEffect(() => {
    if (shouldLoad || eager) return;
    const el = wrapperRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [shouldLoad, eager, rootMargin]);

  React.useEffect(() => {
    if (!shouldLoad) return;
    if (!autoPlay) return;
    const v = videoRef.current;
    if (!v) return;
    // Some browsers require play() after a microtask even when muted.
    queueMicrotask(() => {
      v.play().catch(() => {});
    });
  }, [shouldLoad, autoPlay]);

  return (
    <div ref={wrapperRef}>
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        preload={shouldLoad ? loadedPreload : initialPreload}
        muted={muted}
        playsInline={playsInline}
        {...(autoPlay ? { autoPlay: true } : {})}
        {...rest}
      />
    </div>
  );
}

