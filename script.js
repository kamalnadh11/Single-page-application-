const distributors = [
  {
    name: 'Distributor A',
    shippedLastMonth: 1500,
    forecastedThisMonth: 1800,
    yearToDateAverage: 1200,
    // Add more fields as needed
  },
  {
    name: 'Distributor B',
    shippedLastMonth: 2200,
    forecastedThisMonth: 2400,
    yearToDateAverage: 2000,
    // Add more fields as needed
  },
  // Add more distributor data as needed
];

const distributorListElement = document.getElementById('distributorList');

distributors.forEach((distributor) => {
  const distributorCard = document.createElement('div');
  distributorCard.className = 'distributor-card';
  distributorCard.innerHTML = `
    <h3>${distributor.name}</h3>
    <p>Last Month's Shipped: ${distributor.shippedLastMonth}</p>
    <p>Forecasted This Month: ${distributor.forecastedThisMonth}</p>
    <p>Year-to-Date Average: ${distributor.yearToDateAverage}</p>
  `;

  distributorListElement.appendChild(distributorCard);
});
