import { useEffect, useState } from "react"

export function useWindowSize() {
    const [state, setState] = useState({ width: 0, height: 0 })

    useEffect(() => {
        setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }, [])

    return state
}