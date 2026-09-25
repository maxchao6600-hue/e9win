"use client";

import { useEffect, useRef } from "react";

type PayItem = { id: string; name: string; image: string };

const CYCLE_MS = 32000;

export function PaymentRail({ items }: { items: readonly PayItem[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const dragRef = useRef<{ x: number; left: number } | null>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const half = rail.scrollWidth / 2;
      if (half > 0 && !pausedRef.current && !dragRef.current) {
        rail.scrollLeft += (half / CYCLE_MS) * (now - last);
        if (rail.scrollLeft >= half) rail.scrollLeft -= half;
      }
      last = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  function wrap(rail: HTMLDivElement) {
    const half = rail.scrollWidth / 2;
    if (half <= 0) return;
    if (rail.scrollLeft >= half) rail.scrollLeft -= half;
    if (rail.scrollLeft < 0) rail.scrollLeft += half;
  }

  return (
    <div
      className="pay-rail"
      ref={railRef}
      tabIndex={0}
      aria-label="Payment methods"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onFocus={() => { pausedRef.current = true; }}
      onBlur={() => { pausedRef.current = false; }}
      onPointerDown={(event) => {
        const rail = railRef.current;
        if (!rail) return;
        pausedRef.current = true;
        if (event.pointerType !== "mouse" || event.button !== 0) return;
        dragRef.current = { x: event.clientX, left: rail.scrollLeft };
        rail.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        const drag = dragRef.current;
        const rail = railRef.current;
        if (!drag || !rail) return;
        rail.scrollLeft = drag.left - (event.clientX - drag.x);
        wrap(rail);
      }}
      onPointerUp={(event) => {
        dragRef.current = null;
        if (event.currentTarget.matches(":hover")) return;
        pausedRef.current = false;
      }}
      onPointerCancel={() => { dragRef.current = null; pausedRef.current = false; }}
    >
      <ul className="pay-track">
        {items.map((item) => (
          <li className="pay-badge" key={item.id}>
            <img src={item.image} alt={item.name} width={96} height={48} loading="lazy" />
          </li>
        ))}
        {items.map((item) => (
          <li className="pay-badge" key={`${item.id}-loop`} aria-hidden="true">
            <img src={item.image} alt="" width={96} height={48} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
}
