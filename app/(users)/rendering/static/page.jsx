import React from 'react'
import db from "@/config/db";

export const revalidate = 30; // Revalidate every 60 seconds

const StaticPage = async () => {
    const [doctors] = await db.execute("select * from doctors");
    console.log("Static doctors");

  return (
  <>
    <ul>
      {doctors.map((doctor) => (
        <li key={doctor.doctor_id}>{doctor.first_name}</li>
      ))}
    </ul>
  </>
);
}

export default StaticPage
