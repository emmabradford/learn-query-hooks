//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState('planets');
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1> Battalla en los estreyas </h1>
        <Navbar setPage={setPage}/>
        <div className="content">
          {page === 'planets'?<Planets />:<People />};
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
