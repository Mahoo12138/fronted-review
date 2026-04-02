import * as styles from './callout.css';

interface CalloutProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

function Callout({ icon, children }: CalloutProps) {
  return (
    <div className={styles.callout.info}>
      <div className={styles.calloutIcon}>{icon}</div>
      <div className={styles.calloutContent}>{children}</div>
    </div>
  );
}

export default Callout;
