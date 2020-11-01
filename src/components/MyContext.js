import React from 'react';

const MyContext = React.createContext();
const DataProvider = MyContext.Provider;
const PutiConsumer = MyContext.Consumer;

export { DataProvider, PutiConsumer };
