import React from "react";
import {uid} from "react-uid";

export const TodosList = ({todos, removeTodo, handleDone}) => {

    return (
        <ul className="list-group">
            {
                todos.map((item) => {
                    return (
                        <li
                            className='list-group-item note'
                            key={uid(item)}
                            id={item.id}
                        >
                           <span className={`${item.done && 'done'}`}> {item.text}</span>

                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={handleDone}
                                >
                                    Done
                                </button>
                                <button
                                    onClick={removeTodo}
                                    type="button"
                                    className="btn btn-danger">Delete</button>
                        </li>
                    )
                })

            }
        </ul>

    )
}