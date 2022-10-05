import './App.css';
import Layout from './components/Layout';
import Listas from './components/Listas';
import Registros from './components/Registros';
import AppContext from './context/AppContext';
import useApi from './hooks/useApi';

function App() {
  const initialState = useApi();
  return (
    <AppContext.Provider value={initialState}>
      <div className="App">
        <Layout>
          <Listas/>
          <Registros/>      
        </Layout>
      </div>
    </AppContext.Provider>
  );
}

export default App;
