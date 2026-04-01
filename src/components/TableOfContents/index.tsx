import { useTableOfContents } from "@/hooks/useTableOfContents";
import * as styles from "./toc.css";

interface TableOfContentsProps {
  /** 内容区域的 CSS 选择器 */
  containerSelector: string;
  /** 要收集的标题选择器，默认 "h2, h3" */
  headingSelector?: string;
}

export function TableOfContents({
  containerSelector,
  headingSelector,
}: TableOfContentsProps) {
  const { items, activeId } = useTableOfContents(
    containerSelector,
    headingSelector
  );

  if (items.length === 0) return null;

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className={styles.tocAside}>
      <div className={styles.tocTitle}>目录</div>
      <ul className={styles.tocList}>
        {items.map((item) => {
          const indentKey = String(item.level) as "2" | "3" | "4";
          return (
            <li key={item.id}>
              <a
                className={`${styles.tocLink} ${
                  styles.tocIndent[indentKey] ?? ""
                } ${activeId === item.id ? styles.tocLinkActive : ""}`}
                onClick={() => handleClick(item.id)}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default TableOfContents;
