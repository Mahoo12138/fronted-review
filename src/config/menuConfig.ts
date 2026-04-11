import { Home, List, Upload, BookOpen, Folder, Languages } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type MenuLeaf = {
  id: string
  label: string
  to: string
  icon: LucideIcon
}

export type MenuGroup = {
  id: string
  label: string
  icon: LucideIcon
  children: MenuLeaf[]
}

export type MenuItem = MenuLeaf | MenuGroup

export function isMenuGroup(item: MenuItem): item is MenuGroup {
  return 'children' in item
}

export const menuItems: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    to: '/home',
    icon: Home,
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    icon: Folder,
    children: [
      { id: 'mobx', label: 'MobX', to: '/frameworks/mobx', icon: BookOpen },
      { id: 'react', label: 'React', to: '/frameworks/react', icon: BookOpen },
      { id: 'vue', label: 'Vue', to: '/frameworks/vue', icon: BookOpen },
    ],
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    icon: Folder,
    children: [
      { id: 'event-loop', label: 'Event Loop', to: '/javascript/event-loop', icon: BookOpen },
    ],
  },
  {
    id: 'demos',
    label: 'Demos',
    icon: Folder,
    children: [
      { id: 'pdf-viewer', label: 'PDF Viewer', to: '/demos/pdf-viewer', icon: BookOpen },
      { id: 'rtl', label: 'RTL Adaptation', to: '/demos/rtl', icon: Languages },
      { id: 'virtual-scroll', label: 'Virtual Scroll', to: '/demos/virtual-scroll', icon: List },
      { id: 'resumable-upload', label: 'Resumable Upload', to: '/demos/resumable-upload', icon: Upload },
    ],
  },
]
