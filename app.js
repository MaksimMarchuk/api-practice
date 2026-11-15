const list = document.getElementById("api-div");
fetch('events.json')
    .then(response => response.json())
    .then(mass => {
        mass.forEach(element => {
            list.innerHTML += `
                <div class="card-div">
                    <img src="${element.poster}" alt="${element.event}">
                    <h3 class="event-title">${element.event}</h3>
                    <p class="event-date">${element.date}</p>
                    <p class="event-location">${element.location}</p>
                </div>
            `;
        });
    })