import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {PushesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.PushesCount + 1;
    this.setState({PushesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        Pushes : <span>{this.state.PushesCount}</span>
        <div><button onClick={this.onLike}>Push Me</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;
