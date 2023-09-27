# Day29hall-booking

addRoom:

This POST method will add a new room

{
  "id": 6,
  "name": "room6",
  "seats": "500",
  "amenities": [
    "AC",
    "Projector",
    "Speaker"
  ],
  "price": "500/hr"
}

getrooms:

This GET method will show all the rooms

getBookings:

This GET method will show all the Room bookings

listofrooms:

This GET method will show all rooms with Booked data

listofcustomer:

This GET method will list all the customers with booked data

addBooking:

This POST method will add new Booking and it will not book the room if its already booked

{
  "name": "vivek",
  "date": "24-01-2022",
  "start": "08:00",
  "end": "16:00",
  "id": 4
}

Home:
Home page API
