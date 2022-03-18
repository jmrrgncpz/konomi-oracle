import './App.sass';

import { useFetchCoinsQuery } from "./service/coin";
import OracleIcon from "./components/icons/OracleIcon";
import CoinCard from 'components/CoinCard';
import { useCallback, useState } from 'react';

const App = () => {
  const [selectedCoinId, setSelectedCoinId] = useState<number | null>(null)
  const { data: coins } = useFetchCoinsQuery();
  const handleCoinCardClick = useCallback((id) => {
    if (selectedCoinId === id) {
      setSelectedCoinId(null);
    } else {
      setSelectedCoinId(id);
    }
  }, [setSelectedCoinId, selectedCoinId])

  return (
    <div className="App">
      <div className="container">
        <div id="coin-grid-header">
          <OracleIcon />
          <h2 className='text-primary'>Oracle</h2>
        </div>
        <div id="coin-grid">
          {
            coins
            && coins.map(coinCardProps =>
              <CoinCard
                {...coinCardProps}
                onClick={handleCoinCardClick}
                isActive={selectedCoinId === coinCardProps.id}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
