import React from "react";

const Band = props => {
    // debugger
    return (
        <li>
            {props.band.name}
            <button onClick={() => props.delete(props.band)}>Delete</button>
        </li>
    )
}

export default Band