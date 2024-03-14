import React, { useEffect, useState } from 'react'

function Task(props) {
    const status = ["Pending", "In Progress", "Completed"];
    const [selectedStatus, setSelectedStatus] = useState(status[0]);
    const handleAddrTypeChangeOfStatus = (e) => {
        const selectedStatus = status[e.target.value];
        setSelectedStatus(selectedStatus);
        //props.setNewStatus(selectedStatus);
        console.log(selectedStatus);
    }

    useEffect(() => {

    }, [])

    return (
        <div className="col-sm-6 mb-3 mb-sm-0 my-4">
            <div class="card text-bg-primary mb-3" style={{ maxWidth: "40rem" }}>
                <div class="card-header bg-transparent border-tarnary text-center">Created By {props.users[props.creator - 1].name}({props.users[props.creator - 1].email}) On {props.currentDate} | Priority: {props.priority} | Status: {props.status.status}</div>
                <div class="card-body">
                    <h4 class="card-title">{props.title}</h4>
                    <p class="card-text">{props.desc}</p>
                </div>
                <div className='p-2 m-2'>
                    <p>Change Task Status</p>
                    < select onChange={(e) => { handleAddrTypeChangeOfStatus(e) }} className="form-select" aria-label="Default select example">
                        {status.map((e, index) => {
                            return <option key={index} value={index}>{e}</option>
                        })}
                    </select >
                    <button type="submit" onClick={() => props.editStatus(props.id, selectedStatus)} className="btn btn-outline-light mt-2">Save</button>
                </div>
                <div class="card-footer bg-transparent border-tarnary text-center">StatusBy: {props.users[props.status.statusBy - 1].name} | StatusOn: {props.status.statusOn} | DueDate: {props.date}</div>
            </div>
        </div>

    )
}

export default Task
