import React from 'react';
import { queryByAttribute, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './state';

const getById = queryByAttribute.bind(null, 'id');

describe('total amount', () => {
  test('total is displayed', () => {
    const dom = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const totalAmount = getById(dom.container, 'total');
    expect(totalAmount).toBeInTheDocument();
  });

  test('total starts as 0', () => {
    const dom = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const totalAmount = getById(dom.container, 'total');
    expect(totalAmount).toHaveTextContent('0');
  });
});
