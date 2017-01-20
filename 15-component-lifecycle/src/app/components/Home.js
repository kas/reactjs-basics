import React from 'react';

export class Home extends React.Component {
  constructor(props) { // constructor receives props as argument automatically
    super();

    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    };

    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000);

    console.log('Constructor');
  }

  componentWillMount() {
    console.log('Component will mount');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Component will receive props', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should component update', nextProps, nextState);

    // if (nextState.status === 1) {
    //   return false;
    // }

    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component will update', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3 // status doesn't get touched or removed -- only age is updated here
    });
  }

  onChangeLinkName() {
    this.props.changeLinkName(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
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
        <hr/>

        <input type='text' value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
        <button onClick={() => this.onChangeLinkName()} className='button'>Change Header Link</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
};