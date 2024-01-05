import React from "react";
import PropTypes from "prop-types";

export default function Props(props){
    return(
        <div>
            <h2>{props.byDefault}</h2>
            <ul>
                <li>{props.string}</li>
                <li>{props.number}</li>
                <li>{props.boolean ? "True" : "False"}</li>
                <li>{props.array.join(", ")}</li>
            </ul>
        </div>
    )
}

Props.defaultProps = {
    byDefault: "default value."
};

Props.propTypes = {
    number: PropTypes.number.isRequired,
};