import Callout from "../Callout";
import Code from "../Code";
import Section from "../Section";
import actionDemoCode from "../../codes/action-demo.txt?raw";
import transactionImplCode from '../../codes/transaction-impl.txt?raw';
function Action() {
  return (
    <Section id="action" title="Action — 事务性变更" number="04">
      <p>
        Action 将多个 observable 变更包裹在一个{" "}
        <strong>事务（transaction）</strong> 中，确保中间状态不触发
        Reaction，批量通知依赖。
      </p>

      <h3>Action API</h3>
      <Code lang="javascript" filename="action-demo.js">
        {actionDemoCode}
      </Code>

      <h3>Transaction 实现原理</h3>
      <Code lang="javascript" filename="transaction-impl.js">
        {transactionImplCode}
      </Code>

      <Callout type="warning" icon="💡">
        <div>
          MobX 6 起默认开启 <strong>strict mode</strong>（通过{" "}
          <code>{`configure({enforceActions: 'always'})`}</code>），在 action
          外修改 observable 会抛出异常，强制规范变更路径。
        </div>
      </Callout>
    </Section>
  );
}

export default Action;
