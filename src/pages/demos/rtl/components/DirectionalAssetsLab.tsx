import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Plus,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import * as styles from "./directional-assets-lab.css";

type Direction = "ltr" | "rtl";

const copy = {
  ltr: {
    back: "Back",
    next: "Next",
    breadcrumb: ["Orders", "Shipping", "Review"],
    physicalToast: "Motion still comes from the physical right edge",
    logicalToast: "Motion follows inline-end in the current direction",
  },
  rtl: {
    back: "رجوع",
    next: "التالي",
    breadcrumb: ["الطلبات", "الشحن", "المراجعة"],
    physicalToast: "الحركة ما زالت تدخل من الجهة اليمنى الفيزيائية",
    logicalToast: "الحركة تتبع نهاية السطر الحالية",
  },
} as const;

export function DirectionalAssetsLab() {
  const [direction, setDirection] = useState<Direction>("rtl");
  const [animationSeed, setAnimationSeed] = useState(0);

  const currentCopy = useMemo(() => copy[direction], [direction]);
  const BackIcon = direction === "rtl" ? ArrowRight : ArrowLeft;
  const NextIcon = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className={styles.lab}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarActions}>
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
          <Button size="sm" variant="outline" onClick={() => setAnimationSeed((seed) => seed + 1)}>
            Replay Motion
          </Button>
        </div>
        <p className={styles.helperText}>
          这个实验把“图标方向”和“动画方向”放在一起看，因为这两件事本质上都在表达
          inline-start / inline-end 的语义。
        </p>
      </div>

      <div className={styles.stage} dir={direction}>
        <div className={styles.grid}>
          <article className={styles.caseCard}>
            <div className={styles.caseHeader}>
              <h3 className={styles.caseTitle}>Naive assets</h3>
              <p className={styles.caseText}>
                箭头和运动轨迹都按物理方向写死，RTL 时只会出现“半翻转”的体验。
              </p>
            </div>

            <div className={styles.actionBar}>
              <button className={styles.navButton} type="button">
                <ArrowLeft size={16} />
                <span>{currentCopy.back}</span>
              </button>
              <button className={styles.navButtonPrimary} type="button">
                <span>{currentCopy.next}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className={styles.breadcrumb}>
              {currentCopy.breadcrumb.map((item, index) => (
                <div className={styles.crumb} key={item}>
                  <span>{item}</span>
                  {index < currentCopy.breadcrumb.length - 1 ? (
                    <ChevronRight size={14} className={styles.separator} />
                  ) : null}
                </div>
              ))}
            </div>

            <div className={styles.motionLane}>
              <div
                key={`physical-${direction}-${animationSeed}`}
                className={styles.toastPhysical}
              >
                <Sparkles size={16} />
                <span>{currentCopy.physicalToast}</span>
              </div>
            </div>
          </article>

          <article className={styles.caseCard}>
            <div className={styles.caseHeader}>
              <h3 className={styles.caseTitle}>RTL-aware assets</h3>
              <p className={styles.caseText}>
                有方向语义的图标被显式镜像，动画轨迹也跟着当前 dir 翻转。
              </p>
            </div>

            <div className={styles.actionBar}>
              <button className={styles.navButton} type="button">
                <BackIcon size={16} />
                <span>{currentCopy.back}</span>
              </button>
              <button className={styles.navButtonPrimary} type="button">
                <span>{currentCopy.next}</span>
                <NextIcon size={16} />
              </button>
            </div>

            <div className={styles.breadcrumb}>
              {currentCopy.breadcrumb.map((item, index) => (
                <div className={styles.crumb} key={item}>
                  <span>{item}</span>
                  {index < currentCopy.breadcrumb.length - 1 ? (
                    <ChevronRight size={14} className={styles.separatorMirrored} />
                  ) : null}
                </div>
              ))}
            </div>

            <div className={styles.motionLane}>
              <div key={`logical-${direction}-${animationSeed}`} className={styles.toastLogical}>
                <Sparkles size={16} />
                <span>{currentCopy.logicalToast}</span>
              </div>
            </div>
          </article>
        </div>

        <div className={styles.staticIconRow}>
          <span className={styles.staticChip}>
            <Check size={14} />
            Non-directional icons stay unchanged
          </span>
          <span className={styles.staticChip}>
            <Plus size={14} />
            Plus / check / alert usually do not mirror
          </span>
        </div>
      </div>
    </section>
  );
}