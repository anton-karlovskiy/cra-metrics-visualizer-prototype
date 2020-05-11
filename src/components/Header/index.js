
import React, { memo } from 'react';

import ProductLogoTitle from './ProductLogoTitle';
import Navbar from './Navbar';
import './header.css';

const Header = () => (
  <header>
    <ProductLogoTitle />
    <Navbar />
  </header>
);

export default memo(Header);
