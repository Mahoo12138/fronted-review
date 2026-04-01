import { Link } from "@tanstack/react-router";
import * as styles from "./home.css";

type Topic = {
  label: string;
  to?: string;
};

type Category = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  accent: "violet" | "blue" | "green";
  topics: Topic[];
};

const categories: Category[] = [
  {
    id: "frameworks",
    icon: "⚙️",
    title: "框架原理",
    desc: "深入 React、Vue、MobX 等框架的响应式机制、调度模型与渲染原理",
    accent: "violet",
    topics: [
      { label: "MobX 响应式原理", to: "/frameworks/mobx" },
      { label: "React 渲染机制" },
      { label: "Vue 响应式系统" },
    ],
  },
  {
    id: "javascript",
    icon: "🔄",
    title: "JavaScript",
    desc: "Event Loop、异步模型、原型链、作用域等 JS 运行时核心原理深度解析",
    accent: "blue",
    topics: [
      { label: "Event Loop 事件循环", to: "/javascript/event-loop" },
      { label: "原型链与继承" },
      { label: "异步编程模型" },
    ],
  },
  {
    id: "demos",
    icon: "🧩",
    title: "功能实现",
    desc: "高频面试手写题与实战 Demo，断点续传、虚拟滚动等实现原理与代码拆解",
    accent: "green",
    topics: [
      { label: "虚拟滚动", to: "/demos/virtual-scroll" },
      { label: "断点续传", to: "/demos/resumable-upload" },
      { label: "PDF 预览" },
    ],
  },
];

const totalTopics = categories.reduce((acc, c) => acc + c.topics.length, 0);
const availableTopics = categories.reduce(
  (acc, c) => acc + c.topics.filter((t) => t.to).length,
  0
);

function Home() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerMeta}>
          <span className={styles.dot} />
          <span className={styles.label}>Frontend Review</span>
        </div>
        <h1 className={styles.title}>前端知识库</h1>
        <p className={styles.subtitle}>
          系统整理前端核心知识点，包含框架原理、JavaScript 运行时机制与高频面试实现题，配合交互式演示深入理解每个概念。
        </p>
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{categories.length}</span>
            <span className={styles.statKey}>个分类</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>{totalTopics}</span>
            <span className={styles.statKey}>个主题</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>{availableTopics}</span>
            <span className={styles.statKey}>已上线</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <p className={styles.sectionTitle}>知识分类</p>
      <div className={styles.grid}>
        {categories.map((cat) => {
          const available = cat.topics.filter((t) => t.to).length;
          const total = cat.topics.length;
          return (
            <div key={cat.id} className={styles.card}>
              <div className={styles.cardAccent[cat.accent]} />
              <div className={styles.cardBody}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <h2 className={styles.cardTitle}>{cat.title}</h2>
                <p className={styles.cardDesc}>{cat.desc}</p>
                <div className={styles.topicList}>
                  {cat.topics.map((topic) =>
                    topic.to ? (
                      <Link
                        key={topic.label}
                        to={topic.to}
                        className={styles.topicLink}
                      >
                        <span className={styles.statusDot.available} />
                        <span className={styles.topicName}>{topic.label}</span>
                      </Link>
                    ) : (
                      <div key={topic.label} className={styles.topicLinkDisabled}>
                        <span className={styles.statusDot.soon} />
                        <span className={styles.topicName}>{topic.label}</span>
                        <span className={styles.soonBadge}>即将上线</span>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.footerProgress}>
                  <span className={styles.footerProgressHighlight}>{available}</span>
                  &nbsp;/ {total} 个主题已上线
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
