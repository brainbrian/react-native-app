const cities = {
  Austin: {
    name: 'Austin',
    country: 'USA',
    locations: [],
  },
  Milwaukee: {
    name: 'Milwaukee',
    country: 'USA',
    locations: []
  },
  Seattle: {
    name: 'Seattle',
    country: 'USA',
    locations: []
  },
}

const getData = () => new Promise(resolve => {
  return setTimeout(() => {
    resolve(cities);
  }, 2500);
});

export default getData;
