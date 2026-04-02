import Sidebar from "@/components/layout/Sidebar";
import * as styles from "@/pages/app.css";
import { themes } from "@/styles/theme.css";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useTheme } from "@/hooks/useTheme";
function App() {
  const { resolvedTheme } = useTheme();
  const { location } = useRouterState();
  const isLanding = location.pathname === "/";

  if (isLanding) {
    return (
      <div className={themes[resolvedTheme]}>
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
      </div>
    );
  }

  return (
    <div className={`${themes[resolvedTheme]} ${styles.shell}`}>
      <Sidebar />
      <div className={styles.content}>
        <header className={styles.header}>
          <span className={styles.title}>Frontend Demos</span>
        </header>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}

export default App;
