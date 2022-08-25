
import { Button } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from '../redux/actions/counter'
import '../styles/counter.css'

export default function Counter() {
  const {value} = useSelector((state) => state.counter)
  const dispatch=useDispatch()
  return (
    <div className="counter" style={{display:'flex'}}>
      <h1>Operation increment/decrement</h1>
      <Button  variant="danger" onClick={() => dispatch(increment())}>+</Button>
      <span>{value}</span>
      <Button  variant="info" onClick={() => dispatch(decrement())}>-</Button>
    </div>
  );
}

