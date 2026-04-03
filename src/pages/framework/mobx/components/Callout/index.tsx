import * as styles from "./callout.css";

interface CalloutProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  type: keyof typeof styles.callout;
}

function Callout({ icon, children, type }: CalloutProps) {
  return (
    <div className={styles.callout[type]}>
      <div className={styles.calloutIcon}>{icon}</div>
      <div className={styles.calloutContent}>{children}</div>
    </div>
  );
}

export default Callout;
