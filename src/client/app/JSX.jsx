import React from 'react';

class JSX extends React.Component {
  render() {
    let i = 1,
      myStyle = {
        fontSize: 12,
        color: '#FF0000'
      };

    return (
      <div>
        <div><h1>Using JSX examples</h1></div>
        <hr />
        <h1>Header</h1>
        <h2>Content</h2>
        <p>This is the content!!!</p>
        <p data-myattribute = "somevalue">Data attribute!!!</p>
        <p>Javascript explresions {2*5} {1+1}</p>
        <p>Javascript conditionals (ternary) {i == 1 ? 'True!' : 'False'}</p>
        <div style={myStyle} >Styling from component</div>
        <div>Comments are allowed in the view
          {/*Multi line comment...*/}</div>
      </div>


    );
  }

}

export default JSX;
