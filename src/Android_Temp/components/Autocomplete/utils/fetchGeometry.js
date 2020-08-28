const geocode = async (place_id) => {
  const results = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${place_id}&key=AIzaSyBYsNPd2KwIac0uD0mkF3iU26ylAw-N_bA`)
  const data = await results.json();
  return(data);
}
export default geocode
