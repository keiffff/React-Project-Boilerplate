import React from 'react';
import { css } from '@emotion/core';

export const Hello = () => <h1 css={baseStyle}>Hello, World!</h1>;

const baseStyle = css({
  margin: 0,
  fontSize: 32,
  background: 'linear-gradient(to right, #fc00ff, #00dbde)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});
