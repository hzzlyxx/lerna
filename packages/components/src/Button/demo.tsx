import React from 'react';

import Button from './index';
import './style/index';

const demo = () => {
  return (
    <>
      <Button>Primary Button</Button>
      <Button className="disabled">disabled</Button>
    </>
  );
};

export default demo;
