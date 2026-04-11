import TableOfContents from "@/components/TableOfContents";

import TutorialContent from "./content.mdx";
import * as styles from "./index.css";

const CONTENT_SELECTOR = "[data-toc-content]";

function RtlAdaptationPage() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.content} data-toc-content>
        <article className={styles.article}>
          <section className={styles.hero}>
            <div className={styles.heroBadge}>RTL Adaptation Lab</div>
            <h1 className={styles.heroTitle}>RTL 适配，不只是把文字方向倒过来</h1>
            <p className={styles.heroLead}>
              这页把 RTL 适配拆成几件最容易踩坑的事：根节点的 dir/lang、CSS
              逻辑属性、方向性图标与动画、以及双向文本混排。每一段都配一个可操作的小实验，方便你直接看到错误实现和正确实现的差别。
            </p>
          </section>
          <TutorialContent />
        </article>
      </main>
      <TableOfContents containerSelector={CONTENT_SELECTOR} />
    </div>
  );
}

export default RtlAdaptationPage;