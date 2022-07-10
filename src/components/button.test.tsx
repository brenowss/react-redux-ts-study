import React from 'react';
import {
  fireEvent,
  getByText,
  queryByAttribute,
  render,
  screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import Button from './button';
import App from '../App';
import { store } from '../state';

const getById = queryByAttribute.bind(null, 'id');

describe('button component', () => {
  test('button displays passed title', () => {
    const testTitle = 'test title';

    render(
      <Button title={testTitle} callback={() => console.log('testing')} />
    );

    const linkElement = screen.getByText(testTitle);
    expect(linkElement).toBeInTheDocument();
  });

  test('predefined buttons are rendered', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const depositButton = screen.getByText('Deposit 5');
    const withdrawButton = screen.getByText('Withdraw 5');
    const bankruptButton = screen.getByText('Go Bankrupt');

    const buttons = [depositButton, withdrawButton, bankruptButton];

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  test('deposit button increases total by 5', () => {
    const dom = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(screen.getByText('Deposit 5'));
    const totalAmount = getById(dom.container, 'total');
    expect(totalAmount).toHaveTextContent('5');
  });

  test('withdraw button decreases total by 5', () => {
    const dom = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(screen.getByText('Withdraw 5'));
    const totalAmount = getById(dom.container, 'total');
    expect(totalAmount).toHaveTextContent('0');
  });

  test('bankrupt button resets total amount to 0', () => {
    const dom = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(screen.getByText('Deposit 5'));
    fireEvent.click(screen.getByText('Go Bankrupt'));
    const totalAmount = getById(dom.container, 'total');
    expect(totalAmount).toHaveTextContent('0');
  });
});
