import React, { useState } from 'react';

const autocomplete = () => {
  const [latLng, setLatLng] = useState()
  const input = document.getElementById('autocomplete')
  let autocomplete = new window.google.maps.places.Autocomplete(input, {types: ['(regions)']})
  window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
    let place = autocomplete.getPlace()
    let nLatLng = [place.geometry.location.lat(), place.geometry.location.lng()]
    setLatLng(nLatLng)
  })
  return (
    <div>

    </div>
  )
}

export default autocomplete