import React from "react";
import { Link } from 'react-router-dom';
import '../css/page-not-found.css';

const PageNotFound = (props) => {
  return (
    <div>
      <main className="pnf text-center pnf-bg-color">
        <h1>
          <span className="glitch" data-text="404">
            404 PAGE NOT FOUND!
            <Link to="/home" className="alert-link center"> Go Home.</Link>
          </span>
        </h1>
      </main>
    </div>
  );
};

export default PageNotFound;
