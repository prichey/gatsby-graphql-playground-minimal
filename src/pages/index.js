import React from 'react';
import { Provider } from 'react-redux';
import { Playground, store } from 'graphql-playground-react';

export default function Home() {
  return (
    <Provider store={store}>
      <Playground endpoint="https://api.graph.cool/simple/v1/swapi" />
    </Provider>
  );
}
