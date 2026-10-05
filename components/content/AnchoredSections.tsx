import type { CopySection } from "@/lib/categoryCopy";
import type { Scene } from "@/lib/scenes";
import { VisualSplit } from "@/components/content/VisualSplit";

export function AnchoredSections({ sections, scenes }: { sections: CopySection[]; scenes: Scene[] }) {
  let visual = 0;
  return (
    <>
      {sections.map((section) => {
        const body = (
          <>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.list ? (
              <ul>
                {section.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
            ) : null}
            {section.steps ? (
              <ol className="steps">
                {section.steps.map((item) => <li key={item}>{item}</li>)}
              </ol>
            ) : null}
            {section.note ? <p className="callout">{section.note}</p> : null}
          </>
        );
        if (section.steps || scenes.length === 0) {
          return (
            <section className="section prose" key={section.title}>
              {body}
            </section>
          );
        }
        const scene = scenes[visual % scenes.length];
        const reverse = visual % 2 === 1;
        visual += 1;
        return (
          <VisualSplit key={section.title} src={scene.src} alt={scene.alt} reverse={reverse}>
            {body}
          </VisualSplit>
        );
      })}
    </>
  );
}
