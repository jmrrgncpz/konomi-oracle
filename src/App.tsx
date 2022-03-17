import './App.sass';

import { useFetchCoinsQuery } from "./service/coin";
import OracleIcon from "./components/icons/OracleIcon";
import CoinCard from 'components/CoinCard';

const App = () => {
  const { data, isLoading, isFetching } = useFetchCoinsQuery();
  return (
    <div className="App">
      <div className="container">
        <div id="coin-grid-header">
          <OracleIcon />
          <h2 className='text-primary'>Oracle</h2>
        </div>
        <div id="coin-grid">
          {
            data ? data.map((coinCardProps) => <CoinCard {...coinCardProps} />) : <div></div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
