import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Global from './Global';
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

  return <>{loading ? <Loading /> : <Global data={data} />}</>;
}

export default App;
