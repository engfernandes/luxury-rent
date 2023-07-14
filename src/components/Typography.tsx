import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../Theme';

interface TypographyProps {
  variant: 'title' | 'body' | 'caption' | 'carTitle' | 'carDetail';
  text: string;
}

function Typography({variant, text}: TypographyProps) {
  return (
    <>
      {variant === 'title' ? (
        <Text style={styles.title}>{text}</Text>
      ) : variant === 'body' ? (
        <Text style={styles.body}>{text}</Text>
      ) : variant === 'caption' ? (
        <Text style={styles.caption}>{text}</Text>
      ) : variant === 'carTitle' ? (
        <Text style={styles.carTitle}>{text}</Text>
      ) : (
        <Text style={styles.carDetail}>{text}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: `${colors.black}`,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '700',
  },
  body: {
    color: `${colors.black}`,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
  },
  caption: {
    color: `${colors.black}`,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '300',
  },
  carTitle: {
    color: `${colors.black}`,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
  carDetail: {
    color: `${colors.gray}`,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default Typography;
