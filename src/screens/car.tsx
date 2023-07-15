import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import CarDetailedView from '../components/CarDetailedView';
import IconButton from '../components/IconButton';
import SpecCard from '../components/SpecCard';
import Typography from '../components/Typography';
import {colors} from '../Theme';

function Car() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.main}>
        <View style={styles.top}>
          <IconButton iconName="arrow-back" handlePress={undefined} />
          <IconButton iconName="favorite-outline" handlePress={undefined} />
        </View>
        <CarDetailedView />
      </View>
      <View style={styles.body}>
        <Typography variant="title" text="Specs" />
        <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
          <SpecCard title="Power" detail="410hp @6,100rpm" />
          <SpecCard title="Max Speed" detail="280 km/h" />
          <SpecCard title="Power" detail="410hp @6,100rpm" />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: `${colors.lightGray}`,
    flex: 1,
    gap: 24,
    paddingHorizontal: 32,
    paddingVertical: 40,
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
  },
  body: {
    backgroundColor: `${colors.white}`,
    gap: 16,
    paddingHorizontal: 32,
    paddingVertical: 40,
  },
});

export default Car;
