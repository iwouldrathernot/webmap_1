'use strict'


// debug statement letting us know the file is loaded
console.log('Loaded map.js')


mapboxgl.accessToken = 'pk.eyJ1IjoiaXdvdWxkcmF0aGVybm90IiwiYSI6ImNqbmZpdDhscjA0d24zcXBhOG5pd3RtbDgifQ.ybTlyS6TchYpaEgJqFH8Kg'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-73.96024, 40.80877],
    zoom: 16
})

// create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

// add the scale to your map
map.addControl(scale, 'top-right')

