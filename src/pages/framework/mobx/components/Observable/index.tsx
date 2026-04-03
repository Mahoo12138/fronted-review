import ShikiHighlighter from "react-shiki/web";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab";
import { useTheme } from "@/hooks/useTheme";
import { themeVars } from "@/styles/theme.css";

import Section from "../Section";
import Code from "../Code";

import makeObservableCode from "../../codes/makeObservable.txt?raw";
import makeAutoObservableCode from "../../codes/makeAutoObservable.txt?raw";
import observableCode from "../../codes/observable.txt?raw";
import observableImplCode from "../../codes/observable-impl.txt?raw";
import Callout from "../Callout";
function Observable() {
  const { isDark } = useTheme();
  const codeTheme = isDark ? "github-dark" : "github-light";
  return (
    <Section id="observable" title="Observable: 响应式状态" number="02">
      <p>
        <code
          style={{ color: themeVars.color.violet, fontFamily: "var(--mono)" }}
        >
          observable{" "}
        </code>
        将普通值/对象/数组包装为可被追踪的响应式结构。当这些值被 Reaction 或
        Computed 读取时，MobX 自动建立订阅关系。
      </p>

      <h3>基础用法</h3>

      <Tabs defaultValue="makeObservable">
        <TabsList>
          <TabsTrigger value="makeObservable">makeObservable</TabsTrigger>
          <TabsTrigger value="makeAutoObservable">
            makeAutoObservable
          </TabsTrigger>
          <TabsTrigger value="observable">observable()</TabsTrigger>
        </TabsList>
        <TabsContent value="makeObservable">
          <ShikiHighlighter language="typescript" theme={codeTheme}>
            {makeObservableCode}
          </ShikiHighlighter>
        </TabsContent>
        <TabsContent value="makeAutoObservable">
          <ShikiHighlighter language="typescript" theme={codeTheme}>
            {makeAutoObservableCode}
          </ShikiHighlighter>
        </TabsContent>
        <TabsContent value="observable">
          <ShikiHighlighter language="typescript" theme={codeTheme}>
            {observableCode}
          </ShikiHighlighter>
        </TabsContent>
      </Tabs>

      <h3>内部实现：Proxy + ObservableAdministration</h3>

      <Code lang="typescript" filename="observable-impl.js">
        {observableImplCode}
      </Code>

      <Callout type="info" icon="💡">
        <div>
          MobX 在现代版本（v6+）中使用
          <strong>ES6 Proxy</strong> 拦截属性访问，旧版（v4/v5）通过
          <strong>Object.defineProperty</strong> getter/setter 实现，Proxy
          的优势在于可追踪新增属性和数组索引访问。
        </div>
      </Callout>
    </Section>
  );
}

export default Observable;
