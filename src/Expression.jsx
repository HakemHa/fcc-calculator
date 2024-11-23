import { useSelector, useDispatch } from 'react-redux'

function Expression() {
    const expression = useSelector( (state) => state.get.expression )
    const display_text = (text) => {
      if ( text == "" ) {
        return "\0"
      }
      else {
        return text
      }
    };
    return (
      <div className="expression">
        <p className="expression-text">{display_text(expression)}</p>
      </div>
    )
  }
  
  export default Expression