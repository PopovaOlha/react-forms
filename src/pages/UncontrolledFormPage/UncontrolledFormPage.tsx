import React from 'react';
import { Link } from 'react-router-dom';
import UncontrolledForm from '../../components/UncontrolledForm/UncontrolledForm';

const UncontrolledFormPage: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Back to Main</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div>
          <UncontrolledForm />
        </div>
      </main>
    </>
  );
};

export default UncontrolledFormPage;
