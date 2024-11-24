/* eslint-disable react/prop-types */
import { useState } from "react"
export default function TextField({label}) {
    const [text,setText] = useState("")
    return <div className="text-field">
    <label> {label}
    <input  value = {text} onChange={(event) => setText(event.target.value)}></input>
    </label>
    </div>
}

