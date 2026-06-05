import TOC from "@/components/toc";

import Hero from "./components/Hero";
import Identity from "./components/Identity";
import Thinking from "./components/Thinking";

import * as styles from "./styles/index.css";
const PMGrowth: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container} data-toc-content>
        <Hero />
        <Identity />
        <Thinking />
      </div>
      <TOC containerSelector="[data-toc-content]" />
    </div>
  );
};

export default PMGrowth;
