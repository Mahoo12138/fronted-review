import { createFileRoute } from '@tanstack/react-router'
import { useVirtualizer } from '@tanstack/react-virtual'
import React from 'react'
import * as styles from './virtual-scroll.css'

export const Route = createFileRoute('/demos/virtual-scroll')({
  component: VirtualScrollDemo,
})

function VirtualScrollDemo() {
  const parentRef = React.useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 45, // Increased size for better touch target
    overscan: 5,
  })

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <h2 className={styles.heading}>Virtual Scroll</h2>
        <p className={styles.mutedText}>
          Rendering 10,000 items efficiently using @tanstack/react-virtual.
          Only the visible items are rendered in the DOM.
        </p>
      </div>

      <div
        ref={parentRef}
        className={styles.listContainer}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              className={styles.row}
              style={{
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <span className={styles.indexTag}>
                #{virtualItem.index}
              </span>
              <span className={styles.rowLabel}>Item Data Row {virtualItem.index}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
