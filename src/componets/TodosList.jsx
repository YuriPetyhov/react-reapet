import React from "react";
import {uid} from "react-uid";

export const TodosList = ({todos, removeTodo}) => {

    return (
        <ul className="list-group">
            {
                todos.map((item) => {
                    return (
                        <li
                            className="list-group-item note"
                            key={uid(item)}
                            id={item.id}
                        >
                            {item.text}
                            <div className="btns">
                                <button type="button" className="btn btn-success">Done</button>
                                <button
                                    onClick={removeTodo}
                                    type="button"
                                    className="btn btn-danger">Delete</button>
                            </div>

                        </li>
                    )
                })

            }
        </ul>

    )
}