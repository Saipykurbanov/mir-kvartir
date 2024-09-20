import { useState } from "react"
import Store from "../../../utils/Store"

export default function useTransferUser () {
    const [transferUser, setTransferUser] = useState({
        group: '',
        name: '',
        tel: '',
        city: '',
        agency: '',
        budget: '',
    })

    const sendData = (e) => {
        e.preventDefault()
        /*ваш код отправки post запроса и ниже действия при положительном ответе*/
        document.body.style.overflow = 'hidden'
        Store.setListener('openSuccess', 'show')
        Store.setListener('successWindowMode', 'lite')
    }

    return {transferUser, setTransferUser, sendData}
}