import React, { useState } from 'react'

const RestarauntRow = (props) => {

  const [checked, setChecked] = useState()

  let localData = JSON.parse(localStorage.getItem(props.restaraunt.name))
  
  const beenThere = () => {
    if (localData.checked) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }
  
  if (checked == null) {beenThere()}

  const onChangeHandler = () => {
    if (checked) {
      localData.checked = false
      localStorage.setItem(localData.name, JSON.stringify(localData))
      setChecked(false)
    } else {
      localData.checked = true
      localStorage.setItem(localData.name, JSON.stringify(localData))
      setChecked(true)
    }
  }

  return (
    <label>
      <div id="restarauntRow" style={{'backgroundColor': checked ? "#aaa": "white"}}>
        <input type="checkbox" id="rowCheckbox" onChange={onChangeHandler} checked={checked}/>
        <h3 id="rowHeader" style={{'color': checked? '#666':'black'}}>
          {props.restaraunt.name}
        </h3>
        {checked? <h3 className="been-here">BEEN HERE</h3>:null}
      </div>
    </label>
  )
}

export default RestarauntRow