import { useMemo, useState } from "react";
import { Languages, Search, SquarePen } from "lucide-react";

import * as styles from "./direction-primer.css";

type Direction = "ltr" | "rtl";
type Locale = "en" | "ar";

const localeCopy = {
  en: {
    title: "Support Inbox",
    subtitle: "Native inputs and list markers start following the current direction.",
    searchLabel: "Search ticket",
    searchPlaceholder: "Find order #2048",
    items: [
      "Unread messages stay at the top.",
      "Priority labels keep their semantic order.",
      "Status text follows the current language.",
    ],
  },
  ar: {
    title: "صندوق الدعم",
    subtitle: "حقول الإدخال والقوائم الأصلية تبدأ باتباع الاتجاه الحالي تلقائياً.",
    searchLabel: "ابحث عن الطلب",
    searchPlaceholder: "ابحث عن الطلب رقم 2048",
    items: [
      "تظهر الرسائل غير المقروءة أولاً.",
      "تحتفظ العلامات بترتيبها الدلالي.",
      "تتبع الواجهة لغة المحتوى الحالية.",
    ],
  },
} as const;

export function DirectionPrimer() {
  const [direction, setDirection] = useState<Direction>("rtl");
  const [locale, setLocale] = useState<Locale>("ar");

  const copy = useMemo(() => localeCopy[locale], [locale]);

  return (
    <section className={styles.lab}>
      <div className={styles.toolbar}>
        <div className={styles.controlGroup}>
          <span className={styles.controlLabel}>Direction</span>
          <div className={styles.buttonRow}>
            <button
              type="button"
              className={styles.toggleButton}
              aria-pressed={direction === "ltr"}
              onClick={() => setDirection("ltr")}
            >
              LTR
            </button>
            <button
              type="button"
              className={styles.toggleButton}
              aria-pressed={direction === "rtl"}
              onClick={() => setDirection("rtl")}
            >
              RTL
            </button>
          </div>
        </div>
        <div className={styles.controlGroup}>
          <span className={styles.controlLabel}>Language</span>
          <div className={styles.buttonRow}>
            <button
              type="button"
              className={styles.toggleButton}
              aria-pressed={locale === "en"}
              onClick={() => setLocale("en")}
            >
              English
            </button>
            <button
              type="button"
              className={styles.toggleButton}
              aria-pressed={locale === "ar"}
              onClick={() => setLocale("ar")}
            >
              العربية
            </button>
          </div>
        </div>
        <p className={styles.helperText}>
          先看浏览器原生层：标题方向、输入框光标起始侧和列表 marker 会先跟着
          <code>dir</code> 走，但你自己的布局代码不会。
        </p>
      </div>

      <div className={styles.previewShell}>
        <div className={styles.previewCard} dir={direction} lang={locale}>
          <div className={styles.metaRow}>
            <span className={styles.metaBadge}>{direction.toUpperCase()}</span>
            <span className={styles.metaBadge}>{locale}</span>
          </div>

          <div className={styles.headerRow}>
            <div className={styles.iconWrap}>
              <Languages size={20} />
            </div>
            <div className={styles.titleWrap}>
              <h3 className={styles.title}>{copy.title}</h3>
              <p className={styles.subtitle}>{copy.subtitle}</p>
            </div>
          </div>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>{copy.searchLabel}</span>
            <div className={styles.inputWrap}>
              <Search size={16} />
              <input
                className={styles.input}
                placeholder={copy.searchPlaceholder}
                defaultValue={locale === "ar" ? "طلب #2048" : "Ticket #2048"}
              />
            </div>
          </label>

          <div className={styles.listBlock}>
            <div className={styles.listTitle}>
              <SquarePen size={16} />
              <span>Native list behavior</span>
            </div>
            <ol className={styles.checklist}>
              {copy.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <p className={styles.snippet}>{`<section dir="${direction}" lang="${locale}">`}</p>
        </div>
      </div>
    </section>
  );
}