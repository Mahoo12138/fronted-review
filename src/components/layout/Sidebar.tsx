import { Link } from '@tanstack/react-router'
import { Home, List, Upload, BookOpen, PanelLeftClose, PanelLeftOpen, ChevronRight, Folder, ImagePlus } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

type MenuItem = {
  id: string
  label: string
  to?: string
  icon: React.ComponentType<{ className?: string }>
  children?: Array<{
    id: string
    label: string
    to: string
    icon: React.ComponentType<{ className?: string }>
  }>
}

const menuItems: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    to: '/',
    icon: Home,
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    icon: Folder,
    children: [
      {
        id: 'mobx',
        label: 'MobX',
        to: '/frameworks/mobx',
        icon: BookOpen,
      },
      {
        id: 'react',
        label: 'React',
        to: '/frameworks/react',
        icon: BookOpen,
      },
      {
        id: 'vue',
        label: 'Vue',
        to: '/frameworks/vue',
        icon: BookOpen,
      },
    ]
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    icon: Folder,
    children: [
      {
        id: 'event-loop',
        label: 'Event Loop',
        to: '/javascript/event-loop',
        icon: BookOpen,
      },
    ],
  },
  {
    id: 'demos',
    label: 'Demos',
    icon: Folder,
    children: [
      {
        id: 'pdf-viewer',
        label: 'PDF Viewer',
        to: '/demos/pdf-viewer',
        icon: BookOpen,
      },
      {
        id: 'virtual-scroll',
        label: 'Virtual Scroll',
        to: '/demos/virtual-scroll',
        icon: List,
      },
      {
        id: 'resumable-upload',
        label: 'Resumable Upload',
        to: '/demos/resumable-upload',
        icon: Upload,
      },
    ],
  },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({ demos: true })

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <aside className={cn('hidden flex-col border-r bg-muted/40 transition-all duration-200 md:flex', collapsed ? 'w-[72px]' : 'w-64')}>
      <div className={cn('flex h-14 items-center border-b lg:h-[60px]', collapsed ? 'px-2' : 'px-4 lg:px-6')}>
        <Link to="/" className={cn('flex min-w-0 flex-1 items-center font-semibold', collapsed ? 'justify-center' : 'gap-2 pr-3')}>
          <Home className="h-6 w-6 shrink-0" />
          {!collapsed && <span className="truncate">Frontend Demos</span>}
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className={cn('grid items-start text-sm font-medium', collapsed ? 'px-2' : 'px-2 lg:px-4')}>
          {menuItems.map((item) => {
            if (!item.children) {
              const Icon = item.icon
              return (
                <Link
                  key={item.id}
                  to={item.to!}
                  className={cn(
                    'flex rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&.active]:bg-muted [&.active]:text-primary',
                    collapsed ? 'justify-center' : 'items-center gap-3',
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {!collapsed && item.label}
                </Link>
              )
            }

            const GroupIcon = item.icon
            const isOpen = expandedGroups[item.id]

            return (
              <div key={item.id} className="space-y-1">
                <button
                  type="button"
                  onClick={() => toggleGroup(item.id)}
                  className={cn(
                    'flex w-full rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted/70',
                    collapsed ? 'justify-center' : 'items-center gap-3',
                  )}
                >
                  <GroupIcon className="h-4 w-4 shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      <ChevronRight className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-90')} />
                    </>
                  )}
                </button>

                {!collapsed && isOpen && (
                  <div className="ml-5 grid gap-1 border-l pl-2">
                    {item.children.map((child) => {
                      const ChildIcon = child.icon
                      return (
                        <Link
                          key={child.id}
                          to={child.to}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&.active]:bg-muted [&.active]:text-primary"
                        >
                          <ChildIcon className="h-4 w-4" />
                          <span>{child.label}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
      <div className={cn('border-t py-2', collapsed ? 'px-2' : 'px-2 lg:px-4')}>
        <div className={cn('grid gap-1', collapsed && 'justify-items-center')}>
          <button
            type="button"
            className={cn(
              'flex rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-primary',
              collapsed ? 'h-9 w-9 items-center justify-center' : 'items-center gap-3',
            )}
            aria-label="设置图片"
            title="设置图片"
          >
            <ImagePlus className="h-4 w-4 shrink-0" />
            {!collapsed && <span>设置图片</span>}
          </button>
          <button
            type="button"
            onClick={() => setCollapsed((prev) => !prev)}
            className={cn(
              'flex rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary',
              collapsed ? 'h-9 w-9 items-center justify-center' : 'items-center gap-3',
            )}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            title={collapsed ? '展开侧边栏' : '收起侧边栏'}
          >
            {collapsed ? <PanelLeftOpen className="h-4 w-4 shrink-0" /> : <PanelLeftClose className="h-4 w-4 shrink-0" />}
            {!collapsed && <span>{collapsed ? '展开侧边栏' : '收起侧边栏'}</span>}
          </button>
        </div>
      </div>
    </aside>
  )
}
