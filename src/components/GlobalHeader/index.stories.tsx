import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalHeader } from '.';

export default {
  component: GlobalHeader,
  title: 'GlobalHeader',
};

export const basic = () => (
  <BrowserRouter>
    <GlobalHeader />
  </BrowserRouter>
);
