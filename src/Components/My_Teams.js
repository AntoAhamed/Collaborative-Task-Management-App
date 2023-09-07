import React from 'react'

function My_Teams() {
    return (
        <div className='container' style={{ marginTop: '5%' }}>
            <div className="row mb-3">
                <div className="col" style={{ textAlign: "center", fontSize: "45px", paddingBottom: "30px" }}>
                    <b>My Teams</b>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <table class="table table-striped" style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th scope="col">Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href='/team'>team a</a></td>
                            </tr>
                            <tr>
                                <td><a href='#'>team b</a></td>
                            </tr>
                            <tr>
                                <td><a href='#'>team c</a></td>
                            </tr>
                            <tr>
                                <td><a href='#'>team d</a></td>
                            </tr>
                            <tr>
                                <td><a href='#'>team e</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default My_Teams
