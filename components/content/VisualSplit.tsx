import type { ReactNode } from "react";

export function VisualSplit({
  src,
  alt,
  reverse = false,
  id,
  children,
}: {
  src: string;
  alt: string;
  reverse?: boolean;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section className={reverse ? "section hub-split reverse" : "section hub-split"} id={id}>
      <img src={src} alt={alt} width={1600} height={760} loading="lazy" />
      <div className="prose">{children}</div>
    </section>
  );
}
