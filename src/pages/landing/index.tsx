import { useNavigate } from "@tanstack/react-router";
import * as styles from "./landing.css";

const features = [
  {
    icon: "🌱",
    title: "持续生长",
    desc: "内容不断丰富，涵盖各类技术领域与个人兴趣方向",
  },
  {
    icon: "🧩",
    title: "交互演示",
    desc: "不只是文字，配合可交互的 Demo 深入理解每个概念",
  },
  {
    icon: "📝",
    title: "知识沉淀",
    desc: "学习笔记、实操教程、面试总结，一站式个人知识库",
  },
];

const fireflies = [
  { top: "10%", left: "7%", size: 3, delay: "0s", duration: "4.2s" },
  { top: "20%", left: "90%", size: 5, delay: "0.7s", duration: "5.5s" },
  { top: "38%", left: "4%", size: 4, delay: "1.4s", duration: "4.8s" },
  { top: "55%", left: "93%", size: 6, delay: "0.3s", duration: "6s" },
  { top: "70%", left: "10%", size: 3, delay: "2.1s", duration: "3.8s" },
  { top: "82%", left: "80%", size: 5, delay: "0.9s", duration: "5.2s" },
  { top: "6%", left: "42%", size: 4, delay: "2.6s", duration: "4.6s" },
  { top: "65%", left: "48%", size: 3, delay: "1.7s", duration: "3.6s" },
];

function Landing() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      {/* Background atmosphere */}
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.bgGlow3} />
      <div className={styles.bgPattern} />

      {/* Fireflies */}
      {fireflies.map((f, i) => (
        <div
          key={i}
          className={styles.firefly}
          style={{
            top: f.top,
            left: f.left,
            width: `${f.size}px`,
            height: `${f.size}px`,
            animationDelay: f.delay,
            animationDuration: f.duration,
          }}
        />
      ))}

      <div className={styles.content}>
        <span className={styles.badge}>
          <span>▸</span> H先生的秘密花园
        </span>

        <h1 className={styles.title}>
          种下一粒种子
          <br />
          <span className={styles.gradientText}>收获一片花园</span>
        </h1>

        <p className={styles.subtitle}>
          这里记录了我感兴趣的一切
          <br />
          技术、投资、思考……内容随好奇心自由生长
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
          <span className={styles.enterBtnArrow}>→</span>
        </button>
      </div>

      <span className={styles.footer}>
        H先生的秘密花园 · Built with React &amp; Vanilla Extract
      </span>
    </div>
  );
}

export default Landing;
