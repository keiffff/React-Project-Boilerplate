import React from 'react';
import { action } from '@storybook/addon-actions';
import { css } from '@emotion/core';
import { Button } from '.';

export default {
  component: Button,
  title: 'Button',
};

export const Outlined = () => <Button onClick={action('clicked')}>Hello</Button>;

export const Filled = () => (
  <Button css={customStyle} onClick={action('clicked')}>
    Hello
  </Button>
);

const customStyle = css({
  backgroundColor: 'hotpink',
  color: 'white',
  border: '1px solid transparent',
});
