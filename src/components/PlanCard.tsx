import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../Theme';

interface PlanCardProps {
  type: 'hour' | 'daily';
  active: boolean;
  title: string;
  detail: string;
  price: string;
}

function PlanCard({type, active, title, detail, price}: PlanCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon name="access-time" size={24} color={`${colors.primaryColor}`} />
        <Text>$80</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Hourly Rent</Text>
        <Text style={styles.details}>Best for business appointments</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: `${colors.white}`,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: `${colors.primaryColor}`,
    flexDirection: 'row',
    gap: 8,
    height: 80,
    width: 180,
  },
  iconContainer: {
    alignItems: 'center',
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: `${colors.contrastBlue}`,
    height: 76,
    justifyContent: 'center',
    width: 44,
  },
  textContainer: {
    gap: 4,
  },
  title: {
    color: `${colors.black}`,
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '700',
    maxWidth: 93,
  },
  details: {
    color: `${colors.darkGray}`,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    height: 28,
    width: 94,
  },
});

export default PlanCard;
