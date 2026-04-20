import { isValidElement } from "react";
import type { ComponentProps, ComponentType, ElementType, ReactNode } from "react";
import { AlertCircle, Info, Lightbulb } from "lucide-react";
import ShikiHighlighter from "react-shiki/web";

import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import Callout from "@/pages/framework/mobx/components/Callout";

import * as styles from "./mdx.css";

export type MdxComponentMap = Record<string, ElementType>;

type CalloutTone = ComponentProps<typeof Callout>["type"];

type MdxModule = ComponentType<Record<string, unknown>>;

type MdxRendererProps = {
  Content: MdxModule;
  components?: MdxComponentMap;
  className?: string;
  contentProps?: Record<string, unknown>;
};

type CodeElementProps = {
  className?: string;
  metastring?: string;
  children?: ReactNode;
};

const iconMap = {
  info: <Info size={18} />,
  tip: <Lightbulb size={18} />,
  warning: <AlertCircle size={18} />,
  error: <AlertCircle size={18} />,
};

export function MdxCallout({
  type = "info",
  children,
}: {
  type?: CalloutTone;
  children: ReactNode;
}) {
  return (
    <Callout type={type} icon={iconMap[type]}>
      {children}
    </Callout>
  );
}

function parseLanguage(className?: string) {
  if (!className) return null;
  const match = className.match(/language-([a-z0-9#+-]+)/i);
  return match?.[1] ?? null;
}

function parseMeta(meta?: string) {
  if (!meta) return null;
  const titleMatch = meta.match(/(?:title|filename)=['"]([^'"]+)['"]/i);
  return titleMatch?.[1] ?? null;
}

function extractCode(children: ReactNode) {
  if (typeof children === "string") {
    return children.replace(/\n$/, "");
  }

  if (Array.isArray(children) && children.every((child) => typeof child === "string" || typeof child === "number")) {
    return children.join("").replace(/\n$/, "");
  }

  return null;
}

function prettifyLanguage(language: string | null) {
  if (!language) return "code";
  if (language === "tsx") return "tsx";
  if (language === "ts") return "ts";
  if (language === "js") return "js";
  if (language === "jsx") return "jsx";
  return language;
}

function MdxCodeBlock({
  code,
  language,
  title,
}: {
  code: string;
  language: string;
  title?: string | null;
}) {
  const { isDark } = useTheme();

  return (
    <div className={styles.codeBlockShell}>
      <div className={styles.codeBlockHeader}>
        <div className={styles.codeBlockMeta}>
          <div className={styles.codeDots}>
            <span className={styles.codeDot} style={{ background: "#ff5f56" }} />
            <span className={styles.codeDot} style={{ background: "#ffbd2e" }} />
            <span className={styles.codeDot} style={{ background: "#27c93f" }} />
          </div>
          <div className={styles.codeTitle}>{title ?? "Code Example"}</div>
        </div>
        <div className={styles.codeBadge}>{prettifyLanguage(language)}</div>
      </div>
      <div className={styles.codeBlockBody}>
        <ShikiHighlighter
          key={`${isDark ? "dark" : "light"}-${language}`}
          language={language}
          showLanguage={false}
          theme={isDark ? "github-dark" : "github-light"}
        >
          {code}
        </ShikiHighlighter>
      </div>
    </div>
  );
}

function MdxPre({ children, ...props }: ComponentProps<"pre">) {
  if (isValidElement<CodeElementProps>(children)) {
    const language = parseLanguage(children.props.className);
    const code = extractCode(children.props.children);

    if (language && typeof code === "string") {
      return (
        <MdxCodeBlock
          code={code}
          language={language}
          title={parseMeta(children.props.metastring)}
        />
      );
    }
  }

  return <pre className={styles.fallbackPre} {...props}>{children}</pre>;
}

function MdxInlineCode({ className, children, ...props }: ComponentProps<"code">) {
  if (className?.includes("language-")) {
    return <code className={className} {...props}>{children}</code>;
  }

  return <code className={styles.inlineCode} {...props}>{children}</code>;
}

export const mdxComponents: MdxComponentMap = {
  pre: MdxPre,
  code: MdxInlineCode,
};

export function createMdxComponents(overrides: MdxComponentMap = {}) {
  return {
    ...mdxComponents,
    ...overrides,
  };
}

export function MdxRenderer({
  Content,
  components = mdxComponents,
  className,
  contentProps,
}: MdxRendererProps) {
  return (
    <div className={cn(styles.prose, className)}>
      <Content {...contentProps} components={components} />
    </div>
  );
}