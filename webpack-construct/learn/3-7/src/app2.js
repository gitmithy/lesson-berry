import styles from './css/base.lazy.css';

styles.use();

const divElement = document.createElement('div');
divElement.className = styles['my-class'];