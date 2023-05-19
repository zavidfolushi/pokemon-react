import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { pokemonApi } from './pokemon/pokemon.api';
import pokemonSlice from './pokemon/pokemonSlice';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    pokemonSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

