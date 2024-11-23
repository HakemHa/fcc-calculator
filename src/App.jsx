import Displayer from './Displayer'
import Buttons from './Buttons'
import './App.css'

function App() {
  return (
    <>
      <div className="calculator">
        <Displayer />
        <Buttons />
      </div>
      <div>
        <p>Designed by:&ensp;&ensp;&ensp;&ensp;&nbsp;Coded By:</p>
        <p><a href="https://www.freecodecamp.org/no-stack-dub-sack">Peter Weinberg</a> &ensp;&ensp;<a href="https://github.com/HakemHa/">HakemHa</a></p>
      </div>
    </>
  )
}

export default App
