import { useCallback, useEffect, useRef, useState } from "react";
import Store from "../utils/Store";

export default function useScrollPages() {

    const [page, setPage] = useState(1);
    const [scroll, setScroll] = useState(0)
    const isBlocked = useRef(false)
    const [block, setBlock] = useState(false)
    const [isDrag, setIsDrag] = useState(false)

    const timer = useRef(null)
    const mainPage = useRef(null)
    const count = 9
  
    Store.useListener('change_page_header', (data) => {
      setScroll(data[0])
      setPage(data[1])
    })

    Store.useListener('block_scroll', setBlock)
    
    const wheelFunction = (e) => {

      if (window.innerWidth > 992 && !isBlocked.current && !block) {

          let wheel = e.deltaY > 0 ? Math.min(e.deltaY, 50) : Math.max(e.deltaY, -50);
          wheel *= 0.05


          if(wheel > 0) {

            setScroll(prev => {
              let result = prev >= (100 * (count - 1)) ? prev : prev + wheel
              if(result >= ((100 * page) - 20)) {
                setPage(prev => prev + 1);
                Store.setListener('change_page_from_scroll', (page + 1))
                setBlock(true)
                timer.current = setTimeout(() => {
                  setBlock(false)
                }, 1000)
                return page * 100
              }
              return result
            });
          } else {
            setScroll(prev => {
              let result = prev <= 1 ? prev : prev + wheel
              if(((100 * (page - 1)) - 80) > result) {
                setPage(prev => prev - 1);
                Store.setListener('change_page_from_scroll', (page - 1))
                setBlock(true)
                timer.current = setTimeout(() => {
                  setBlock(false)
                }, 1000)
                return 100 * (page - 2)
              }
              return result
            })
          }
      }
    }

    useEffect(() => {
      return () => {
        if (timer.current) {
            clearTimeout(timer.current);
        } 
      }
    }, [])

    const dragDown = (e) => {
      if (window.innerWidth > 992 && !isBlocked.current && !block) {
        e.preventDefault()
        if(mainPage.current) {
          mainPage.current.style.cursor = 'grabbing';
        }
        setIsDrag(true)
      }
    }

    const dragMove = (e) => {
      if (window.innerWidth > 992 && !isBlocked.current && !block) {
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
          } else {
            setScroll(prev => {
              let result = prev - e.movementX * 0.08
              if(((100 * (page - 1)) - 80) > result) {
                setPage(prev => prev - 1);
                Store.setListener('change_page_from_scroll', (page - 1))
              }
              if (result <= 0) {
                return 0
              } else {
                return result
              }
            });
          }
        }
      }
    }

    const dragEnd = (e) => {
      if (window.innerWidth > 992 && !isBlocked.current && !block) {
        e.preventDefault()
        if(mainPage.current) {
          mainPage.current.style.cursor = 'default';
        }
        setIsDrag(false)
      }
    }

    return {isBlocked, scroll, page, wheelFunction, dragDown, dragEnd, dragMove, mainPage}
}