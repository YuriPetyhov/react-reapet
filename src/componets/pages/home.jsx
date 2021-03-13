import React, {useState, useContext} from 'react';
import {TodosList} from "../TodosList";
import {AlertContext} from "../context/AlertContects";
import nextId from "../utils";


export default () => {
    const {show, hide} = useContext(AlertContext);

    const [toDos, setToDos] = useState([]);
    const [value, setValue] = useState('')

    const handleInputChange = (e) => setValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const randomId = nextId()
        setToDos([...toDos, {text: value, done: false, id: randomId}])
        show(value)
        setValue('')
        // eslint-disable-next-line no-unused-expressions
        // setTimeout(() => {
        //     hide()
        // }, 2000)
    }
    const removeTodo = (e) => {
        let sortedArr = toDos.filter((item) => {
            return item.id !== e.target.parentElement.parentElement.id
        })
        setToDos(sortedArr)
    }
    return (
        <>
            <h1>TODOS</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='form-control mb-2'
                    placeholder='Ну что какие дела ?'
                    onChange={handleInputChange}
                    value={value}
                />
            </form>
            <TodosList todos={toDos} removeTodo={removeTodo} />

        </>
    )
}