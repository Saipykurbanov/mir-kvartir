import { useCallback, useEffect, useRef, useState } from "react";
import Store from "../utils/Store";

export default function useScrollPages() {

    const [page, setPage] = useState(1);
    const isBlocked = useRef(false);
    const timer = useRef(null);

    Store.setListener("change_page", page)

    Store.useListener('change_page_header', setPage)

    const wheelFunction = useCallback((e) => {
        if (window.innerWidth > 992 && !isBlocked.current) {
            isBlocked.current = true;
            const wheel = e.deltaY;

            setPage((prev) => {
                if (wheel > 0) {
                    return prev >= 10 ? prev : prev + 1;
                } else {
                    return prev <= 1 ? prev : prev - 1;
                }
            });

            timer.current = setTimeout(() => {
                isBlocked.current = false;
            }, 1000);
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth > 992) {
            window.addEventListener("wheel", wheelFunction);
        }

        return () => {
            window.removeEventListener("wheel", wheelFunction);
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, [wheelFunction]);

    return [page]
}