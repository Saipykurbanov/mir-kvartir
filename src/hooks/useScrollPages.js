import { useEffect, useRef, useState } from "react";
import Store from "../utils/Store";

export default function useScrollPages() {

    const [page, setPage] = useState(1);
    const [scroll, setScroll] = useState(0)
    const isBlocked = useRef(false)
    const [block, setBlock] = useState(false)
    const [isDrag, setIsDrag] = useState(false)
    const mainPage = useRef(null)
    const count = 9
  
    Store.useListener('change_page_header', (data) => {
      setScroll(data[0])
      setPage(data[1])
    })

    Store.useListener('block_scroll', setBlock)
    
    const wheelFunction = (e) => {
      if (window.innerWidth > 991 && !isBlocked.current && !block) {
          e.preventDefault()
          
          let wheel
          
          if(e.deltaY === 0) {
            wheel = e.deltaX > 0 ? Math.min(e.deltaX, 100) : Math.max(e.deltaX, -100); 
          } else {
            wheel = e.deltaY > 0 ? Math.min(e.deltaY, 100) : Math.max(e.deltaY, -100);
          }

          wheel *= 0.05

          if(wheel > 0) {

            setScroll(prev => { //скролл вправо
              let result = prev >= (100 * (count - 1)) ? ((count - 1) * 100) : prev + wheel
              if(result >= ((100 * page) - 20)) {
                setPage(prev => prev + 1)
                Store.setListener('change_page_from_scroll', (page + 1))
              }

              return result

            });
          } else if(wheel < 0) {

            setScroll(prev => { //скролл влево
              let result = prev <= 1 ? 0 : prev + wheel

              if(((100 * (page - 1)) - 80) > result) {
                setPage(prev => prev - 1)
                Store.setListener('change_page_from_scroll', (page - 1))
              }

              return result
              
            })
          }
      }
    }

    useEffect(() => {

      if(window.innerWidth > 991) {
        window.addEventListener('wheel', wheelFunction, {passive: false})
        window.addEventListener('mousedown', dragDown)
        window.addEventListener('mousemove', dragMove)
        window.addEventListener('mouseup', dragEnd)
      }

      return () => {
        if(window.innerWidth > 991) {
          window.removeEventListener('wheel', wheelFunction)
          window.removeEventListener('mousedown', dragDown)
          window.removeEventListener('mousemove', dragMove)
          window.removeEventListener('mouseup', dragEnd)
        }
      }
    }, [block, isDrag, page, count])

    const dragDown = (e) => {
      if (window.innerWidth > 991 && !isBlocked.current) {
        e.preventDefault()
        if(mainPage.current) {
          mainPage.current.style.cursor = 'grabbing';
        }
        setIsDrag(true)
      }
    }

    const dragMove = (e) => {
      if (window.innerWidth > 991 && !isBlocked.current) {
        e.preventDefault()
        let move = e.movementX * 0.08

        if(isDrag) {
          if(move < 0) {
            setScroll(prev => {
              let result = prev - e.movementX * 0.08
              if(result >= (100 * page)) {
                setPage(prev => prev + 1);
                Store.setListener('change_page_from_scroll', (page + 1))
              }
              if (result >= (100 * (count - 1))) {
                return 100 * (count - 1)
              } else {
                return result
              }
            });
          } else if (move > 0) {
            setScroll(prev => {
              let result = prev - e.movementX * 0.08
              if(((100 * (page - 1)) - 80) > result) {
                setPage(prev => prev - 1);
                Store.setListener('change_page_from_scroll', (page - 1))
              }
              if (result <= 0) {
                return 0
              } else if (result > 0) {
                return result
              }
            });
          }
        }
      }
    }

    Store.useListener('offDrag', (data) => {
      if(mainPage.current) {
        mainPage.current.style.cursor = 'default';
      }
      setIsDrag(data)
    })

    const dragEnd = (e) => {
      if (window.innerWidth > 991 && !isBlocked.current) {
        e.preventDefault()
        if(mainPage.current) {
          mainPage.current.style.cursor = 'default';
        }
        setIsDrag(false)
      }
    }

    return {isBlocked, scroll, page, mainPage}
}