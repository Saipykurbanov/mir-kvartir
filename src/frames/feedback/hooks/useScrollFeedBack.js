import { useEffect, useRef, useState } from "react"
import Store from "../../../utils/Store"

export default function useScrollFeedBack(page, mainScroll) {
    const feedbackContainer = useRef(null)
    const feedbackList = useRef(null)
    const [scroll, setScroll] = useState(0)
    const timer = useRef(null)
    const blockTimer = useRef(null)
    const [isblocked, setisblocked] = useState(false)
    const [ignore, setIgnore] = useState(false)


    const scrollFeedBack = (e) => { 

        if(isblocked) {
            if(!ignore) {
                blockTimer.current = setTimeout(() => {
                    Store.setListener('block_scroll', false)
                }, 500)

                setIgnore(true)
            }
            return
        }

        if(page === 7 && mainScroll === 600 && !isblocked) {
            let wheel
              
            if(e.deltaY === 0) {
                wheel = e.deltaX > 0 ? Math.min(e.deltaX, 50) : Math.max(e.deltaX, -50); 
            } else {
                wheel = e.deltaY > 0 ? Math.min(e.deltaY, 50) : Math.max(e.deltaY, -50);
            }
    
            wheel *= 0.5
    
            if(wheel > 0) {  //вниз
                const stop = feedbackList.current.offsetHeight - feedbackContainer.current.offsetHeight

                setScroll(prev => {
                    if(prev >= stop) {
                        setisblocked(true)
                        return prev
                    } else {
                        return prev + wheel
                    }
                })
            } else if((wheel < 0)) { //вверх

                setScroll(prev => {
                    if (prev <= 0) {
                        setisblocked(true)
                        return 0
                    } else {    
                        return prev + wheel
                    }
                })
            }
        }
    }

    useEffect(() => {
        if(mainScroll === 600 && page === 7) {
            setisblocked(false)
            setIgnore(false)
        }

        return () => {
            if(timer.current) {
                clearTimeout(timer.current)
            }
            if(blockTimer.current) {
                clearTimeout(blockTimer.current)
            }
        }
    }, [mainScroll])

    useEffect(() => {
        if(page > 7) {
            setScroll(feedbackList.current.offsetHeight - feedbackContainer.current.offsetHeight)
        } else if(page < 7) {
            setScroll(0)
        }
    }, [page])

    return {scroll, feedbackContainer, feedbackList, scrollFeedBack}
}