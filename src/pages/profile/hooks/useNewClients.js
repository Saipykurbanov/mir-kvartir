import { useEffect, useRef, useState } from "react"
import Store from "../../../utils/Store"


export default function useNewClients() {

    const form = useRef(null)

    const [newUser, setNewUser] = useState({
        name: '',
        phone: '',
        city: '',
        budget: '',
        first: false,
        second: false
    })

    const changeBox = (field) => {
        setNewUser(prev => ({...prev, [field]: !prev[field]}))
    }

    const sendData = (e) => {
        e.preventDefault()
        /*ваш код отправки post запроса и ниже действия при положительном ответе*/
        document.body.style.overflow = 'hidden'
        Store.setListener('openSuccess', 'show')
        Store.setListener('successWindowMode', 'lite')
    }

    useEffect(() => {

        if(location.hash && form.current) {
            form.current.scrollIntoView({ behavior: 'smooth' });
        }
        
    }, [form])

    return { newUser, setNewUser, changeBox, sendData, form }
}