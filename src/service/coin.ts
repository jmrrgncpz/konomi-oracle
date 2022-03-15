import { ICoin } from '../models/coin';
import { baseApi } from './base';

export const coinsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchCoins: builder.query<ICoin[], void>({
      query: () => '/coins',
    }),
  })
});

export const { useFetchCoinsQuery } = coinsApi;