import { useFetchCoinsQuery } from "./service/coin";

const App = () => {
  const { data, isLoading, isFetching } = useFetchCoinsQuery();
  return (
    <div className="App">
    </div>
  );
}

export default App;
