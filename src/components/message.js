import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

const Message = ({variant, children}) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};
export default Message;
