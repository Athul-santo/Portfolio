import { useEffect, useState } from "react";

const NAME = "Athul Santo";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    // Keep the intro short and calm for reduced-motion users.
    const startDelay = reduceMotion ? 0 : 900;
    const countDuration = reduceMotion ? 0 : 600;
    const fadeDelay = reduceMotion ? 400 : 1650;
    const removeDelay = reduceMotion ? 750 : 2150;

    const startedAt = performance.now() + startDelay;
    let frameId = 0;

    const tick = (now) => {
      const elapsed = Math.max(0, now - startedAt);
      const t = countDuration === 0 ? 1 : Math.min(1, elapsed / countDuration);
      // Ease in-out so the bar settles naturally at 100%.
      const eased =
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      setProgress(Math.round(eased * 100));

      if (t < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    const fadeTimer = setTimeout(() => setFading(true), fadeDelay);
    const doneTimer = setTimeout(() => setDone(true), removeDelay);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (done) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[100] overflow-hidden bg-base-100 transition-opacity duration-500 ease-out ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="sr-only">Loading portfolio</span>

      <div
        aria-hidden="true"
        className="relative flex h-full w-full items-center justify-center px-8"
      >
        {/* Ambient backdrop */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[130px]" />
          <div className="absolute -bottom-48 -right-32 h-[28rem] w-[28rem] rounded-full bg-secondary/[0.07] blur-[120px]" />
          <div className="loader-grid absolute inset-0 text-base-content opacity-[0.05]" />
        </div>

        <div
          className={`relative flex w-full max-w-md flex-col items-center text-center transition-all duration-500 ease-out ${
            fading ? "scale-[0.98] opacity-0" : "opacity-100"
          }`}
        >
          {/* Name */}
          <p className="text-lg font-semibold uppercase tracking-[0.24em] text-base-content sm:text-2xl sm:tracking-[0.3em]">
            <span className="sr-only">Athul Santo</span>
            <span
              aria-hidden="true"
              className="-mr-[0.24em] inline-block sm:-mr-[0.3em]"
            >
              {NAME.split("").map((char, index) => (
                <span
                  key={index}
                  className="loader-letter inline-block"
                  style={{ animationDelay: `${0.15 + index * 0.03}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </p>

          <p
            className="loader-fade mt-4 text-[11px] font-medium uppercase tracking-[0.3em] text-base-content/45"
            style={{ animationDelay: "0.55s" }}
          >
            Full Stack Developer
          </p>

          {/* Progress */}
          <div
            className="loader-fade mt-12 w-full max-w-xs"
            style={{ animationDelay: "0.65s" }}
          >
            <div className="flex items-center justify-between pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-base-content/40">
              <span>Loading portfolio</span>
              <span className="w-9 text-right tabular-nums text-base-content/60">
                {progress}%
              </span>
            </div>

            <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-base-content/10">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-primary to-secondary"
                style={{ width: `${progress}%` }}
              >
                <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary shadow-[0_0_10px_2px] shadow-primary/60" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer mark */}
        <p className="absolute inset-x-0 bottom-8 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-base-content/25">
          Portfolio / 2026
        </p>
      </div>
    </div>
  );
}
