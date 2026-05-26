import { Link } from '@tanstack/react-router'
import { ChevronRight, Home, Monitor, Moon, PanelLeftClose, PanelLeftOpen, Sun, type LucideIcon } from 'lucide-react'
import { useState } from 'react'

import { menuItems, isMenuGroup } from '../../config/menuConfig'
import { getNextTheme, useTheme, type Theme } from '../../hooks/useTheme'
import * as styles from './sidebar.css'

const themeMeta: Record<Theme, { icon: LucideIcon; label: string }> = {
  dark: { icon: Moon, label: '深色模式' },
  light: { icon: Sun, label: '浅色模式' },
  system: { icon: Monitor, label: '跟随系统' },
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({ demos: true })
  const { theme, toggle } = useTheme()

  const v = collapsed ? 'collapsed' : 'expanded'
  const currentTheme = themeMeta[theme]
  const nextTheme = themeMeta[getNextTheme(theme)]
  const ThemeIcon = currentTheme.icon

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <aside className={`${styles.aside} ${styles.asideWidth[v]}`}>
      <div className={`${styles.header} ${styles.headerPadding[v]}`}>
        <Link to="/home" className={`${styles.logo} ${styles.logoLayout[v]}`}>
          <Home size={24} />
          {!collapsed && <span className={styles.logoText}>H先生的秘密花园</span>}
        </Link>
      </div>

      <div className={styles.navBody}>
        <nav className={`${styles.nav} ${styles.navPadding[v]}`}>
          {menuItems.map((item) => {
            if (!isMenuGroup(item)) {
              const Icon = item.icon
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  className={`${styles.menuLink} ${styles.menuLinkLayout[v]}`}
                >
                  <Icon size={16} />
                  {!collapsed && item.label}
                </Link>
              )
            }

            const GroupIcon = item.icon
            const isOpen = expandedGroups[item.id]

            return (
              <div key={item.id} className={styles.groupItem}>
                <button
                  type="button"
                  onClick={() => toggleGroup(item.id)}
                  className={`${styles.groupBtn} ${styles.groupBtnLayout[v]}`}
                >
                  <GroupIcon size={16} />
                  {!collapsed && (
                    <>
                      <span className={styles.groupLabel}>{item.label}</span>
                      <ChevronRight
                        size={16}
                        className={`${styles.chevron}${isOpen ? ` ${styles.chevronOpen}` : ''}`}
                      />
                    </>
                  )}
                </button>

                {!collapsed && isOpen && (
                  <div className={styles.childrenList}>
                    {item.children.map((child) => {
                      const ChildIcon = child.icon
                      return (
                        <Link
                          key={child.id}
                          to={child.to}
                          className={styles.childLink}
                        >
                          <ChildIcon size={16} />
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

      <div className={styles.footer}>
        <div className={`${styles.footerActions}${collapsed ? ` ${styles.footerActionsCollapsed}` : ''}`}>
          <button
            type="button"
            onClick={toggle}
            className={`${styles.actionBtn} ${styles.actionBtnLayout[v]}`}
            aria-label={`切换主题，当前${currentTheme.label}，下一个${nextTheme.label}`}
            title={`当前：${currentTheme.label}，点击切换到${nextTheme.label}`}
          >
            <ThemeIcon size={16} />
            {!collapsed && <span>{currentTheme.label}</span>}
          </button>
          <button
            type="button"
            onClick={() => setCollapsed((prev) => !prev)}
            className={`${styles.actionBtn} ${styles.actionBtnLayout[v]}`}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            title={collapsed ? '展开侧边栏' : '收起侧边栏'}
          >
            {collapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
            {!collapsed && <span>收起侧边栏</span>}
          </button>
        </div>
      </div>
    </aside>
  )
}
