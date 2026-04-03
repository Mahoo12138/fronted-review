import ShikiHighlighter, { Language } from "react-shiki/web";
import { useTheme } from "@/hooks/useTheme";
import * as styles from "./code.css";

interface CodeProps {
  children: string;
  lang: Language;
  filename: string;
}
function Code({ children, lang, filename }: CodeProps) {
  const { isDark } = useTheme();
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
        <div className={styles.filename}>{filename}</div>
        <div className={styles.langBadge}>{getLangName(lang)}</div>
      </div>
      <ShikiHighlighter
        language={lang}
        showLanguage={false}
        theme={isDark ? "github-dark" : "github-light"}
      >
        {children}
      </ShikiHighlighter>
    </div>
  );
}

export default Code;
