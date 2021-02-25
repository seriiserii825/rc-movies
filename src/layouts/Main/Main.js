import React from 'react';
import styles from './Main.module.css';
import Movies from "../../components/Movies/Movies";
import Search from "../../components/Search/Search";
import NotFound from "../../NotFound/NotFound";

const API_KEY = process.env.REACT_APP_API_KEY;
class Main extends React.Component {
  state = {
    movies: []
  }
  
  componentDidMount () {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=chip`)
      .then(res => res.json())
      .then(res => {
        this.setState({movies: res.Search})
      })
      .catch(error => console.log(error));
  }
  
  findMovies = (term, filter) => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${term}${filter !== 'all' ? `&type=${filter}` : ''}`)
      .then(res => res.json())
      .then(res => {
        this.setState({movies: res.Search})
      })
      .catch(error => console.log(error));
  }
  
  render () {
    const {movies} = this.state;
    if (movies) {
      return (
        <main className={styles.main}>
          <Search cb={this.findMovies}/>
          <hr/>
          <div className={styles.wrap}>
            {movies.length ? <Movies movies={movies}/> : <h4>Loading...</h4>}
          </div>
        </main>
      );
    } else {
      return (
        <main className={styles.main}>
          <Search cb={this.findMovies}/>
          <hr/>
          <NotFound/>
        </main>
      )
    }
  }
}
export default Main;
