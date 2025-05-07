import './App.css'
import React, { useState } from 'react'

function App() {

  return (
    <>
      <div>
        <h1>Taskmanger</h1>
        <h3>Begin by adding tasks to list</h3>
        <input className="inputField" id="textfield" type="text" placeholder="What todo"></input>
        <button className="abutton">Add</button>
        <div className="Lista">

        </div>
      </div>
    </>
  )
}

export default App