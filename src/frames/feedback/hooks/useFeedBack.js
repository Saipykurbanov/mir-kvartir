import { useNavigate } from "react-router-dom";
import Store from "../../../utils/Store";
import { useEffect } from "react";

export default function useFeedBack () {
    const auth = true
    const navigate = useNavigate()

    const checkForAuth = () => {
        const screenWidth = window.innerWidth;

        if(auth) {
            navigate(screenWidth > 992 ? '/transfer' : '/profile#new_client')
        } else {
            document.body.style.overflow = 'hidden';
            Store.setListener('signIn', 'show');
            Store.setListener('block_scroll', true);
        }
    }

    const onFeedBack = () => {
        Store.setListener('block_scroll', true)
    }

    const leaveFeedBack = () => {
        Store.setListener('block_scroll', false)
    }

    const stopDefault = (e) => {
        if(Math.abs(e.deltaX) > 0) {
            e.preventDefault()
        }
        
        return
    }

    useEffect(() => {
        if(window.innerWidth > 991) {
            window.addEventListener('wheel', stopDefault, {passive: false})
        }

        return () => {
            if(window.innerWidth > 991) {
                window.removeEventListener('wheel', stopDefault)
            }
        }
    }, [onFeedBack])

    return {checkForAuth, onFeedBack, leaveFeedBack}
}