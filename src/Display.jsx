import { useSelector, useDispatch } from 'react-redux'

function Display() {
    const last = useSelector( (state) => state.get.last )
    const expression = useSelector( (state) => state.get.expression )
    const display_text = (text) => {
      if ( text == "" ) {
        return "0"
      }
      else if ( text == "=" ) {
        let eqIndex = expression.indexOf("=");
        return expression.slice(eqIndex+1, expression.length);
      }
      else {
        return text
      }
    };
    return (
      <div className="display">
        <p className="diplay-text">{display_text(last)}</p>
      </div>
    )
  }
  
  export default Display