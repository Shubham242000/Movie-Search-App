import React from "react"

function NewTest(props) {
    if(props.isLoading)
    {
        return (
            <div>
                    <h1>IsLoading...</h1>
            </div> 
    )}
    else {
        return (
            <div>
                    <h1>Some Cool Stuff..</h1>
            </div>
        )
    }
}

export default NewTest