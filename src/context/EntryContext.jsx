import { useContext, createContext, useState } from 'react';
const EntriesContext = createContext();

const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    <EntriesContext.Provider value={{ entries, setEntries }}>{children}</EntriesContext.Provider>
  );
};

const useEntries = () => {
  const context = useContext(EntriesContext);

  if (context === undefined) {
    throw new Error('useEntries must be defined within an EntryContext Provider');
  }

  return context;
};

export { EntryProvider, useEntries };
