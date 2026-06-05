import { Section } from "../ui/Section";
import * as styles from "../styles/thinking.css";
const Thinking = () => (
  <Section id="" title="思维模式转型：从执行者到决策者" number="01">
    <div className={styles.cardsGrid}>
      <div className={styles.card} data-highlight>
        <span className={styles.cardIcon}>🔧</span>
        <div className={styles.cardTitle}>工程师思维（当前）</div>
        <div className={styles.cardBody}>
          「这个功能怎么实现？」
          <br />
          关注可行性、性能、代码质量、技术债务。
        </div>
      </div>
      <div className={styles.card}>
        <span className={styles.cardIcon}>🎯</span>
        <div className={styles.cardTitle}>PM 思维（目标）</div>
        <div className={styles.cardBody}>
          「为什么要做这个功能？做了之后解决什么问题？」
          <br />
          关注价值、优先级、取舍和结果。
        </div>
      </div>
      <div className={styles.card}>
        <span className={styles.cardIcon}>👥</span>
        <div className={styles.cardTitle}>用户视角优先</div>
        <div className={styles.cardBody}>
          从「用户体验」到「用户目标」。不只关注界面，更关注用户在业务中的真实处境。
        </div>
      </div>
      <div className={styles.card}>
        <span className={styles.cardIcon}>📊</span>
        <div className={styles.cardTitle}>数据驱动决策</div>
        <div className={styles.cardBody}>
          从「凭经验开发」到「用数据验证假设」。每个功能背后有业务指标，每次迭代要能度量。
        </div>
      </div>
      <div className={styles.card}>
        <span className={styles.cardIcon}>⚖️</span>
        <div className={styles.cardTitle}>拥抱不确定性</div>
        <div className={styles.cardBody}>
          代码有对错，产品没有标准答案。学会在信息不完整时做出合理决策，并承担责任。
        </div>
      </div>
      <div className={styles.card}>
        <span className={styles.cardIcon}>🗣️</span>
        <div className={styles.cardTitle}>沟通即工作</div>
        <div className={styles.cardBody}>
          PM 60%
          的工作是沟通。对齐目标、推动共识、管理预期，这些和写代码同样重要。
        </div>
      </div>
    </div>
  </Section>
);


export default Thinking;