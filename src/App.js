import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Country from './Country';
import Global from './Global';
import Header from './Header';
import Loading from './Loading';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios.get(`https://api.covid19api.com/summary`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Router>
        {loading ? <Loading /> : <Global data={data} />}
        <Switch>
          <Route path='/:country'>
            {loading ? <Loading /> : <Country data={data} />}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
