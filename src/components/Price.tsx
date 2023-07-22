import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Typography from './Typography';

interface PriceProps {
  value: string;
  type: 'hour' | 'daily';
}

function Price({value, type}: PriceProps) {
  return (
    <View style={styles.container}>
      <Typography variant="title" text={value} />
      <Text style={styles.subtle}>/ {type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  subtle: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default Price;
