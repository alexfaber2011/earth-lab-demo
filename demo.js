const getCounties = async () => {
  const response = await fetch('./washington_counties.json');
  return response.json();
}

const init = async () => {
  const map = L.map('map').setView([47.6, -121.0], 7);
  const counties = await getCounties();
  L.geoJson(counties, {
    style: () => { 
      return { color: `rgba(255, 50, 10, ${Math.random()})`  }
    }
  }).addTo(map);
};

window.onload = init;
