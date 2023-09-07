import React from 'react'

function Create_Task() {
    return (
        <div className='container' style={{ marginTop: '5%' }}>
            <div className="row mb-3">
                <div className="col" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                    <b>Add Task</b>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <form action='' method='post' className='add-task'>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter title" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" rows="5" placeholder="Enter description" required></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="due" className="form-label">Due Date</label>
                            <input type="date" className="form-control" id="due" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priority" className="form-label">Priority Level</label>
                            <select class="form-select" id="priority" aria-label="Default select example" required>
                                <option selected value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-outline-dark">Add</button>
                        <button type="reset" className="btn btn-outline-dark mx-2">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create_Task
