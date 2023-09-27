
import { rooms } from "./routes/endpoints.js";

import dotenv from "dotenv";
import express from "express";

dotenv.config();

export const app = express();

const port=process.env.PORT;

export const room=[
  {
    "id": 1,
    "name": "room1",
    "seats": "200",
    "amenities": ["Speaker", "Stage", "Wifi"],
    "price": "100/hr"
  },
  {
    "id": 2,
    "name": "room2",
    "seats": "100",
    "amenities": ["AC", "Wifi", "RestRoom"],
    "price": "150/hr"
  },
  {
    "id": 3,
    "name": "room3",
    "seats": "50",
    "amenities": ["Projector", "AC", "Wifi"],
    "price": "500/hr"
  },
  {
    "id": 4,
    "name": "room4",
    "seats": "150",
    "amenities": ["AC", "Projector", "Speaker"],
    "price": "100/hr"
  }
];

 export const booking=[
  {
    "b_id": 301,
    "name": "Eva",
    "date": "28-01-2022",
    "start": "12:00",
    "end": "20:00",
    "status": "booked",
    "id": 9
  },
  {
    "b_id": 302,
    "name": "Frank",
    "date": "29-01-2022",
    "start": "12:30",
    "end": "20:30",
    "status": "booked",
    "id": 10
  },
  {
    "b_id": 303,
    "name": "Grace",
    "date": "30-01-2022",
    "start": "13:00",
    "end": "21:00",
    "status": "booked",
    "id": 11
  },
  {
    "b_id": 304,
    "name": "Henry",
    "date": "31-01-2022",
    "start": "13:30",
    "end": "21:30",
    "status": "booked",
    "id": 12
  },
  {
    "b_id": 305,
    "name": "Ivy",
    "date": "01-02-2022",
    "start": "14:00",
    "end": "22:00",
    "status": "booked",
    "id": 13
  },
  {
    "b_id": 306,
    "name": "Jack",
    "date": "02-02-2022",
    "start": "14:30",
    "end": "22:30",
    "status": "booked",
    "id": 14
  }
]
;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Hall Booking! 🏛️📅')
});

app.use("/rooms",rooms);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
