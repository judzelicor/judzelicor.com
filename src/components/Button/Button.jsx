import React from "react";

class Button extends React.PureComponent {}

Button.Email = ({ message }) => {
    return (
        <React.Fragment>
            <button>{ message }</button>
        </React.Fragment>
    )
}

export default Button;