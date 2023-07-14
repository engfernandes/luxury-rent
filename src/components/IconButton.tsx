import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../Theme';

interface IconButtonProps {
  iconName: string;
  handlePress: any;
}

function IconButton({iconName, handlePress}: IconButtonProps) {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Icon name={iconName} size={24} color={`${colors.black}`} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: `${colors.white}`,
    borderRadius: 20,
    height: 48,
    padding: 12,
    width: 48,
  },
});

export default IconButton;
