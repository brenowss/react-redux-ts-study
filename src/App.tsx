import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from './components/button';
import { actionCreators, State } from './state';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);

  return (
    <div id="app">
      <h1 id="total">{amount}</h1>
      <Button title="Deposit 5" callback={() => depositMoney(5)} />
      <Button title="Withdraw 5" callback={() => withdrawMoney(5)} />
      <Button title="Go Bankrupt" callback={() => bankrupt()} />
    </div>
  );
}

export default App;
