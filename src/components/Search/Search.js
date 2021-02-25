import React, {Component} from 'react';
import styles from './Search.module.css';

class Search extends Component {
  state = {
    search: 'star',
    filter: 'all'
  }
  updateSearch = (e) => {
    this.setState({search: e.target.value})
  }
  findMovie = () => {
    this.props.cb(this.state.search, this.state.filter);
  }
  onKeyPressHandler = (e) => {
    if (e.code === 'Enter') {
      this.props.cb(this.state.search, this.state.filter);
    }
  }
  handleClick = (e) => {
    this.setState(() => ({filter: e.target.value}), () => {
      this.props.cb(this.state.search, this.state.filter);
    });
  }
  
  render () {
    const {filter} = this.state;
    return (
      <div>
        <div className={styles.search}>
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              onChange={this.updateSearch}
              value={this.state.search}
              onKeyUp={this.onKeyPressHandler}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={this.findMovie}
            >Find
            </button>
          </div>
        </div>
        
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
      </div>
    );
  }
}
export default Search;
