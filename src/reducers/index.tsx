
import { ModifyAction } from '../actions';
import  { INCREMENT, DECREMENT}  from "../constants";


// 处理并返回 state
export function CounterReducer(state = 0, action: ModifyAction): number{
    switch (action.type) {
      case INCREMENT:
        return state + 1
      case DECREMENT:
        return state - 1
      default:
        return state
    }
}
