import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { decrement, increment } from '../../actions';
import { StoreState } from '../../types';

// 创建类型接口
interface IProps {
  fatherText?: string,
  value?: number,
  onIncrement?: () => void,
  onDecrement?: () => void
}

interface IStates {
  text: string
  num: number
}

// 使用接口代替 PropTypes 进行类型校验
class Counter extends React.PureComponent<IProps,IStates> {

  state = {
    text: 'hello,text!',
    num: 0
  }


  componentDidMount(){
    // let that = this;
    // window.addEventListener('scroll',function(){
    //   console.log('before update number, num='+that.state.num);
    //   that.setState({num: that.state.num + 1});
    //   console.log('after update number, num='+that.state.num);
    //   that.setState({num: that.state.num + 1});
    //   console.log('after update number, num='+that.state.num);
    //   that.setState({num: that.state.num + 1});
    //   console.log('after update number, num='+that.state.num);
    // })
  }

  static getDerivedStateFromProps(nextProps:IProps, prevState:IStates) {
    console.log('getDerivedStateFromProps',nextProps,prevState);
    return null
  }

  componentDidUpdate(prevProps:IProps, prevState:IStates) {
    console.log('componentDidUpdate2',prevProps, prevState);
    // if (prevProps.userToken !== this.props.userToken) {
    //   this.GetPassengersData();
    // }
  }

  // shouldComponentUpdate(){
  //   //return false;
  // }

  onTestOne = () => {
    console.log('before update number, num='+this.state.num);
    this.setState({num: this.state.num + 1});
    this.setState({num: this.state.num + 1});
    console.log('after update number, num='+this.state.num);
  }

  onTestTwo = () => {
    setTimeout(()=>{
      console.log('before update number, num='+this.state.num);
      this.setState({num: this.state.num + 1});
      console.log('after update number, num='+this.state.num);
      this.setState({num: this.state.num + 1});
      console.log('after update number, num='+this.state.num);
      this.setState({num: this.state.num + 1});
      console.log('after update number, num='+this.state.num);
    },1000)
  }



  render() {
    const { value, onIncrement, onDecrement,fatherText } = this.props;
    const { text,num } = this.state;
    return (
      <div>
        <p className="counterText">{ text }</p>
        Clicked: {value} times
                <br />
        <br />
        <button onClick={onIncrement} style={{ marginRight: 20 }}> +  </button>
        <button onClick={onDecrement}> - </button>
        <br />
        <div>
            <p>num is  {num}</p>
            <button onClick={this.onTestOne}> onTestOne </button>
            <button onClick={this.onTestTwo}> onTestTwo </button>
        </div>
      </div>
    )
  }
}


// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: StoreState): { value: number } => ({
  value: state.counter
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment())
})

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
