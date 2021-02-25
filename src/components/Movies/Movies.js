import React from 'react';
import Movie from "../Movie/Movie";
import styles from './Movies.module.css';
import noImage from '../../assets/images/no-image.jpg';

function Movies ({movies}) {
  return (
    <div className={styles.movies}>{movies.map(item => {
      if (item.Poster !== 'N/A') {
        return (
          <div className={styles.item} key={item.imdbID + Math.random() * 100}>
            <Movie title={item.Title} year={item.Year} image={item.Poster} type={item.Type}/>
          </div>
        )
      } else {
        return (
          <div className={styles.item} key={item.imdbID + Math.random() * 100}>
            <Movie title={item.Title} year={item.Year} image={noImage} type={item.Type}/>
          </div>
        )
      }
    })}</div>
  );
}

export default Movies;
