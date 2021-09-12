import React, { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import SearchMovie from './SearchMovie'
// 92a610bdc1605c2a3d4e7573bd6c642b API KEY
function Test() {

    return (
       <div className="container">
          <h1 className="title">React Movie Search</h1>
          <SearchMovie />
       </div>
    )
}
export default Test