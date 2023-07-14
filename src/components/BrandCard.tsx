import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../Theme';
import Typography from './Typography';

interface BrandCardProps {
  brandLogo: ImageSourcePropType;
  brandName: string;
  quantity: number;
}

function BrandCard({brandLogo, brandName, quantity}: BrandCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={brandLogo}
        accessibilityLabel={brandName}
        style={styles.logo}
      />
      <Typography variant="body" text={brandName} />
      <Text style={styles.quantity}>{`+${quantity}`}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: `${colors.white}`,
    borderRadius: 20,
    gap: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 87,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  logo: {
    height: 50,
    resizeMode: 'contain',
    width: 66,
  },
  quantity: {
    color: `${colors.primaryColor}`,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '700',
  },
});

export default BrandCard;
