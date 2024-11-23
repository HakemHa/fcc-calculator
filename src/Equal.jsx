import { useSelector, useDispatch } from 'react-redux'
import { equals } from './store/slice'

function Equal() {
    const dispatch = useDispatch()
    return (
      <div className="equal-button" onClick={() => { dispatch( equals() ) }}>
        =
      </div>
    )
  }
  
  export default Equal