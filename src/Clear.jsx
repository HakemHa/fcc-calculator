import { useSelector, useDispatch } from 'react-redux'
import { clear } from './store/slice'

function Clear() {
    const dispatch = useDispatch()
    return (
      <div className="clear-button" onClick={() => dispatch(clear())}>
        AC
      </div>
    )
  }
  
  export default Clear