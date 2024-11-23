import Clear from "./Clear"
import Operations from "./Operations"
import Numbers from "./Numbers"
import Equal from "./Equal"

function Buttons() {
  
    return (
      <div className="buttons-grid">
        <Clear />
        <Operations />
        <Numbers  />
        <Equal />
      </div>
    )
  }
  
  export default Buttons
  