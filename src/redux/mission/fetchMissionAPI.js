const fetchMissions = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const responseJSON = await response.json();
  return responseJSON;
};

export default fetchMissions;
