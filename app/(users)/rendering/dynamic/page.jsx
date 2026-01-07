import React from 'react'
import db from "@/config/db";

export const dynamic = "force-dynamic";


const DynamicPage = async () => {
    const [doctors] = await db.execute("select * from doctors");
    console.log("Dynamic doctors");

    

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

export default DynamicPage
