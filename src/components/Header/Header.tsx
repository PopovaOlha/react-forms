import * as React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/uncontrolled">Uncontrolled Form</Link>
            </li>
            <li>
              <Link to="/controlled">Controlled Form</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
