
import * as styles from "./section.css";

export interface SectionProps {
  id: string;
  title: string;
  number: string;
  children: React.ReactNode;
}
export const Section: React.FC<SectionProps> = ({
  id,
  title,
  number,
  children,
}) => {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.header}>
        <div className={styles.number}>{number}</div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
