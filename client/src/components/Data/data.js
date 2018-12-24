import React from 'react'

export default function Data ({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <div>
      <h4>{mission_name}</h4>
      <p>Date:{launch_date_local}</p>
    </div>
  )
}
