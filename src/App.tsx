
import * as React from 'react';
import { hot } from "react-hot-loader/root";

import Button from 'components/button';

import Counter from 'modules/counter';
import { Hello } from 'modules/hello';

import "./styles.css";
import "./styles.scss";
import "./styles.less";


interface Props {
   name: string
}

interface State {
   text: string
}

class App extends React.Component<Props,State> {

  constructor(props: Props){
    super(props);

    this.state = {
      text: 'this is fatherText!'
    };
  }

  static getDerivedStateFromProps(nextProps:Props, prevState:State) {
    console.log('getDerivedStateFromProps',nextProps,prevState);
    return null
  }


  componentDidMount(){

  }

  componentDidUpdate(prevProps:Props, prevState:State) {
    console.log('componentDidUpdate',prevProps, prevState);
    // if (prevProps.userToken !== this.props.userToken) {
    //   this.GetPassengersData();
    // }
  }

  render() {
    const { name } = this.props;
    const { text } = this.state;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <Button onClick={()=>{ this.setState({text: 'fatherText!'}) }}>Button</Button>
        <hr/>
        <Counter fatherText={text} />
        <hr/>
        <div className="clock">
            <span className="pointer"></span>
            <span className="pointer"></span>
            <span className="pointer"></span>
            <span className="pointer"></span>
            <span className="pointer"></span>
            <span className="pointer"></span>
            <span className="pointer"></span>
            <span className="pointer"></span>
            <span className="pointer"></span>
            <span className="pointer"></span>
            <span className="pointer"></span>
            <span className="pointer"></span>
        </div>
        <hr/>
        <button className="btnTest">btnTest</button>
        <hr/>
        <Hello name="world" enthusiasmLevel={5} />
      </>
    );
  }
}

export default hot(App);
