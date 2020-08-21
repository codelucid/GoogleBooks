import React from "react";

function Image(props) {
    return (
        <img {...props} alt={props.title} />
    )
}

export default Image;