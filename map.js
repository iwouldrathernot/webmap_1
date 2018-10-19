'use strict'


// debug statement letting us know the file is loaded
console.log('Loaded map.js')


mapboxgl.accessToken = 'pk.eyJ1IjoiaXdvdWxkcmF0aGVybm90IiwiYSI6ImNqbmZpdDhscjA0d24zcXBhOG5pd3RtbDgifQ.ybTlyS6TchYpaEgJqFH8Kg'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v10', 
    center: [-73.96024, 40.80877],
    zoom: 10.5
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
map.addControl(scale, 'bottom-right')

map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat

    console.log("clicked:", lng, lat)

    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})

// here's me creating an array for the various popups I want to use

let data = [
{
	location: [-73.95945,40.80813],
	content: '<b>421 W. 118th St.</b>: Residence of "<i>John Kerouac, twenty-three, <br>a merchant seaman and former Columbia student</i>," <br>who is arrested on August 17th, 1944 as <br>a possible witness to the murder.<br /><img src="https://i0.wp.com/pleasekillme.com/wp-content/uploads/2017/09/Jack-Kerouac-mugshot-750-e1514305281543.jpg" />'
},

{	location: [-74.00553,40.73067],
	content: '<b>48 Morton St.</b>: Residence of David Kammerer at the time of his death.<br /><img src="https://i0.wp.com/www.jenniferberube.com/wp-content/uploads/2011/03/david-kammerer.jpg" />'
},

{	location: [-73.97303,40.80514],
	content: '<b>Hudson River at 108th St.</b>: The Coast Guard reports seeing a floating corpse, <br>later identified as that of David Kammerer, on the afternoon of August 16, 1944.'
},

{	location: [-73.96860,40.80897],
	content: '<b>Riverside Drive embankment at 115th St.</b>: around 3 AM on August 14th, <br>Lucien Carr stabs David Kammerer to death and throws his body <br>into the Hudson River.<br/ ><img src="http://murderpedia.org/male.C/images/carr_lucien/carr001.gif" />'
},

{	location: [-74.00485,40.73120],
	content: '<b>69 Bedford St.</b>: Home of William S. Burroughs. Carr visited Burroughs <br>immediately after killing Kammerer, giving him a packet of cigarettes <br>stained with blood; Burroughs flushed them down the toilet. <br>He was arrested a few days later as a witness to the murder.<br /><img src="https://images.gr-assets.com/authors/1459243207p8/4462369.jpg" />'
},

{	location: [-74.00118,40.71580],
	content: '<b>Office of New York District Attorney</b>: Lucien Carr turns himself in <br>for the murder of David Kammerer on August 15, 1944.'
},

{	location: [-73.95913,40.80534],
	content: '<b>Somewhere in Morningside Park</b>: Lucien Carr, with assistance <br>from Jack Kerouac and possibly another friend, buries the glasses <br>of David Kammerer early in the morning of August 15, 1944. <br>(<i>Picture, c. 1943-44, shows Carr, Kammerer, and Kerouac.</i>)<br /><img src="https://i.pinimg.com/originals/a1/21/3e/a1213e0dd68bcc11a99368c629a58f15.jpg" />'
},



]

// and here's where I create a new marker and popup for each one:

data.forEach(function(d) {

	let marker = new mapboxgl.Marker()
	marker.setLngLat(d.location)
	marker.addTo(map)

	let popup = new mapboxgl.Popup()
	popup.setHTML(d.content)
	marker.setPopup(popup)
	
})