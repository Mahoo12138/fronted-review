import * as styles from "./hero.css";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroGlow}></div>
      <div className={styles.heroBadge}>⚡ 响应式状态管理</div>
      <h1 className={styles.heroTitle}>
        MobX 原理
        <br />
        <span className={styles.gradientText}>深度解析</span>
      </h1>
      <p className={styles.heroDesc}>
        从零理解 MobX 的响应式追踪机制、派生计算、副作用模型， 以及 mobx-react
        如何将响应式系统与 React 渲染树深度融合。
      </p>
    </div>
  );
}

export default Hero;
