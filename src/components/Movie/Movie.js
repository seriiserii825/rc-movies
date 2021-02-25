import React from 'react';
import styles from './Movie.module.css';

function Movie ({title, year, image, type}) {
  return (
    <div className={styles.movie}>
      <div className="card">
        <img src={image} className="card-img-top" alt="card"/>
        <div className="card-body">
          <p className="card-text">{title}</p>
          <div className={styles.footer}>
            <b>{year}</b> <b>{type}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
