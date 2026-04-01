import Diagram from "../Diagram";
import Section from "../Section";
import * as styles from "./intro.css";
function Intro() {
  const flows = [
    {
      icon: "⚡",
      label: "Action",
      sub: "触发变更",
    },
    {
      icon: "📦",
      label: "Observable",
      sub: "响应式状态",
    },
    {
      icon: "🧮",
      label: "Computed",
      sub: "派生值 (缓存)",
    },
    {
      icon: "💫",
      label: "Reaction",
      sub: "副作用/渲染",
    },
  ] as const;
  const cards = [
    {
      icon: "🔍",
      title: "透明追踪",
      description:
        "运行时自动收集依赖，无需手动声明订阅，无 Selector 模板代码。",
    },
    {
      icon: "⚙️",
      title: "最小化更新",
      description: "依赖图精准定位变更影响范围，只重新计算/渲染受影响部分。",
    },
    {
      icon: "🧩",
      title: "不可变状态",
      description: "直接修改状态，无需不可变更新，心智模型更接近 OOP。",
    },
    {
      icon: "📐",
      title: "可组合",
      description: "Store、Service、Domain Model 自由组合，无中心化约束。",
    },
  ];

  return (
    <Section title="概述与设计哲学" number="01" id="introduction">
      <p>
        MobX 的核心思想来自 <strong>TFRP（透明函数式响应式编程）</strong>
        ——你只需描述数据之间的关系，框架自动追踪依赖并最小化更新。
      </p>
      <Diagram>
        <div className={styles.title}>MobX 核心数据流</div>
        <div className={styles.flows}>
          {flows.map((flow, index) => (
            <>
              <div
                className={`${styles.nodeVariant[(flow.label.toLowerCase() as keyof typeof styles.nodeVariant)]}`}
              >
                <div className={styles.Flow.icon}>{flow.icon}</div>
                <div
                  className={styles.Flow.labelVariant[flow.label.toLowerCase() as keyof typeof styles.Flow.labelVariant]}
                >
                  {flow.label}
                </div>
                <div className={styles.Flow.sub}>{flow.sub}</div>
              </div>
              {index < flows.length - 1 && (
                <div className={styles.flowArrow}>→</div>
              )}
            </>
          ))}
        </div>
        <div className={styles.desc}>
          单向数据流 · 自动依赖追踪 · 最小化重渲染
        </div>
      </Diagram>

      <div className={styles.cards}>
        {cards.map((card) => (
          <div className={styles.card} key={card.title}>
            <div className={styles.Card.icon}>{card.icon}</div>
            <div className={styles.Card.title}>{card.title}</div>
            <p className={styles.Card.desc}>{card.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Intro;
