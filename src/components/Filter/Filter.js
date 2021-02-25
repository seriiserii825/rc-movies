import React, {Component} from 'react';
import styles from './Filter.module.css';

class Filter extends Component {
  state = {
    filter: 'all'
  }
  handleClick = (e) => {
    this.setState({filter: e.target.value});
  }
  
  render () {
    const {filter} = this.state;
    return (
      <div className={styles.filter}>
        <label>
          <input onChange={this.handleClick} type="radio" name="filter" value="all" checked={filter === 'all'}/>
          <span>All</span>
        </label>
        <label>
          <input onChange={this.handleClick} type="radio" name="filter" value="movie" checked={filter === 'movie'}/>
          <span>Movies only</span>
        </label>
        <label>
          <input onChange={this.handleClick} type="radio" name="filter" value="series" checked={filter === 'series'}/>
          <span>Series only</span>
        </label>
      </div>
    );
  }
}
export default Filter;
