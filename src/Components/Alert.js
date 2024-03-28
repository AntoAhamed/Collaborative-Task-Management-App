import React from 'react'

function Alert(props) {
    return (
        <div className="alert alert-warning" role="alert">
            {props.alertMssg}
        </div>
    )
}

export default Alert
