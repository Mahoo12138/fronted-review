import Callout from "../Callout";
import Code from "../Code";
import Diagram from "../Diagram";
import { Section } from "../Section";
import computedImplCode from "../../codes/computed-impl.txt?raw";
import * as styles from './computed.css';
function Computed() {
  return (
    <Section id="computed" title="Computed — 派生值与缓存" number="03">
      <p>
        Computed 是 MobX 的精华之一：它是一个{" "}
        <strong>惰性求值 + 结果缓存</strong>{" "}
        的派生值，只有当依赖变化且有订阅者时才重新计算。
      </p>

      <Diagram title="Computed 生命周期">
        <div className={styles.lifecycle}>
          <div className={styles.lcStep}>
            <div className={styles.lcStepNumber}>1</div>
            <div className={styles.lcContent}>
              <div className={styles.lcTitle}>创建 — POSSIBLY_STALE</div>
              <p className={styles.lcDescription}>
                computed 首次创建时标记为 "可能过期"，还未执行计算函数。
              </p>
              <div className={styles.lcCode}>
                state: POSSIBLY_STALE | NOT_TRACKING
              </div>
            </div>
          </div>
          <div className={styles.lcStep}>
            <div className={styles.lcStepNumber}>2</div>
            <div className={styles.lcContent}>
              <div className={styles.lcTitle}>首次读取 — 求值并追踪依赖</div>
              <p className={styles.lcDescription}>
                调用 .get() 触发
                trackDerivedFunction，收集依赖，缓存结果。状态置为 UP_TO_DATE。
              </p>
              <div className={styles.lcCode}>
                computed.get() → trackDerivedFunction(fn) → cache result
              </div>
            </div>
          </div>
          <div className={styles.lcStep}>
            <div className={styles.lcStepNumber}>3</div>
            <div className={styles.lcContent}>
              <div className={styles.lcTitle}>依赖变更 — 置为 STALE</div>
              <p className={styles.lcDescription}>
                上游 observable 改变，向下广播 STALE 信号给所有依赖该 computed
                的 Reaction。
              </p>
              <div className={styles.lcCode}>
                observable.set() → propagate STALE to observers
              </div>
            </div>
          </div>
          <div className={styles.lcStep}>
            <div className={styles.lcStepNumber}>4</div>
            <div className={styles.lcContent}>
              <div className={styles.lcTitle}>再次读取 — 检查是否真正过期</div>
              <p className={styles.lcDescription}>
                MobX
                先检查直接依赖是否真的变了（节省计算），若无变化则复用缓存（钻石依赖优化）。
              </p>
              <div className={styles.lcCode}>
                if (dependenciesUnchanged) return cachedValue;
              </div>
            </div>
          </div>
          <div className={styles.lcStep}>
            <div className={styles.lcStepNumber}>5</div>
            <div className={styles.lcContent}>
              <div className={styles.lcTitle}>无订阅者 — 挂起追踪</div>
              <p className={styles.lcDescription}>
                computed 没有 Reaction
                消费时，自动停止对上游的订阅，避免内存泄漏。
              </p>
              <div className={styles.lcCode}>
                if (observers.empty) state = NOT_TRACKING;
              </div>
            </div>
          </div>
        </div>
      </Diagram>

      <h3>Computed 实现骨架</h3>
      <Code lang="javascript" filename="computed-impl.js">
        {computedImplCode}
      </Code>
      <Callout type="info" icon="💡">
        <strong>钻石依赖优化</strong>：当多个 computed 依赖同一 observable
        时（形成钻石形依赖图），MobX 通过两阶段传播（标记 STALE →
        延迟求值）确保每个 computed 只计算一次，不会出现重复计算或中间状态闪烁。
      </Callout>
    </Section>
  );
}

export default Computed;
