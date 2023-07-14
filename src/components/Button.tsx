import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../Theme';

interface ButtonProps {
  variant: 'solid' | 'outlined' | 'text';
  text: string;
  handlePress: any;
}

function Button({variant, text, handlePress}: ButtonProps) {
  return (
    <>
      {variant === 'solid' ? (
        <TouchableOpacity onPress={handlePress} style={styles.solidButton}>
          <Text style={styles.solidText}>{text}</Text>
        </TouchableOpacity>
      ) : variant === 'outlined' ? (
        <TouchableOpacity onPress={handlePress} style={styles.outlinedButton}>
          <Text style={styles.outlinedText}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handlePress} style={styles.textButton}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  solidButton: {
    backgroundColor: `${colors.primaryColor}`,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  outlinedButton: {
    backgroundColor: 'transparent',
    borderColor: `${colors.primaryColor}`,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textButton: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  solidText: {
    color: `${colors.white}`,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
  },
  outlinedText: {
    color: `${colors.primaryColor}`,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    color: `${colors.black}`,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
  },
});

export default Button;
