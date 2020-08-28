const predictions = async (searchTerm) => {
  const handledSearchTerm = searchTerm.split(' ').join('+')
  const results = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${handledSearchTerm}&types=geocode&language=pt&key=AIzaSyBYsNPd2KwIac0uD0mkF3iU26ylAw-N_bA`)
  const data = await results.json();
  return(data);
}
export default predictions
