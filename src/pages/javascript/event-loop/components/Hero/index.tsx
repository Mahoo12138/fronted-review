import * as styles from './hero.css';
function Hero(): JSX.Element {
  return (
    <div className={styles.hero}>
      <div className={styles.heroTag}>// Interactive Tutorial</div>
      <h1 className={styles.heroTitle}>JavaScript <span className={styles.boldText}>事件循环</span><br />深度解析</h1>
      <p className={styles.heroDesc}>从调用栈到微任务队列，从浏览器到 Node.js，彻底搞懂 JS 异步执行机制</p>
    </div>
  );
}

export default Hero;
