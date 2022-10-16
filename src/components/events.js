import React from 'react'

const Events = ({ events }) => {
  return (
    <div>
      <center><h1>Event List</h1></center>
      {events.map((event) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{event.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{event.title}</h6>
            <p class="card-text">{event.resourceId}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Events