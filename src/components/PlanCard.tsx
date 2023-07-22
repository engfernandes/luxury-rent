import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../Theme';

interface PlanCardProps {
  type: 'hour' | 'daily';
  active: boolean;
  title?: string;
  detail?: string;
  price: string;
}

function PlanCard({type, active, title, detail, price}: PlanCardProps) {
  if (type === 'hour') {
    title = 'Hourly Rent';
    detail = 'Best for business appointments';
  }
  if (type === 'daily') {
    title = 'Daily Rent';
    detail = 'Best for travel';
  }

  const deactivatedStyles = active === false ? styles.deactivated : null;

  return (
    <TouchableOpacity
      style={[
        active === false
          ? [styles.card, {borderColor: `${colors.gray}`}]
          : styles.card,
      ]}>
      <View
        style={[
          active === false
            ? [styles.iconContainer, {backgroundColor: `${colors.lightGray}`}]
            : styles.iconContainer,
        ]}>
        <Icon
          name={type === 'hour' ? 'access-time' : 'calendar-today'}
          size={24}
          style={[styles.icon, deactivatedStyles]}
        />
        <Text style={[styles.price, deactivatedStyles]}>{price}</Text>
      </View>
      <View style={[styles.textContainer, deactivatedStyles]}>
        <Text style={[styles.title, deactivatedStyles]}>{title}</Text>
        <Text style={[styles.details, deactivatedStyles]}>{detail}</Text>
      </View>
    </TouchableOpacity>
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
    marginRight: 8,
    width: 180,
  },
  iconContainer: {
    alignItems: 'center',
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: `${colors.contrastBlue}`,
    gap: 4,
    height: 76,
    justifyContent: 'center',
    width: 44,
  },
  icon: {
    color: `${colors.primaryColor}`,
  },
  price: {
    color: `${colors.primaryColor}`,
  },
  textContainer: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '700',
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
  deactivated: {
    borderColor: `${colors.gray}`,
    color: `${colors.gray}`,
  },
});

export default PlanCard;
