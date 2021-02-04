import React from "react";

export const PersonRow = (props) => {
    return <tr><td><p>{props.name.first}</p></td><td><p>{props.name.last}</p></td></tr>
}