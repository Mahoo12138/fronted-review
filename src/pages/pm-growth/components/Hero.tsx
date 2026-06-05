import * as styles from "../styles/hero.css";

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroEyebrow}>前端工程师 转型手册 · 2026版</div>
      <h1>
        B端产品经理
        <br />
        <span className={styles.heroAccent}>养成计划</span>
      </h1>
      <p className={styles.heroSub}>
        你已经掌握了最难的部分 —— 理解系统如何运转。现在，学会定义它应该是什么。
      </p>
      <div className={styles.heroMeta}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>总周期</span>
          <span className={styles.metaValue}>12 个月</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>阶段数</span>
          <span className={styles.metaValue}>4 阶段</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>起点</span>
          <span className={styles.metaValue}>前端工程师</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>目标</span>
          <span className={styles.metaValue}>B端 PM</span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
