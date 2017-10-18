import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      boxOpen: true,
      text: null,
      textsArr: [],
      newChatter: false 
    }
  }

  closeBox () {
    this.setState({
      boxOpen: false
    })
  }

  text (e) {  
    let newtext = e.target.value;
    this.setState({
      text: newtext
    })
  }

  newText () {
    let exsitingTextArr = this.state.textsArr.slice();
    exsitingTextArr.push(this.state.text);
    this.setState({
      textsArr: exsitingTextArr,
      newChatter: true 
    })
    document.getElementById("text-filled").reset();
  }

  render () {
    let texts = this.state.textsArr;
    const newTextComponents = 
    <div>{texts.map( text => 
      <div className="new-chatbox">
        <div className="newtext">
          {text}
        </div>
        <div className="anonymous-talk"></div>
        <div className="anonymous"></div>
      </div>
    )}
    </div>

    const bottom =   
    <form className="boxbottom" id="text-filled">
      <input className="bottom text-area" onChange={this.text.bind(this)} type="text" placeholder="Type something..." />
      <input className="bottom send-button" onClick={this.newText.bind(this)} type="button" value="Send"/>
    </form>

    const box = 
    <div className="mainbox">
      <div className="boxtop">
        <p className="wake-support">Wake Support</p>
        <div className="close" onClick={this.closeBox.bind(this)}></div>
      </div>
      <p className="chatting-time">
        <span className="name">Kathleen</span> 2:08 pm
      </p>
      <div className="profile"> 
        <div className="profile-pic"></div>
        <div className="active-circle"></div>
        <div className="talk-shape"></div>
        <div className="chatter-box">Hello! Welcome to Wake. We just added a bundch of new features to our app. Let me know if you have any questions, I'm here to help</div>
      </div>
      { this.state.newChatter ? newTextComponents : null}
    </div>

    return (
      <div className="box">
        { this.state.boxOpen ? box : null}
        { this.state.boxOpen ? bottom : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));