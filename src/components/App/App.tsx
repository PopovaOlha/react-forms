import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../../pages/Main/Main';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
