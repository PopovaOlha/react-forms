import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../../pages/Main/Main';
import UncontrolledForm from '../UncontrolledForm/UncontrolledForm';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/uncontrolled" element={<UncontrolledForm />} />
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
