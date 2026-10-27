import { useEffect, useState } from "react";

const NAME = "Athul Santo";

export default function Loader() {
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1600);
    const doneTimer = setTimeout(() => setDone(true), 2100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (done) return null;

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#020617] transition-opacity duration-500 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <p
        aria-label="Athul Santo"
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        <span className="sr-only">Athul Santo</span>
        <span aria-hidden="true" className="whitespace-nowrap">
          {NAME.split("").map((char, index) => (
            <span
              key={index} 
              className={`snake inline-block ${
                char === "." ? "text-cyan-400" : ""
              }`}
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </p>
    </div>
  );
}
