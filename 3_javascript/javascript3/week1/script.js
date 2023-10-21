fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const instrumentList = document.getElementById('instrument-list');

    data.instruments.forEach(instrument => {
      const instrumentCard = document.createElement('div');
      instrumentCard.classList.add('instrument-card');

      instrumentCard.innerHTML = `
        <h2>${instrument.name}</h2>
        <p><strong>Type:</strong> ${instrument.type}</p>
        <p><strong>Origin:</strong> ${instrument.origin}</p>
        <p><strong>Description:</strong> ${instrument.description}</p>
      `;

      instrumentList.appendChild(instrumentCard);
    });
  });
