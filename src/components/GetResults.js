import React, { useState } from 'react'
import RestarauntRow from './RestarauntRow'

const GetResults = (props) => {
  const [rows, setRows] = useState()
  const [latLng] = useState()

  let mylocation = new window.google.maps.LatLng(props.latLng[0], props.latLng[1]);
  const radius = 2000;

  let requestObj = {
    location: mylocation,
    radius: radius,
    type: [ 'restaurant' ],
  };

  const service = new window.google.maps.places.PlacesService(document.getElementById('google-data'));
  let rowContainer = []
    if ('' !== props.latLng) {
    //let rowContainer = []
    service.nearbySearch(requestObj, (results, status, pagination) => {
      if (status !== 'OK') return;

      results.forEach((data) => {

        const restaraunt = {
          key: data.id,
          name: data.name,
          id: data.place_id,
          checked: false
        }

        if (!localStorage.getItem(restaraunt.name)){
          localStorage.setItem(restaraunt.name, JSON.stringify(restaraunt))
        }
        
        let createRow = <RestarauntRow key={restaraunt.id} restaraunt={restaraunt} />
        rowContainer.push(createRow)
      })
      
      setRows(rowContainer)
    })
  }

console.log('GetResults.js')
  return (
    <div>
      {rows}
    </div>
  )
}

export default GetResults