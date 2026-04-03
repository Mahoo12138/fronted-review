import { useTheme } from "@/hooks/useTheme";
import { dark, light, title as titleStyle } from "./diagram.css";

function Diagram({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  const { isDark } = useTheme();
  return (
    <div className={isDark ? dark : light}>
      {<div className={titleStyle}>{title}</div>}
      {children}
    </div>
  );
}

export default Diagram;
