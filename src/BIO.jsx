import { useState } from "react"

function BIO() {
    const [person, setPerson] = useState({
        name: 'Andro',
        surname: 'Sharangia',
        age: 19,
        sex: 'male',
        hobbies: ['basketball', 'gooning']
    }) 

    const [form, setForm] = useState({
        name: '',
        surname: '',
        age: 0,
        sex: 'male',
        hobbies: ''
    })
    
    const [isError, setError] = useState(false)

    function handleInputChange(e) {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: value
        })     
    }

    function handleSetValueBtnClick(key) {
        let value = form[key]

        if(!form[key]) {
            setError(true)
            return
        }
        
        setError(false)

        if(Array.isArray(person[key])) {
                value = [...person[key], form[key]]
        }

        setPerson({
            ...person,
            [key]: value
        })
    }

    return(

        <div>
            {isError ? (<p>Ошибка в форме</p>) : ''}
            <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}/>

            <button onClick={() => {handleSetValueBtnClick('name')}}>
                Задать имя
            </button>

            <br />

            <input 
                type="text"
                name="surname"
                value={form.surname}
                onChange={handleInputChange}/>

            <button onClick={() => {handleSetValueBtnClick('surname')}}>
                Задать фамилию
            </button>

            <br />

            <input 
                type="number"
                name="age"
                value={form.age}
                onChange={handleInputChange}/>

            <button onClick={() => {handleSetValueBtnClick('age')}}>
                Задать возраст
            </button>

            <p>
                Пол:
                <label>
                  <input 
                    type="radio" 
                    name="sex" 
                    value="male" 
                    checked={form.sex === 'male'}
                    onChange={handleInputChange}
                  />
                  Муж
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="sex" 
                    value="female" 
                    checked={form.sex === 'female'}
                    onChange={handleInputChange}
                  />
                  Жен
                </label>
                <button onClick={() => {handleSetValueBtnClick('sex')}}>
                    Задать пол
                </button>
            </p>

            <input 
                type="text"
                name="hobbies"
                value={form.hobbies}
                onChange={handleInputChange}/>

            <button onClick={() => {handleSetValueBtnClick('hobbies')}}>
                Добавить хобби
            </button>

            <br />
            <br />

            <p>Имя: {person.name}</p>
            <p>Фамилия: {person.surname}</p>
            <p>Возраст:{person.age}</p>
            <p>Пол:{person.sex === 'male' ? 'мужской' : 'женский '}</p>
            <p>Хобби: </p>
            <div>{person.hobbies.map(hobbie => (
                <p key={hobbie}>{hobbie}</p>
            ))}</div>
        </div>
    )
}

export default BIO