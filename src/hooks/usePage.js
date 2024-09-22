import { useEffect, useRef } from "react";


export default function usePage(page) {

    const pageRef = useRef(null)

    const checkPage = () => {
        if(window.innerWidth > 991 && pageRef.current) {
            const rect = pageRef.current.getBoundingClientRect();
            if (rect.left <= 100 && rect.left >= -100) {
                console.log(`страница: ${page}`);
            } 
        }
    }

    useEffect(() => {

        if(window.innerWidth > 991) {
            window.addEventListener('wheel', checkPage)
        }

        return () => {
            if(window.innerWidth > 991) {
                window.removeEventListener('wheel', checkPage)
            }
        }

    }, [])

    return [pageRef]
}