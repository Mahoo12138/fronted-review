import { Link } from '@tanstack/react-router'
import { Home, PanelLeftClose, PanelLeftOpen, ChevronRight, ImagePlus } from 'lucide-react'
import { useState } from 'react'

import { menuItems, isMenuGroup } from '../../config/menuConfig'
import * as styles from './sidebar.css'

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({ demos: true })

  const v = collapsed ? 'collapsed' : 'expanded'

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <aside className={`${styles.aside} ${styles.asideWidth[v]}`}>
      <div className={`${styles.header} ${styles.headerPadding[v]}`}>
        <Link to="/home" className={`${styles.logo} ${styles.logoLayout[v]}`}>
          <Home size={24} />
          {!collapsed && <span className={styles.logoText}>Frontend Demos</span>}
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
            className={`${styles.actionBtn} ${styles.actionBtnLayout[v]}`}
            aria-label="设置图片"
            title="设置图片"
          >
            <ImagePlus size={16} />
            {!collapsed && <span>设置图片</span>}
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
