import React from 'react';

import { Container, Input, Button, Text, Break } from './styles/opt-form';

export default function OptFlorm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptFlorm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptFlorm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptFlorm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptFlorm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
