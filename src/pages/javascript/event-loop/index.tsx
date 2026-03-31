import Hero from './components/Hero';
import ChapterOne from './components/ChapterOne';


import * as styles from './index.css';
import ChapterTwo from './components/ChapterTwo';

export default function JsEventLoopTutorial(): JSX.Element {

  return (
    <div className={styles.container}>
      <Hero />
      <ChapterOne />
      <ChapterTwo />
    </div>
  )
};
