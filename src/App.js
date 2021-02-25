import React from 'react';
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import Main from "./layouts/Main/Main";

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header/> <Main/> <Footer/>
      </div>
    );
  }
}
export default App;
