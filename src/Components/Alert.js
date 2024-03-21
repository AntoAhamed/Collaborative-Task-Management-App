import React from 'react'

function Alert(props) {
    return (
        <div class="alert alert-warning" role="alert">
            {props.alertMssg}
        </div>
    )
}

export default Alert
