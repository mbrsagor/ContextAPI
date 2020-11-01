import React from "react";
import Son from './components/Son';
import { DataProvider } from './components/MyContext';

export default function App() {
  return (
    <>
      <h2>Welcome to hook</h2>
      <DataProvider value="Data send message to puti">
        <Son/>
      </DataProvider>
    </>
  );
}
