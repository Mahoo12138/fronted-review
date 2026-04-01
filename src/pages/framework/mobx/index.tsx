import TableOfContents from "@/components/TableOfContents";
import Hero from "./components/Hero";
import Intro from "./components/Intro";

import * as styles from "./index.css";
import Observable from "./components/Observable";

const CONTENT_SELECTOR = "[data-toc-content]";

function MobxTutorial() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mobxContainer} data-toc-content>
        <Hero />
        <Intro />
        <Observable />
      </div>
      <TableOfContents containerSelector={CONTENT_SELECTOR} />
    </div>
  );
}

export default MobxTutorial;
