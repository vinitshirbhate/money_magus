import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './Components/Main';
import { Dashboard } from './Components/Dashboard';
import { FinancialOverview } from './Components/FinancialOverview';
import { DataAnalysis } from './Components/DataAnalysis';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/financial' element={<FinancialOverview />}></Route>
          <Route path='/dataAnalysis' element={<DataAnalysis />}></Route>
        </Route>

      </Routes>


    </div>
  );
}

export default App;
