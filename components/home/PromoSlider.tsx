"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Promotion } from "@/lib/content";

type Slide = Promotion & { image: string };

const INTERVAL = 5000;

export function PromoSlider({ items }: { items: Slide[] }) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const reduced = useRef(false);
  const point = useRef<{ x: number; y: number } | null>(null);
  const count = items.length;

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (count < 2) return;
    const timer = window.setInterval(() => {
      if (paused.current || reduced.current) return;
      setIndex((current) => (current + 1) % count);
    }, INTERVAL);
    return () => window.clearInterval(timer);
  }, [count]);

  function step(direction: number) {
    setIndex((current) => (current + direction + count) % count);
  }

  if (count === 0) return null;

  return (
    <div
      className="promo-slider"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); step(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); step(1); }
      }}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onPointerDown={(event) => {
        paused.current = true;
        point.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerUp={(event) => {
        const start = point.current;
        point.current = null;
        if (!event.currentTarget.matches(":hover")) paused.current = false;
        if (!start) return;
        const dx = event.clientX - start.x;
        const dy = event.clientY - start.y;
        if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
        step(dx < 0 ? 1 : -1);
      }}
      onPointerCancel={() => { point.current = null; paused.current = false; }}
    >
      <div className="promo-stage">
        {items.map((item, slide) => (
          <Link
            key={item.id}
            href={item.href ?? "/promotions"}
            className={slide === index ? "is-active" : undefined}
            aria-hidden={slide === index ? undefined : true}
            tabIndex={slide === index ? undefined : -1}
          >
            <img
              src={item.image}
              alt={item.title}
              width={1280}
              height={400}
              fetchPriority={slide === 0 ? "high" : undefined}
              loading={slide === 0 ? "eager" : "lazy"}
            />
          </Link>
        ))}
        {count > 1 ? (
          <>
            <button type="button" className="promo-arrow prev" aria-label="Previous promotion" onClick={() => step(-1)}>‹</button>
            <button type="button" className="promo-arrow next" aria-label="Next promotion" onClick={() => step(1)}>›</button>
          </>
        ) : null}
      </div>
      {count > 1 ? (
        <div className="promo-dots" role="tablist" aria-label="Promotion slides">
          {items.map((item, slide) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-label={item.title}
              aria-selected={slide === index}
              onClick={() => setIndex(slide)}
            />
          ))}
        </div>
      ) : null}
      <Link className="cat-all promo-view" href={items[index]?.href ?? "/promotions"}>View promotion <span aria-hidden="true">→</span></Link>
    </div>
  );
}
