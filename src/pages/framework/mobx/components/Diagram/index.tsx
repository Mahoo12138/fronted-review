import { useTheme } from "@/hooks/useTheme";
import { dark, light } from "./diagram.css";

function Diagram({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme();
  return <div className={isDark ? dark : light}>{children}</div>;
}

export default Diagram;
