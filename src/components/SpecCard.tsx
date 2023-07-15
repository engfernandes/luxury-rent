import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../Theme';
import Typography from './Typography';

interface SpecCardProps {
  title: string;
  detail: string;
}

function SpecCard({title, detail}: SpecCardProps) {
  return (
    <View style={styles.card}>
      <Typography variant="specTitle" text={title} />
      <Typography variant="caption" text={detail} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: `${colors.white}`,
    borderColor: `${colors.gray}`,
    borderRadius: 10,
    borderWidth: 1,
    gap: 4,
    marginRight: 8,
    padding: 8,
    width: 124,
  },
});

export default SpecCard;
