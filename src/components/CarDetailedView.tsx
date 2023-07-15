import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../Theme';
import Typography from './Typography';

function CarDetailedView() {
  return (
    <View style={styles.card}>
      <Typography variant="title" text="S500 Sedan" />
      <View style={styles.informations}>
        <View style={styles.stars}>
          <Icon name="star" size={16} color="#F2CF63" />
          <Typography variant="body" text="4.9" />
        </View>
        <Typography variant="carDetail" text="(230 Reviews)" />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/img/cars/mercedes/S500-sedan.png')}
          accessibilityLabel=""
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: `${colors.lightGray}`,
    borderBottomEndRadius: 30,
    gap: 12,
  },
  informations: {
    flexDirection: 'row',
    gap: 12,
  },
  stars: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 180,
  },
});

export default CarDetailedView;
