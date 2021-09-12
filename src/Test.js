import React, {useEffect, useState} from "react"
import randomColor from "randomcolor";

function App() {
   
    const [color, setColor] = useState("");
    const [change , setChange] = useState("a");
   
    

    useEffect(() => {
            setColor(randomColor)            
    }, [change])

    function handleChange(event) {
        setChange(`${event.target.value}`)
    }
   
    return (
        <div>
            <h1 style={{color : color}}>Hello</h1>
            <button value="a" onClick={handleChange}>a</button>
            <button value="b" onClick={handleChange}>b</button>
            <button value="c" onClick={handleChange}>c</button>
        </div>
    )
}

export default App