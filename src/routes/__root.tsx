import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Sidebar from '@/components/layout/Sidebar'

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
         <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px] md:hidden">
            <span className="font-semibold">Frontend Demos</span>
         </header>
         <main className="flex-1 overflow-auto p-4 lg:p-6">
            <Outlet />
         </main>
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
})
