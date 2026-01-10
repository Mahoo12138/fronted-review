import { createFileRoute } from '@tanstack/react-router'
import { useVirtualizer } from '@tanstack/react-virtual'
import React from 'react'

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
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">Virtual Scroll</h2>
        <p className="text-muted-foreground">
          Rendering 10,000 items efficiently using @tanstack/react-virtual.
          Only the visible items are rendered in the DOM.
        </p>
      </div>

      <div
        ref={parentRef}
        className="h-[600px] w-full overflow-auto rounded-md border bg-card shadow-sm"
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
              className="absolute top-0 left-0 w-full flex items-center px-6 border-b hover:bg-muted/50 transition-colors"
              style={{
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <span className="font-mono text-sm text-muted-foreground w-16">
                #{virtualItem.index}
              </span>
              <span className="font-medium">Item Data Row {virtualItem.index}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
