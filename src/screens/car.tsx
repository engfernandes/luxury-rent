import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Button from '../components/Button';
import CarDetailedView from '../components/CarDetailedView';
import IconButton from '../components/IconButton';
import LocationCard from '../components/LocationCard';
import PlanCard from '../components/PlanCard';
import Price from '../components/Price';
import SpecCard from '../components/SpecCard';
import Typography from '../components/Typography';
import {colors} from '../Theme';

function Car() {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.main}>
        <View style={styles.top}>
          <IconButton
            iconName="arrow-back"
            handlePress={() => navigation.goBack()}
          />
          <IconButton iconName="favorite-outline" handlePress={undefined} />
        </View>
        <CarDetailedView />
      </View>
      <View style={styles.body}>
        <Typography variant="title" text="Specs" />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <SpecCard title="Power" detail="410hp @6,100rpm" />
          <SpecCard title="Max Speed" detail="280 km/h" />
          <SpecCard title="Power" detail="410hp @6,100rpm" />
        </ScrollView>
        <Typography variant="title" text="Plan" />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <PlanCard type="hour" active={true} price="$60" />
          <PlanCard type="daily" active={false} price="$400" />
        </ScrollView>
        <Typography variant="title" text="Location" />
        <LocationCard location="200-298 Clipper St San Francisco, CA 94114, USA" />
        <View style={styles.bottom}>
          <Price value="$60" type="hour" />
          <Button variant="solid" text="Pick Up >" handlePress={undefined} />
        </View>
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderTopWidth: 1,
    borderColor: `${colors.white}`,
    gap: 16,
    paddingHorizontal: 32,
    paddingVertical: 40,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Car;
