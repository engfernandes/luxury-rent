import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {colors} from '../Theme';
import Button from './Button';
import Typography from './Typography';

interface CarCardProps {
  carImage: ImageSourcePropType;
  carName: string;
  transmissionType: string;
  seatsNumber: number;
  fuelType: string;
}

function CarCard({
  carImage,
  carName,
  transmissionType,
  seatsNumber,
  fuelType,
}: CarCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={carImage}
        accessibilityLabel={carName}
        style={styles.image}
      />
      <View style={styles.mainContainer}>
        <Typography variant="carTitle" text={carName} />
      </View>
      <View style={styles.detailsContainer}>
        <Typography variant="carDetail" text={transmissionType} />
        <Typography variant="carDetail" text="|" />
        <Typography variant="carDetail" text={`${seatsNumber} seats`} />
        <Typography variant="carDetail" text="|" />
        <Typography variant="carDetail" text={fuelType} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button variant="solid" text="Rent Now" handlePress={undefined} />
        <Button variant="outlined" text="Detail" handlePress={undefined} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: `${colors.white}`,
    borderRadius: 20,
    gap: 24,
    paddingBottom: 12,
    paddingHorizontal: 16,
    paddingTop: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  mainContainer: {
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 200,
    position: 'absolute',
    resizeMode: 'contain',
    right: -35,
    top: -30,
  },
  detailsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
});

export default CarCard;
