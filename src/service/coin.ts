import { ICoinCardData } from 'components/CoinCard';
import { STATUS } from 'enum';
import { ICoinModel } from 'models/coin';
import { baseApi } from './base';

export const coinsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchCoins: builder.query<ICoinCardData[], void>({
      query: () => '/coins',
      transformResponse: (response: ICoinModel[]) => {
        const coins: ICoinCardData[] = response.map(coin => ({
          id: coin.id,
          expiryDate: coin.createdTimestamp + 3 * (coin.leaseEnd - coin.blockNumber),
          name: coin.symbol,
          status: STATUS[coin.status] as keyof typeof STATUS,
        }))

        return coins;
      },
    }),
    fetchCoinLogo: builder.query<string | undefined, number>({
      queryFn: (id) => {
        return new Promise((resolve) => {
          setTimeout(() => resolve({
            data: id % 2 === 0 ? 'https://via.placeholder.com/70' : undefined
          }), 2500);
        })
      }
    }),
    fetchCoinPrice: builder.query<number, number>({
      queryFn: (id) => {
        return new Promise((resolve) => {
          setTimeout(() => resolve({
            data: id * (Math.floor(Math.random() * 10001))
          }), 2500);
        })
      }
    })
  })
});

export const { useFetchCoinsQuery, useFetchCoinLogoQuery, useFetchCoinPriceQuery } = coinsApi;