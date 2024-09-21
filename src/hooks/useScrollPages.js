import { useCallback, useEffect, useRef, useState } from "react";
import Store from "../utils/Store";

export default function useScrollPages() {

    const [page, setPage] = useState(1);
    const [scroll, setScroll] = useState(0)
    const isBlocked = useRef(false)
    const [block, setBlock] = useState(false)

    const timer = useRef(null)
    const count = 9
  
    Store.useListener('change_page_header', (data) => {
      setScroll(data[0])
      setPage(data[1])
    })

    Store.useListener('block_scroll', setBlock)
    
    const wheelFunction = (e) => {
      // if (window.innerWidth > 992 && !isBlocked.current && !block) {
        //   const wheel = e.deltaY;
        //   console.log(wheel)
        //   if(wheel > 0) {
          //     setScroll(prev => {
            //       let result = prev >= (100 * (count - 1)) ? prev : prev + 5
      //       if(result >= (100 * page)) {
        //         setPage(prev => prev + 1);
        //         Store.setListener('change_page_from_scroll', (page + 1))
        //       }
        //       return result
        //     });
        //   } else {
          //     setScroll(prev => {
            //       let result = prev <= 1 ? prev : prev - 5
            //       if(((100 * (page - 1)) - 80) > result) {
              //         setPage(prev => prev - 1);
              //         Store.setListener('change_page_from_scroll', (page - 1))
              //       }
              //       return result
              //     })
              //   }
              //}
              
      //e.preventDefault()
      if (window.innerWidth > 991 && !isBlocked.current && !block) {
        let wheel = e.deltaY > 0 ? Math.min(e.deltaY, 50) : Math.max(e.deltaY, -50);
        wheel *= 0.05

          if(wheel > 0) {
            if(((100 * page) - 20) < scroll) {
              setScroll(100 * page);
              setPage(prev => prev + 1);
              Store.setListener('change_page_from_scroll', (page + 1))
              isBlocked.current = true;
              timer.current = setTimeout(() => { 
                isBlocked.current = false;
              }, 1000);
            } else {
              setScroll(prev => prev >= (100 * (count - 1)) ? prev : prev + wheel);
            }

          } else {
            if(((100 * (page - 1)) - 80) > scroll) {
              setScroll(100 * (page - 2));
              setPage(prev => prev - 1);
              Store.setListener('change_page_from_scroll', (page - 1))
              isBlocked.current = true;
              timer.current = setTimeout(() => { 
                isBlocked.current = false;
              }, 1000)
            } else {
              setScroll(prev => prev <= 1 ? prev : prev + wheel)
            }
          }
        }
    }; 

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

    return {isBlocked, scroll, page, wheelFunction}
}