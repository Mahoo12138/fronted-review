import { useEffect, useState, useRef } from "react";

export interface TocItem {
  id: string;
  text: string;
  level: number; // 2 for h2, 3 for h3, etc.
}

/**
 * 自动从容器中收集标题元素，生成 TOC 数据，并通过 IntersectionObserver 追踪当前可见标题。
 *
 * @param containerSelector - 内容容器的 CSS 选择器
 * @param headingSelector - 标题元素的选择器，默认 "h2, h3"
 */
export function useTableOfContents(
  containerSelector: string,
  headingSelector = "h2, h3"
) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    // 收集所有标题
    const headings = Array.from(
      container.querySelectorAll(headingSelector)
    ) as HTMLElement[];

    // 为没有 id 的标题自动生成 id
    const tocItems: TocItem[] = headings.map((heading, index) => {
      if (!heading.id) {
        heading.id = `toc-heading-${index}`;
      }
      return {
        id: heading.id,
        text: heading.textContent?.trim() ?? "",
        level: parseInt(heading.tagName[1], 10),
      };
    });

    setItems(tocItems);

    // IntersectionObserver 追踪当前可见标题
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // 找到第一个可见的标题
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-40px 0px -60% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => observerRef.current?.observe(heading));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [containerSelector, headingSelector]);

  return { items, activeId };
}
