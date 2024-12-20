import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">Task Manager</a>
            </div>
            <a href="/" className="btn btn-primary">Home</a>
            <a href="/task/new" className="btn btn-primary">Task</a>

        </nav>
    </div>
  )
}

export default Navbar
