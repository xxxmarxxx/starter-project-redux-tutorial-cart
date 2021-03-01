import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// store - przechowuje dane, myśl o stanie
// reducer - function that used to update store
// reducer - funkcja, która służy do aktualizacji sklepu
// two arguments - state, action
// dwa argumenty - stan, akcja
// state -old state/state what update
// stan - stary stan/stan co aktualizować
// return upadated or old state
// zwróć zaktualizowany lub stary stan

import { createStore } from "redux";
// dispatch method - send actions to the store
// dispatch method - send actions to the store
// actions (objects) - MUST HAVE TYPE PROPERTY -what kind of action
// akcje (obiekty) - MUSZĄ MIEĆ WŁASNOŚĆ TYPU - jaki rodzaj akcji
// DON'T MUTATE THE STATE - redux build on IMMUTABILITY (copy)
// don't mutate the state - redux build on immutability (copy)
import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducer";
// initial store
const initialStore = {
  count: 0,
  name: "john",
};

// reducer

// store.getState()
const store = createStore(reducer, initialStore);
store.dispatch({ type: DECREASE });

store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: INCREASE });
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
