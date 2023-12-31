import React from 'react'

function Task(props) {
    const status = ["completed", "in progress", "pending"];
    const handleAddrTypeChangeOfStatus = (e) => {
        const selectedStatus = status[e.target.value];
        props.setNewStatus(selectedStatus);
        console.log(selectedStatus);
    }

    return (
        <div className="col-sm-6 mb-3 mb-sm-0 my-4">
            <div className="card text-bg-primary mb-3" style={{ maxWidth: "40rem" }}>
                <div className="card-header">DueDate: {props.date} | Priority: {props.priority} | Status: {props.status}</div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
                <div className='p-2 m-2'>
                    <p>Change task status</p>
                    < select onChange={e => handleAddrTypeChangeOfStatus(e)} className="form-select" aria-label="Default select example">
                        {
                            status.map((e, index) => <option key={index} value={index}>{e}{console.log(e)}</option>)
                        }
                    </select >
                    <button type="submit" onClick={() => props.editStatus(props.id)} className="btn btn-outline-light mt-2">Save</button>
                </div>
            </div>
        </div>
    )
}

export default Task
