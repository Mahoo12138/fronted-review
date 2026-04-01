import ShikiHighlighter from "react-shiki/web";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab";
import Section from "../Section";
import { themeVars } from "@/index.css";

import makeObservableCode from './code/makeObservable.txt?raw';
import makeAutoObservableCode from './code/makeAutoObservable.txt?raw';
import observableCode from './code/observable.txt?raw';

function Observable() {
    return (
        <Section id="observable" title="Observable: 响应式状态" number="02">
            <p>
                <code style={{ color: themeVars.color.violet, fontFamily: "var(--mono)" }}>observable </code>
                将普通值/对象/数组包装为可被追踪的响应式结构。当这些值被 Reaction 或
                Computed 读取时，MobX 自动建立订阅关系。
            </p>

            <h3>基础用法</h3>

            <Tabs defaultValue="makeObservable">
                <TabsList>
                    <TabsTrigger value="makeObservable">makeObservable</TabsTrigger>
                    <TabsTrigger value="makeAutoObservable">makeAutoObservable</TabsTrigger>
                    <TabsTrigger value="observable">observable()</TabsTrigger>
                </TabsList>
                <TabsContent value="makeObservable">
                    <ShikiHighlighter language="typescript" theme="github-light">
                        {makeObservableCode}
                    </ShikiHighlighter>
                </TabsContent>
                <TabsContent value="makeAutoObservable">
                    <ShikiHighlighter language="typescript" theme="github-light">
                        {makeAutoObservableCode}
                    </ShikiHighlighter>
                </TabsContent>
                <TabsContent value="observable">
                    <ShikiHighlighter language="typescript" theme="github-light">
                        {observableCode}
                    </ShikiHighlighter>
                </TabsContent>

            </Tabs>


            <h3>内部实现：Proxy + ObservableAdministration</h3>


            <div className="callout info">
                <div className="callout-icon">💡</div>
                <div>
                    MobX 在现代版本（v6+）中使用
                    <strong>ES6 Proxy</strong> 拦截属性访问，旧版（v4/v5）通过
                    <strong>Object.defineProperty</strong> getter/setter 实现，Proxy
                    的优势在于可追踪新增属性和数组索引访问。
                </div>
            </div>
        </Section>
    )
}

export default Observable;