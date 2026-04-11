import { useState } from "react";

import { Button } from "@/components/ui/button";

import * as styles from "./bidi-isolation-lab.css";

const presets = [
  {
    label: "John / INV",
    username: "John_doe123",
    orderId: "INV-2048",
  },
  {
    label: "Repo / issue",
    username: "copilot/review-bot",
    orderId: "issue-42",
  },
  {
    label: "Time / AM",
    username: "09:30 AM",
    orderId: "ETA-11:45",
  },
];

export function BidiIsolationLab() {
  const [username, setUsername] = useState(presets[0].username);
  const [orderId, setOrderId] = useState(presets[0].orderId);

  return (
    <section className={styles.lab}>
      <div className={styles.toolbar}>
        <div className={styles.formGrid}>
          <label className={styles.field}>
            <span className={styles.label}>Mixed username / token</span>
            <input
              className={styles.input}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Order / status id</span>
            <input
              className={styles.input}
              value={orderId}
              onChange={(event) => setOrderId(event.target.value)}
            />
          </label>
        </div>
        <div className={styles.presetRow}>
          {presets.map((preset) => (
            <Button
              key={preset.label}
              size="sm"
              variant="outline"
              onClick={() => {
                setUsername(preset.username);
                setOrderId(preset.orderId);
              }}
            >
              {preset.label}
            </Button>
          ))}
        </div>
        <p className={styles.helperText}>
          两边的句子内容完全一样，唯一差别是右边把易漂移的 LTR token 包进了
          <code>&lt;bdi&gt;</code>。
        </p>
      </div>

      <div className={styles.grid}>
        <article className={styles.caseCard}>
          <div className={styles.caseHeader}>
            <span className={styles.caseBadge}>Without bdi</span>
            <h3 className={styles.caseTitle}>纯文本混排</h3>
          </div>
          <div className={styles.previewBubble} dir="rtl" lang="ar">
            <p className={styles.messageText}>
              مرحباً {username}، تم إنشاء الطلب ({orderId}) بنجاح.
            </p>
            <p className={styles.messageMeta}>
              آخر تحديث: {username} / ETA 09:30 AM / support@example.com/{orderId}
            </p>
          </div>
        </article>

        <article className={styles.caseCard}>
          <div className={styles.caseHeader}>
            <span className={styles.caseBadgeSafe}>With bdi</span>
            <h3 className={styles.caseTitle}>隔离动态 token</h3>
          </div>
          <div className={styles.previewBubble} dir="rtl" lang="ar">
            <p className={styles.messageText}>
              مرحباً <bdi className={styles.token}>{username}</bdi>، تم إنشاء الطلب (
              <bdi className={styles.token}>{orderId}</bdi>) بنجاح.
            </p>
            <p className={styles.messageMeta}>
              آخر تحديث: <bdi className={styles.token}>{username}</bdi> / ETA <bdi className={styles.token}>09:30 AM</bdi> /
              <bdi className={styles.token}>support@example.com/{orderId}</bdi>
            </p>
          </div>
        </article>
      </div>

      <div className={styles.noteCard}>
        <p className={styles.noteText}>
          这个例子故意把用户名、工单号、时间和邮箱放进一条 RTL 句子里。你要防的不是“文字完全读不出来”，而是标点和边界在某些输入组合里看起来别扭，用户一眼就觉得不自然。
        </p>
      </div>
    </section>
  );
}