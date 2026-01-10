import { Link } from '@tanstack/react-router'
import { Home, List, Upload } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col border-r bg-muted/40 md:flex">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Home className="h-6 w-6" />
          <span>Frontend Demos</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
           <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&.active]:bg-muted [&.active]:text-primary">
              <Home className="h-4 w-4" />
              Home
           </Link>
           <Link to="/demos/virtual-scroll" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&.active]:bg-muted [&.active]:text-primary">
              <List className="h-4 w-4" />
              Virtual Scroll
           </Link>
           <Link to="/demos/resumable-upload" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary [&.active]:bg-muted [&.active]:text-primary">
              <Upload className="h-4 w-4" />
              Resumable Upload
           </Link>
        </nav>
      </div>
    </aside>
  )
}
