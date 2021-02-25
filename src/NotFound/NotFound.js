import React from 'react';
import notFound from './../assets/images/not-found.jpg';
import styles from './NotFound.module.css';

function NotFound () {
  return (
    <div className={styles.error}>
      <img src={notFound} alt="not found"/>
    </div>
  );
}

export default NotFound;
