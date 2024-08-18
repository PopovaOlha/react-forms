import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../../pages/Main/Main';
import UncontrolledFormPage from '../../pages/UncontrolledFormPage/UncontrolledFormPage';
import ControlledFormPage from '../../pages/ControlledFormPage/ControlledFormPage';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/uncontrolled" element={<UncontrolledFormPage />} />
          <Route path="/controlled" element={<ControlledFormPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
