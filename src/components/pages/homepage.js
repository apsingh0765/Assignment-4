import React, { Component } from 'react';



class Homepage extends Component {
  render() {
    return (
      <div className="item1">
      <p id="opening">
       <h1>Top 3 Machine Learning future advancements :</h1>
      </p>

<a href="./blog1"><img src={require('./mlib.png')} width='200' height='170' alt=''/></a>
<a href="./blog1"><img src={require('./scd.png')} width='200' height='170' alt=''/></a>
<a href="./blog1"><img src={require('./mlircm.jpg')} width='200' height='170' alt=''/></a>


      </div>
    );
  }
}

export default Homepage;
