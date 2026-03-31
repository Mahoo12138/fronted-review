import Hero from "./components/Hero";
import Intro from "./components/Intro";

import * as styles from "./index.css";
function MobxTutorial() {
  return (
    <div className={styles.mobxContainer}>
      <Hero />
      <Intro />
    </div>
  );
}

export default MobxTutorial;
