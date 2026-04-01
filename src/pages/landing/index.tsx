import { useNavigate } from "@tanstack/react-router";
import * as styles from "./landing.css";

const features = [
  {
    icon: "💬",
    title: "面试题解析",
    desc: "高频前端面试题，配合原理解析与手写实现",
  },
  {
    icon: "⚙️",
    title: "框架原理",
    desc: "深入 React、Vue、MobX 等框架的响应式与渲染机制",
  },
  {
    icon: "🧩",
    title: "算法与 JS",
    desc: "数据结构、算法思路，以及 Event Loop 等 JS 运行时原理",
  },
];

function Landing() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.bgGrid} />

      <div className={styles.content}>
        <span className={styles.badge}>
          <span>▸</span> Frontend Review
        </span>

        <h1 className={styles.title}>
          系统梳理
          <br />
          <span className={styles.gradientText}>前端核心知识</span>
        </h1>

        <p className={styles.subtitle}>
          面试题解析 · 框架原理 · 算法与 JavaScript
          <br />
          从浏览器运行时到框架底层，构建完整的前端知识体系
        </p>

        <div className={styles.features}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <span className={styles.featureTitle}>{f.title}</span>
              <span className={styles.featureDesc}>{f.desc}</span>
            </div>
          ))}
        </div>

        <button
          className={styles.enterBtn}
          onClick={() => navigate({ to: "/home" })}
        >
          开始探索
          <span>→</span>
        </button>
      </div>

      <span className={styles.footer}>Frontend Demos · Built with React &amp; Vanilla Extract</span>
    </div>
  );
}

export default Landing;
