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
      if (window.innerWidth > 992 && !isBlocked.current && !block) {
        const wheel = e.deltaY;
        
        if(wheel > 0) {
          if(((100 * page) - 40) < scroll) {
            setScroll(100 * page);
            setPage(prev => prev + 1);
            Store.setListener('change_page_from_scroll', (page + 1))
            isBlocked.current = true;
            setTimeout(() => { 
              isBlocked.current = false;
            }, 700);
          } else {
            setScroll(prev => prev >= (100 * (count - 1)) ? prev : prev + 5);
          }
        } else {
          if(((100 * (page - 1)) - 60) > scroll) {
            setScroll(100 * (page - 2));
            setPage(prev => prev - 1);
            Store.setListener('change_page_from_scroll', (page - 1))
            isBlocked.current = true;
            console.log(isBlocked)
            setTimeout(() => { 
              isBlocked.current = false;
            }, 700)
          } else {
            setScroll(prev => prev <= 1 ? prev : prev - 5)
          }
        }
      }
    }; 


    useEffect(() => {
        if (window.innerWidth > 991) {
            window.addEventListener("wheel", wheelFunction);
        }

        return () => {
            window.removeEventListener("wheel", wheelFunction);
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, [wheelFunction]);

    return {isBlocked, scroll, page}
}