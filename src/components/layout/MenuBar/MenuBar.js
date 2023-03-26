import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MenuBar = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const action = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className={mobileMenu ? styles.root : styles.rootMobile}>
      <div className='container'>
        <div className={`row align-items-center`}>
          <div className={`col ${styles.search}`}>
            <ProductSearch />
          </div>
          <button onClick={action} className={`col ${styles.bars}`}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={mobileMenu ? 'col-auto ' + styles.menu : styles.menuMobile}>
            <ul>
              <li>
                <NavLink
                  exact
                  to='/'
                  className={isActive => (isActive ? styles.active : undefined)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/shop/bed'
                  className={isActive => (isActive ? styles.active : undefined)}
                >
                  Bed
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/shop/chair'
                  className={isActive => (isActive ? styles.active : undefined)}
                >
                  Chair
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/shop/sofa'
                  className={isActive => (isActive ? styles.active : undefined)}
                >
                  Sofa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/shop/table'
                  className={isActive => (isActive ? styles.active : undefined)}
                >
                  Table
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/shop/dining'
                  className={isActive => (isActive ? styles.active : undefined)}
                >
                  Dining
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/blog'
                  className={isActive => (isActive ? styles.active : undefined)}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;

// import React from 'react';
// import PropTypes from 'prop-types';

// import ProductSearch from '../../features/ProductSearch/ProductSearch';

// import styles from './MenuBar.module.scss';

// const MenuBar = ({ children }) => (
//   <div className={styles.root}>
//     <div className='container'>
//       <div className='row align-items-center'>
//         <div className='col'>
//           <ProductSearch />
//         </div>
//         <div className={'col-auto ' + styles.menu}>
//           <ul>
//             <li>
//               <a href='/' className={styles.active}>
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href='/shop/:categoryId'>Furniture</a>
//             </li>
//             <li>
//               <a href='#'>Chair</a>
//             </li>
//             <li>
//               <a href='#'>Table</a>
//             </li>
//             <li>
//               <a href='#'>Sofa</a>
//             </li>
//             <li>
//               <a href='#'>Bedroom</a>
//             </li>
//             <li>
//               <a href='#'>Blog</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// MenuBar.propTypes = {
//   children: PropTypes.node,
// };

// export default MenuBar;
