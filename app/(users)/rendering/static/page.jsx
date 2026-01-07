import React from 'react'
import db from "@/config/db";

export const dynamic = "force-static";


const StaticPage = async () => {
    const [doctors] = await db.execute("select * from doctors");
    console.log("Static doctors");

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
