import { useSelector, useDispatch } from 'react-redux'
import { number, dot, limitWarning, warningTimeout } from './store/slice';

function Numbers() {
    const dispatch = useDispatch()
    const last = useSelector( (state) => state.get.last )
    const checkLimit = async (toDispatch, param) => {
      if ( last.length >= 18 ) {
        dispatch(limitWarning());
        setTimeout(() => dispatch(warningTimeout(last)), 1000);
      }
      else {
        dispatch(toDispatch(param));
      }
    }
    let numberButtons = []
    for (let i=0;i<10;i++) {
        numberButtons.push( 
          <div key={i} className={`button-${i}`} onClick={() => { checkLimit(number, i.toString()) }}>
          {i}
          </div> 
        );
    }
    return (
      <div className="number-buttons">
        {numberButtons}
        <div className={`dot-button`} onClick={() => { checkLimit(dot, null) }}>
            .
        </div>
      </div>
    )
  }
  
  export default Numbers