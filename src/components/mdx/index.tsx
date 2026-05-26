import { isValidElement, useEffect, useState } from "react";
import type { ComponentProps, ComponentType, ElementType, ReactNode } from "react";
import { AlertCircle, Check, Copy, Info, Lightbulb } from "lucide-react";

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

type MdxPreProps = ComponentProps<"pre"> & {
  "data-title"?: string;
  "data-filename"?: string;
  "data-tab"?: string;
  "data-copy"?: string;
};

type CodeElementProps = {
  className?: string;
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

function prettifyLanguage(language: string | null) {
  if (!language) return "code";
  if (language === "tsx") return "tsx";
  if (language === "ts") return "ts";
  if (language === "js") return "js";
  if (language === "jsx") return "jsx";
  return language;
}

function resolveCodeTitle(title?: string, filename?: string) {
  return title ?? filename ?? "Code Example";
}

function extractTextContent(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map((child) => extractTextContent(child)).join("");
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return extractTextContent(node.props.children);
  }

  return "";
}

async function copyTextToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function MdxCodeBlock({
  children,
  language,
  title,
  filename,
  tab,
  copy,
  ...preProps
}: {
  children: ReactNode;
  language: string;
  title?: string;
  filename?: string;
  tab?: string;
  copy?: boolean;
} & MdxPreProps) {
  const { className, ...restProps } = preProps;
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const isTabbedCodeBlock = Boolean(tab);
  const codeTitle = resolveCodeTitle(title, filename);
  const filenameLabel = filename ?? title;
  const languageLabel = prettifyLanguage(language);
  const copySource = extractTextContent(children).replace(/\n$/, "");

  useEffect(() => {
    if (copyState === "idle") return;

    const timer = window.setTimeout(() => {
      setCopyState("idle");
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, [copyState]);

  async function handleCopy() {
    if (!copySource) return;

    try {
      await copyTextToClipboard(copySource);
      setCopyState("copied");
    }
    catch {
      setCopyState("error");
    }
  }

  return (
    <div className={cn(styles.codeBlockShell, isTabbedCodeBlock && styles.codeBlockShellTabbed)}>
      {!isTabbedCodeBlock ? (
        <div className={styles.codeBlockHeader}>
          <div className={styles.codeBlockMeta}>
            <div className={styles.codeDots}>
              <span className={styles.codeDot} style={{ background: "#ff5f56" }} />
              <span className={styles.codeDot} style={{ background: "#ffbd2e" }} />
              <span className={styles.codeDot} style={{ background: "#27c93f" }} />
            </div>
            <div className={styles.codeTitle}>{codeTitle}</div>
          </div>
          <div className={styles.codeBlockHeaderActions}>
            {filename && title && filename !== title ? (
              <span className={styles.codeMetaChip} title={filename}>
                <span className={styles.codeMetaValue}>{filename}</span>
              </span>
            ) : null}
            {copy ? (
              <button
                type="button"
                className={cn(
                  styles.codeCopyButton,
                  copyState === "copied" && styles.codeCopyButtonCopied,
                  copyState === "error" && styles.codeCopyButtonError,
                )}
                onClick={handleCopy}
                aria-label={copyState === "copied" ? "Code copied" : "Copy code"}
              >
                {copyState === "copied" ? <Check size={12} /> : <Copy size={12} />}
                <span>{copyState === "copied" ? "Copied" : copyState === "error" ? "Retry" : "Copy"}</span>
              </button>
            ) : null}
            <div className={styles.codeBadge}>{languageLabel}</div>
          </div>
        </div>
      ) : null}
      <div className={cn(styles.codeBlockBody, isTabbedCodeBlock && styles.codeBlockBodyWithMeta)}>
        {isTabbedCodeBlock ? (
          <div className={styles.codeBlockFloatingMeta}>
            {filenameLabel ? (
              <span className={cn(styles.codeMetaChip, styles.codeMetaChipDocked)} title={filenameLabel}>
                <span className={styles.codeMetaValue}>{filenameLabel}</span>
              </span>
            ) : null}
            <span className={cn(styles.codeMetaChip, styles.codeMetaChipDocked)}>{languageLabel}</span>
            {copy ? (
              <button
                type="button"
                className={cn(
                  styles.codeCopyButton,
                  styles.codeCopyButtonDocked,
                  copyState === "copied" && styles.codeCopyButtonCopied,
                  copyState === "error" && styles.codeCopyButtonError,
                )}
                onClick={handleCopy}
                aria-label={copyState === "copied" ? "Code copied" : "Copy code"}
              >
                {copyState === "copied" ? <Check size={12} /> : <Copy size={12} />}
                <span>{copyState === "copied" ? "Copied" : copyState === "error" ? "Retry" : "Copy"}</span>
              </button>
            ) : null}
          </div>
        ) : null}
        <pre {...restProps} className={className}>{children}</pre>
      </div>
    </div>
  );
}

function MdxPre({ children, ...props }: MdxPreProps) {
  if (isValidElement<CodeElementProps>(children)) {
    const language = parseLanguage(children.props.className);
    const title = props["data-title"];
    const filename = props["data-filename"];
    const tab = props["data-tab"];
    const copy = props["data-copy"] === "true";

    if (language) {
      return (
        <MdxCodeBlock
          {...props}
          copy={copy}
          filename={filename}
          language={language}
          tab={tab}
          title={title}
        >
          {children}
        </MdxCodeBlock>
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