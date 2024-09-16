import { useState } from "react"


export default function useNewClients() {

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

    return { newUser, setNewUser, changeBox }
}