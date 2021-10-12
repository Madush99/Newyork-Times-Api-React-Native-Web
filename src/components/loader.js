import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Loader = () => {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="40px" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '100px',
  },
});

export default Loader;
