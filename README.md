# Day29hall-booking

https://hall-booking-v1rc.onrender.com/

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
  "name": "Ivy",
  "date": "01-02-2022",
  "start": "14:00",
  "end": "22:00",
  "status": "booked",
  "id": 13
}

Home:
Home page API
