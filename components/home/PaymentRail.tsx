import { tx, type Locale } from "@/lib/i18n";

type PayItem = { id: string; name: string; image: string };

export function PaymentRail({ items, locale = "en" }: { items: readonly PayItem[]; locale?: Locale }) {
  return (
    <div className="pay-rail" role="region" aria-label={tx(locale, "Payment methods", "支付方式")}>
      <div className="pay-track">
        {[0, 1].map((copy) => (
          <ul className="pay-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {items.map((item) => (
              <li className="pay-badge" key={`${copy}-${item.id}`}>
                <img src={item.image} alt={copy === 0 ? item.name : ""} width={64} height={28} loading="lazy" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
