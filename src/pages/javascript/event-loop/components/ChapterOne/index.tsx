import Section from "../Section";

function ChapterOne(): JSX.Element {

  const loadDemo = (e: React.ChangeEvent<HTMLSelectElement>) => {

  }

  const stepExec = () => {

  }

  const resetDemo = () => { }
  const autoRun = () => { }
  return (
    <Section id="browser" label="// Chapter 01" title="事件循环基础概念">
      <p>
        JavaScript 是<strong>单线程</strong>语言，但它能通过事件循环（Event
        Loop）实现非阻塞的异步操作。理解事件循环，是掌握 JS 异步行为的关键。
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          margin: '1.5rem 0',
        }}
      >
        <div className="card accent">
          <div className="pill stack">Call Stack</div>
          <h3 style={{ marginTop: '0.75rem' }}>调用栈</h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
            LIFO 结构，同步代码在此执行。函数调用入栈，返回出栈。
          </p>
        </div>
        <div className="card warn">
          <div className="pill macro">Macro Task</div>
          <h3 style={{ marginTop: '0.75rem' }}>宏任务队列</h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
            setTimeout、setInterval、I/O、UI 事件等。每次事件循环取一个执行。
          </p>
        </div>
        <div
          className="card"
          style={{
            borderColor: 'var(--accent2)',
            background: 'rgba(124, 58, 237, 0.04)',
          }}
        >
          <div className="pill micro">Micro Task</div>
          <h3 style={{ marginTop: '0.75rem' }}>微任务队列</h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
            Promise.then、queueMicrotask、MutationObserver。调用栈空时<strong>全部</strong>执行。
          </p>
        </div>
      </div>

      <div className="loop-diagram-wrap">
        <svg
          viewBox="0 0 440 300"
          xmlns="http://www.w3.org/2000/svg"
          id="loopSvg"
        >
          <defs>
            <marker
              id="arr1"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
            </marker>
            <marker
              id="arr2"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill="#7c3aed" />
            </marker>
            <marker
              id="arr3"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill="#f59e0b" />
            </marker>
            <filter id="glow1">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow2">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow3">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <text
            x="220"
            y="145"
            text-anchor="middle"
            font-family="JetBrains Mono,monospace"
            font-size="9"
            fill="#4a5568"
            letter-spacing="2"
          >
            EVENT
          </text>
          <text
            x="220"
            y="162"
            text-anchor="middle"
            font-family="JetBrains Mono,monospace"
            font-size="9"
            fill="#4a5568"
            letter-spacing="2"
          >
            LOOP
          </text>
          <circle
            cx="220"
            cy="152"
            r="34"
            fill="none"
            stroke="#1f2533"
            stroke-width="1"
            stroke-dasharray="4 3"
          />

          <path
            d="M 268,80 Q 370,120 330,200"
            fill="none"
            stroke="#2563eb"
            stroke-width="1.8"
            stroke-dasharray="none"
            marker-end="url(#arr1)"
            opacity="0.85"
          />

          <path
            d="M 295,240 Q 220,275 148,240"
            fill="none"
            stroke="#7c3aed"
            stroke-width="1.8"
            marker-end="url(#arr2)"
            opacity="0.85"
          />

          <path
            d="M 110,200 Q 70,120 172,80"
            fill="none"
            stroke="#f59e0b"
            stroke-width="1.8"
            marker-end="url(#arr3)"
            opacity="0.85"
          />

          <rect
            x="148"
            y="18"
            width="144"
            height="52"
            rx="10"
            fill="#1e3a5f"
            stroke="#2563eb"
            stroke-width="1.5"
            filter="url(#glow1)"
          />
          <text
            x="220"
            y="40"
            text-anchor="middle"
            font-family="JetBrains Mono,monospace"
            font-size="10"
            font-weight="700"
            fill="#60a5fa"
          >
            执行同步代码
          </text>
          <text
            x="220"
            y="58"
            text-anchor="middle"
            font-family="JetBrains Mono,monospace"
            font-size="8.5"
            fill="#3b82f6"
          >
            Call Stack
          </text>

          <rect
            x="298"
            y="200"
            width="136"
            height="52"
            rx="10"
            fill="#1a0f3d"
            stroke="#7c3aed"
            stroke-width="1.5"
            filter="url(#glow2)"
          />
          <text
            x="366"
            y="222"
            text-anchor="middle"
            font-family="JetBrains Mono,monospace"
            font-size="10"
            font-weight="700"
            fill="#a78bfa"
          >
            清空微任务
          </text>
          <text
            x="366"
            y="240"
            text-anchor="middle"
            font-family="JetBrains Mono,monospace"
            font-size="8.5"
            fill="#7c3aed"
          >
            Microtask Queue
          </text>

          <rect
            x="6"
            y="200"
            width="136"
            height="52"
            rx="10"
            fill="#3d1f00"
            stroke="#f59e0b"
            stroke-width="1.5"
            filter="url(#glow3)"
          />
          <text
            x="74"
            y="222"
            text-anchor="middle"
            font-family="JetBrains Mono,monospace"
            font-size="10"
            font-weight="700"
            fill="#fcd34d"
          >
            取一个宏任务
          </text>
          <text
            x="74"
            y="240"
            text-anchor="middle"
            font-family="JetBrains Mono,monospace"
            font-size="8.5"
            fill="#f59e0b"
          >
            Macrotask Queue
          </text>

          <text
            x="332"
            y="140"
            text-anchor="middle"
            font-family="JetBrains Mono,monospace"
            font-size="8"
            fill="#2563eb"
            opacity="0.9"
          >
            ① 栈空
          </text>
          <text
            x="220"
            y="272"
            text-anchor="middle"
            font-family="JetBrains Mono,monospace"
            font-size="8"
            fill="#7c3aed"
            opacity="0.9"
          >
            ② 微任务全清空
          </text>
          <text
            x="100"
            y="140"
            text-anchor="middle"
            font-family="JetBrains Mono,monospace"
            font-size="8"
            fill="#f59e0b"
            opacity="0.9"
          >
            ③ 下一轮
          </text>
        </svg>
      </div>

      <div className="highlight-box info">
        <span className="icon">💡</span>
        <div>
          <strong>核心规则：</strong>每次取出一个宏任务执行完毕后，必须把微任务队列<strong>全部清空</strong>，才能进入下一个宏任务。微任务产生的新微任务也会被立即处理。
        </div>
      </div>
      <h3>📺 交互可视化 — 逐步观察任务调度</h3>
      <p style={{ fontSize: '0.83rem', color: 'var(--muted)' }}>
        选择一个代码示例，点击
        <strong>逐步执行</strong> 观察调用栈、微任务队列、宏任务队列的变化。
      </p>

      <div className="visualizer">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem',
            flexWrap: 'wrap',
          }}

        >
          <select className="select-code" id="demoSelect" onChange={loadDemo}>
            <option value="0">示例 1：基础 Promise + setTimeout</option>
            <option value="1">示例 2：Promise 链式调用</option>
            <option value="2">示例 3：微任务嵌套</option>
          </select>
        </div>

        <pre
          id="demoCode"
          style={{ fontSize: '0.75rem', maxHeight: '160px', overflowY: 'auto' }}
        ></pre>

        <div className="viz-grid" style={{ marginTop: '1rem' }}>
          <div className="viz-box stack-box">
            <h4>📦 Call Stack</h4>
            <div className="viz-items" id="stackItems"></div>
          </div>
          <div className="viz-box micro-box">
            <h4>⚡ Microtask Queue</h4>
            <div
              className="viz-items"
              id="microItems"
              style={{ flexDirection: 'column' }}
            ></div>
          </div>
          <div className="viz-box macro-box">
            <h4>⏱ Macrotask Queue</h4>
            <div
              className="viz-items"
              id="macroItems"
              style={{ flexDirection: 'column' }}
            ></div>
          </div>
        </div>

        <div className="viz-log" id="vizLog">
          <div style={{ color: 'var(--muted)' }}>// 点击运行查看输出...</div>
        </div>

        <div className="viz-controls">
          <button className="btn btn-primary" id="btnStep" onClick={stepExec}>
            ▶ 逐步执行
          </button>
          <button className="btn btn-secondary" onClick={autoRun}>
            ⚡ 自动运行
          </button>
          <button className="btn btn-secondary" onClick={resetDemo}>
            ↺ 重置
          </button>
          <span
            id="stepHint"
            style={{ 
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.7rem',
              color: 'var(--muted)',
              alignSelf: 'center',
            }}
          ></span>
        </div>
      </div>

    </Section>
  )
}

export default ChapterOne;