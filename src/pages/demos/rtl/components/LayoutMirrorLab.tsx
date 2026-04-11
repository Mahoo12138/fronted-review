import { useState } from "react";
import { BellRing, ScanText } from "lucide-react";

import * as styles from "./layout-mirror-lab.css";

type Direction = "ltr" | "rtl";

export function LayoutMirrorLab() {
  const [direction, setDirection] = useState<Direction>("rtl");

  return (
    <section className={styles.lab}>
      <div className={styles.toolbar}>
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
        <p className={styles.helperText}>
          同一组信息卡分别套“物理属性版”和“逻辑属性版”样式。切到 RTL
          后，看角标、强调边、图标间距和按钮对齐是否一起镜像。
        </p>
      </div>

      <div className={styles.sandbox} dir={direction}>
        <div className={styles.grid}>
          <article className={styles.physicalCard}>
            <span className={styles.edgeRailPhysical} />
            <span className={styles.badgePhysical}>LIVE</span>
            <div className={styles.headerRow}>
              <div className={styles.iconWrapPhysical}>
                <BellRing size={18} />
              </div>
              <div className={styles.copyBlock}>
                <span className={styles.kicker}>Physical CSS</span>
                <h3 className={styles.cardTitle}>left / right / margin-right</h3>
                <p className={styles.description}>
                  角标固定在物理右上角，强调边固定在左边，文本也保持 left
                  对齐。
                </p>
              </div>
            </div>
            <div className={styles.footerRow}>
              <span className={styles.metric}>3 pending approvals</span>
              <span className={styles.actionPhysical}>Open queue</span>
            </div>
          </article>

          <article className={styles.logicalCard}>
            <span className={styles.edgeRailLogical} />
            <span className={styles.badgeLogical}>LIVE</span>
            <div className={styles.headerRow}>
              <div className={styles.iconWrapLogical}>
                <ScanText size={18} />
              </div>
              <div className={styles.copyBlock}>
                <span className={styles.kicker}>Logical CSS</span>
                <h3 className={styles.cardTitle}>inline-start / inline-end</h3>
                <p className={styles.description}>
                  位置、间距和对齐全部跟随方向语义，RTL 和 LTR
                  共享同一套样式定义。
                </p>
              </div>
            </div>
            <div className={styles.footerRow}>
              <span className={styles.metric}>3 pending approvals</span>
              <span className={styles.actionLogical}>Open queue</span>
            </div>
          </article>
        </div>
      </div>

      <div className={styles.legendGrid}>
        <div className={styles.legendCard}>
          <strong className={styles.legendTitle}>物理属性的典型症状</strong>
          <p className={styles.legendText}>
            看起来不是“完全坏掉”，而是局部不一致，所以最容易在上线前漏掉。
          </p>
        </div>
        <div className={styles.legendCard}>
          <strong className={styles.legendTitle}>逻辑属性的收益</strong>
          <p className={styles.legendText}>
            你不需要在 RTL 分支里重写整块样式，只需要让布局跟着 start/end
            解释。
          </p>
        </div>
      </div>
    </section>
  );
}