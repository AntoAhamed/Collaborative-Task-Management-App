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
            <div class="card mb-3" style={{ maxWidth: "40rem", backgroundColor: "#E0FCD6" }}>
                <div class="card-header bg-transparent border-tarnary text-center">Priority: {props.priority} | Status: {props.status.status} | DueDate: {props.date}</div>
                <div class="card-body">
                    <h4 class="card-title">{props.title}</h4>
                    <p class="card-text">{props.desc}</p>
                    <p class="card-text"><small class="text-body-secondary">Created By {props.users[props.creator - 1].name} ({props.users[props.creator - 1].email}) On {props.currentDate}</small></p>
                </div>
                <div className='p-2 m-2'>
                    <p>Change Task Status</p>
                    < select onChange={(e) => { handleAddrTypeChangeOfStatus(e) }} className="form-select form-select-lg" aria-label="Default select example">
                        {status.map((e, index) => {
                            return <option key={index} value={index}>{e}</option>
                        })}
                    </select >
                    <div className='d-grid gap-2'>
                        <button type="submit" onClick={() => props.editStatus(props.id, selectedStatus)} className="btn btn-primary btn-lg mt-2">Save</button>
                    </div>
                </div>
                <div class="card-footer bg-transparent border-tarnary text-center">StatusBy: {props.users[props.status.statusBy - 1].name} | StatusOn: {props.status.statusOn}</div>
            </div>
        </div>

    )
}

export default Task
