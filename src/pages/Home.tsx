import { useState } from "react"

export function Home() {

    const [count, setCount] = useState(0)

    return <>
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
        I am home</>
}
