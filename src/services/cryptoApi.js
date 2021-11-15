import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '948ba222bemsh89362b701741a31p15d4bbjsn8acea6fffdba',
  };

 const baseUrl = 'https://coinranking1.p.rapidapi.com/';

  const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

  export const cryptoApi = createApi({
    reducerPath: 'cryptoApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
  });

  export const { useGetCryptosQuery } = cryptoApi;