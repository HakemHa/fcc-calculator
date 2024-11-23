import { useSelector, useDispatch } from 'react-redux'
import { operation } from './store/slice'

function Operations() {
    const dispatch = useDispatch()
    const doOperation = (operationName) => { dispatch(operation(operationName)) }
    return (
        <div className="operations-buttons">
            <div className="div-button" onClick={() => doOperation("/")}>
              /
            </div>
            <div className="mul-button" onClick={() => doOperation("·")}>
                X
            </div>
            <div className="sub-button" onClick={() => doOperation("-")}>
                -
            </div>
            <div className="add-button" onClick={() => doOperation("+")}>
                +
            </div>
        </div>
          )
  }
  
  export default Operations