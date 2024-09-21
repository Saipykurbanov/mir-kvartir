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
          if(result >= (100 * page)) {
            setPage(prev => prev + 1);
            Store.setListener('change_page_from_scroll', (page + 1))
          }
          return result
        });
      } else {
        setScroll(prev => {
          let result = prev <= 1 ? prev : prev + wheel
          if(((100 * (page - 1)) - 80) > result) {
            setPage(prev => prev - 1);
            Store.setListener('change_page_from_scroll', (page - 1))
            return page * 100
          }
          return result
        })
      }
  }
}
              
      //e.preventDefault()
    //   if (window.innerWidth > 991 && !isBlocked.current && !block) {
    //     let wheel = e.deltaY > 0 ? Math.min(e.deltaY, 50) : Math.max(e.deltaY, -50);
    //     wheel *= 0.05

    //       if(wheel > 0) {
    //         if(((100 * page) - 20) < scroll) {
    //           setScroll(100 * page);
    //           setPage(prev => prev + 1);
    //           Store.setListener('change_page_from_scroll', (page + 1))
    //           isBlocked.current = true;
    //           timer.current = setTimeout(() => { 
    //             isBlocked.current = false;
    //           }, 1000);
    //         } else {
    //           setScroll(prev => prev >= (100 * (count - 1)) ? prev : prev + wheel);
    //         }

    //       } else {
    //         if(((100 * (page - 1)) - 80) > scroll) {
    //           setScroll(100 * (page - 2));
    //           setPage(prev => prev - 1);
    //           Store.setListener('change_page_from_scroll', (page - 1))
    //           isBlocked.current = true;
    //           timer.current = setTimeout(() => { 
    //             isBlocked.current = false;
    //           }, 1000)
    //         } else {
    //           setScroll(prev => prev <= 1 ? prev : prev + wheel)
    //         }
    //       }
    //     }
    // }; 

    useEffect(() => {
      return () => {
        if (timer.current) {
            clearTimeout(timer.current);
        } 
      }
    }, [])


    // useEffect(() => {

    //     if (window.innerWidth > 991) {
    //         window.addEventListener("wheel", wheelFunction, {passive: false});
    //     }


    //     return () => {
    //         window.removeEventListener("wheel", wheelFunction);
    //         if (timer.current) {
    //             clearTimeout(timer.current);
    //         }
    //     };
    // }, []);

    const dragDown = (e) => {
      e.preventDefault()
      if(mainPage.current) {
        mainPage.current.style.cursor = 'grabbing';
      }
      setIsDrag(true)
    }

    const dragMove = (e) => {
      e.preventDefault()
      if(isDrag) {
        setScroll(prev => {
          let result = prev - e.movementX * 0.08
          if(result <= 0) {
            return 0
          } else if (result >= (100 * (count - 1))) {
            return 100 * (count - 1)
          } else {
            return result
          }
        });
      }
    }

    const dragEnd = (e) => {
      e.preventDefault()
      if(mainPage.current) {
        mainPage.current.style.cursor = 'default';
      }
      setIsDrag(false)
    }

    return {isBlocked, scroll, page, wheelFunction, dragDown, dragEnd, dragMove, mainPage}
}