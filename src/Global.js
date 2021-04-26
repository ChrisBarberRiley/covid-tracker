function Global({ data: { Global } }) {
  return (
    <div>
      <small>Date updated: {Global.Date}</small>
      <p>New confirmed cases: {Global.NewConfirmed}</p>
      <p>New confirmed deaths: {Global.NewDeaths}</p>
      <p>Total cases: {Global.TotalConfirmed}</p>
      <p>Total deaths: {Global.TotalDeaths}</p>
      <p>New Recovered: {Global.NewRecovered}</p>
      <p>Total Recovered: {Global.TotalRecovered}</p>
    </div>
  );
}

export default Global;
