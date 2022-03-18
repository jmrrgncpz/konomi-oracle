import { CoinCardProps } from 'components/CoinCard';
import { STATUS } from 'enum';
import { ICoinModel } from 'models/coin';
import { baseApi } from './base';

export const coinsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchCoins: builder.query<CoinCardProps[], void>({
      query: () => '/coins',
      transformResponse: (response: ICoinModel[]) => {
        const coins: CoinCardProps[] = response.map(coin => ({
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
        return {
          data: id % 2 === 0 ? 'https://via.placeholder.com/70' : undefined
        }
      }
    })
  })
});

export const { useFetchCoinsQuery, useFetchCoinLogoQuery } = coinsApi;