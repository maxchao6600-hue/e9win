import type { ReactNode } from "react";

export function VisualSplit({
  src,
  alt,
  reverse = false,
  id,
  plain = false,
  children,
}: {
  src: string;
  alt: string;
  reverse?: boolean;
  id?: string;
  plain?: boolean;
  children: ReactNode;
}) {
  const className = `${plain ? "hub-split" : "section hub-split"}${reverse ? " reverse" : ""}`;
  const image = <img src={src} alt={alt} width={1600} height={760} loading="lazy" />;
  const copy = <div className="prose">{children}</div>;
  if (plain) {
    return (
      <div className={className} id={id}>
        {image}
        {copy}
      </div>
    );
  }
  return (
    <section className={className} id={id}>
      {image}
      {copy}
    </section>
  );
}
