import React from 'react';

const Logout = ({onRouteChange}) => {
    return ( 
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
      </nav>
     );
}
 
export default Logout;