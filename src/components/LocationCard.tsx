import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../Theme';
import Typography from './Typography';

interface LocationCardProps {
  location: string;
}

function LocationCard({location}: LocationCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="location-on" size={24} color={`${colors.black}`} />
      <Typography
        variant="body"
        text={
          location.length > 42 ? location.substring(0, 39) + '...' : location
        }
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: `${colors.gray}`,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    height: 40,
    padding: 8,
  },
});

export default LocationCard;
