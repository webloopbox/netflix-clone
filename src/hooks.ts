import { useRef } from 'react';

// check if first render
export const useFirstRender = () => {
    const ref = useRef(true)
    const firstRender = ref.current
    ref.current = false
    return firstRender
}