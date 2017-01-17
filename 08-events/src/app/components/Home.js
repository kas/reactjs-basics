import React from 'react';

export class Home extends React.Component {
  constructor(props) { // constructor receives props as argument automatically
    super();

    this.age = props.age;
  }

  onMakeOlder() {
    this.age += 3;

    console.log(this.age); // the console is updating but the HTML isn't updating because the state hasn't changed!
  }

  render() {
    return(
      <div>
        <p>In a new component!</p>

        <p>Your name is {this.props.name}, your age is {this.age}</p>

        <hr/>

        <button onClick={() => this.onMakeOlder()} className='button'>Make me older!</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number
};
