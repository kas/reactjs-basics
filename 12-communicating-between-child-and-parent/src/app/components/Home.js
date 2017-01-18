import React from 'react';

export class Home extends React.Component {
  constructor(props) { // constructor receives props as argument automatically
    super();

    this.state = {
      age: props.initialAge,
      status: 0
    };

    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000);
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3 // status doesn't get touched or removed -- only age is updated here
    });
  }

  render() {
    return(
      <div>
        <p>In a new component!</p>

        <p>Your name is {this.props.name}, your age is {this.state.age}</p>

        <p>Status: {this.state.status}</p>

        <hr/>

        <button onClick={() => this.onMakeOlder()} className='button'>Make me older!</button>

        <hr/>

        <button onClick={this.props.greet} className='button'>Greet</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  greet: React.PropTypes.func
};
