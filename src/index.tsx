import React from 'react';
import { ActivityIndicator, withTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const DisplayLoading: React.FC = () => {
  return (
    <ActivityIndicator
      animating={true}
      size='large'
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default withTheme(DisplayLoading);
