import React from 'react'
import {db} from "../../../consfig/db"

const StaticPage = async () => {
    const [doctors] = await db.execute("select * from doctors");
    console.log(doctors);

  return (
  <>
    <ul>
      {doctors.map((doctor) => (
        <li key={doctor.doctor_id}>{doctor.name}</li>
      ))}
    </ul>
  </>
);
}

export default StaticPage
