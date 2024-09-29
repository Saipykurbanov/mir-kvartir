import { useEffect, useRef, useState } from "react";
import Store from "../../../utils/Store";

export default function useScrollFeedBack(page, mainScroll) {
    const feedbackContainer = useRef(null);
    const feedbackList = useRef(null);
    const [scroll, setScroll] = useState(0);
    const blockTimer = useRef(null);
    const isBlockedRef = useRef(false);
    const ignoreRef = useRef(false)

    const scrollFeedBack = (e) => {

        if (isBlockedRef.current) {
            if (!ignoreRef.current) {
                blockTimer.current = setTimeout(() => {
                    Store.setListener("block_scroll", false);
                }, 400);

                ignoreRef.current = true
            }
            return;
        }

        if (page === 7 && mainScroll === 600 && !isBlockedRef.current) {
            
            let wheel = e.deltaY || e.deltaX;
            wheel = Math.max(Math.min(wheel, 50), -50) * 0.5;

            if (wheel > 0) {  // вниз
                const stop = feedbackList.current.offsetHeight - feedbackContainer.current.offsetHeight;

                setScroll((prev) => {
                    if (prev >= stop) {
                        isBlockedRef.current = true;
                        return prev;
                    } else {
                        return prev + wheel;
                    }
                });
            } else if (wheel < 0) {  // вверх
                setScroll((prev) => {
                    if (prev <= 0) {
                        isBlockedRef.current = true; 
                        return 0;
                    } else {
                        return prev + wheel;
                    }
                });
            }
        }
    };

    useEffect(() => {
        if (mainScroll === 600 && page === 7) {
            isBlockedRef.current = false;
            ignoreRef.current = false

            window.addEventListener("wheel", scrollFeedBack, { passive: false });
        }

        return () => window.removeEventListener("wheel", scrollFeedBack);
    }, [mainScroll, page]);

    useEffect(() => {
        if (page > 7) {
            setScroll(feedbackList.current.offsetHeight - feedbackContainer.current.offsetHeight);
        } else if (page < 7) {
            setScroll(0);
        }

        return () => {
            if (blockTimer.current) {
                clearTimeout(blockTimer.current);
            }
        };
    }, [page]);

    return { scroll, feedbackContainer, feedbackList, scrollFeedBack };
}
