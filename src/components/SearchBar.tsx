import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../Theme';

interface SearchBarProps {
  value: string;
  handleChange: any;
}

function SearchBar({value, handleChange}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name="search1" size={24} color={`${colors.black}`} />
      </View>
      <TextInput
        value={value}
        keyboardType="web-search"
        onChange={handleChange}
        placeholder="Search"
        style={styles.input}
        placeholderTextColor={`${colors.gray}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: `${colors.white}`,
    borderRadius: 20,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 12,
    paddingVertical: 12,
    height: 48,
    width: 250,
  },
  icon: {
    paddingVertical: 12,
    height: 48,
  },
  input: {
    backgroundColor: `${colors.white}`,
    borderRadius: 20,
    color: `${colors.black}`,
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: 14,
    height: 48,
  },
});

export default SearchBar;
