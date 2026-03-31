import * as styles from './section.css';


interface SectionProps {
  id: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}
function Section({ id, label, title, children }: SectionProps): JSX.Element {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.label}>{label}</div>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  )
}

export default Section;