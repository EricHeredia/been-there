import React, { useState } from 'react';
import './App.css';
import RestarauntRow from './components/RestarauntRow'
//import GetResults from './components/GetResults';

const App = () => {

  //const [latLng, setLatLng] = useState([41.7962928, -88.19741479999999])

  const input = document.getElementById('autocomplete')
  const autocomplete = new window.google.maps.places.Autocomplete(input, 
    {types: ['(regions)'], componentRestrictions: {country: 'US'}})

  autocomplete.addListener('place_changed', () => {
    let place = autocomplete.getPlace()

    if (!place.geometry) {
      // Not needed atm
      return
    }

    let latLng = [place.geometry.location.lat(), place.geometry.location.lng()]
    getResults(latLng)
    //setLatLng(latLng)
  })

 

// This is a test!





const getResults = (latLng) => {

//const [rows, setRows] = useState()

  let mylocation = new window.google.maps.LatLng(latLng[0], latLng[1]);
  const radius = 2000;

  let requestObj = {
    location: mylocation,
    radius: radius,
    type: [ 'restaurant' ],
  };

  const service = new window.google.maps.places.PlacesService(document.getElementById('google-data'));

    let rowContainer = []

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

      //setRows(rowContainer)
    })









    

  }





console.log(rowContainer)
console.log('app.js')
  return (
    <div className="App">
      {rowContainer}
    </div>
  );
}

export default App;
