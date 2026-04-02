import ShikiHighlighter, { Language } from "react-shiki/web";
import * as styles from "./code.css";

interface CodeProps {
  children: string;
  lang: Language;
}
function Code({ children, lang }: CodeProps) {
  const getLangName = (lang: Language) => {
    if (typeof lang === "string") return lang;
    if (lang && "name" in lang) return lang.name;
    return "code";
  };

  return (
    <div className={styles.warpper}>
      <div className={styles.header}>
        <div className={styles.dots}>
          <span className={styles.dotColor.violet}></span>
          <span className={styles.dotColor.blue}></span>
          <span className={styles.dotColor.green}></span>
        </div>
        <div className={styles.filename}>observable-impl.js</div>
        <div className={styles.langBadge}>{getLangName(lang)}</div>
      </div>
      <ShikiHighlighter
        language={lang}
        showLanguage={false}
        theme="github-light"
      >
        {children}
      </ShikiHighlighter>
    </div>
  );
}

export default Code;
