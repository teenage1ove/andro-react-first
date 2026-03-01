import { useEffect, useState } from "react";
import { getTodos } from './api/todo';
import { getNormalizeTodos } from "./utils/get-normalize-todos";

// const mokTodos = [
//     {
//         userId: 1,
//         id: 1,
//         title: "delectus aut autem",
//         completed: false
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: "quis ut nam facilis et officia qui",
//         completed: false
//     },
// ]

function Todo() {
    const [todosIds, setTodosIds] = useState(null);
    const [todosById, setTodosById] = useState({});
    const [isTodoLoading, setIsTodoLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsError(false)
        setIsTodoLoading(true)


        getTodos()
            .then(todos => {
                const [ids, byIds] = getNormalizeTodos(todos)

                setIsTodoLoading(false)
                setTodosIds(ids)
                setTodosById(byIds)
            })
            .catch(error => {
                setIsError(true)
                setIsTodoLoading(false)
            })
    }, [])

    return(
        <div>
            <h1>Список задач</h1>

            { isError && <p>Произошла ошибка</p>}

            { isTodoLoading && <p>Загружаем список задач</p>}

            { todosIds && todosIds.map(id => (
                <p key={id}>{todosById[id].title}</p>
            ))}
        </div>
    )
}

export default Todo