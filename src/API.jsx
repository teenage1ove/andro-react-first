import { useState, useEffect } from "react"
import { getTodos } from './api/todo'

function API() {
    const [users, setUsers] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    console.log('component rendered')

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)

        getTodos()
            .then(data => {
                console.log(data)
                setUsers(data)  
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
                setIsLoading(false)
                setIsError(true)
            })
    }, [])

    return ( 
        <div>
            { isError ?  'Ошибка запроса' : ''}
            { isLoading ? 'загрузка' : '' }
            { users ? JSON.stringify(users) : '' }
        </div>
    )
}

export default API;