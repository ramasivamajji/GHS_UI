import { useState } from "react"

export default function ButtonColor() {
    const [color, setColor] = useState("btn-primary");
    let [count, setCount] = useState(0);

    function changeColor() {
        if (count % 2 === 0) {
            setColor("btn-danger");
        }
        else {
            setColor("btn-primary")
        }
        setCount(count + 1);
    }

    return (<>
        <button className={`btn ${color}`} onClick={() => { changeColor() }}> Change Color </button>
    </>)
}