import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Avatar from '../components/Avatar';
import BrandCard from '../components/BrandCard';
import Button from '../components/Button';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';
import Typography from '../components/Typography';
import {colors} from '../Theme';
import {cars} from '../mocks/cars';
import {brands} from '../mocks/brands';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const [search, setSearch]: any = useState();
  const [brand, setBrand]: any = useState();
  const [car, setCar]: any = useState();

  const handleChangeSearch = (event: any) => setSearch(event.target.value);

  const navigation: any = useNavigation();

  useEffect(() => {
    setBrand(brands);
    setCar(cars);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.main}>
        <View style={styles.top}>
          <SearchBar value={search} handleChange={() => handleChangeSearch} />
          <Avatar
            image={require('../assets/rectangle.png')}
            imageDescription="Profile picture"
            handlePress={undefined}
          />
        </View>
        <View style={styles.brandsContainer}>
          <View style={styles.bransTitle}>
            <Typography variant="title" text="Brands" />
            <View style={styles.seeAllButtonContainer}>
              <Button variant="text" text="See all" handlePress={undefined} />
              <Icon
                name="keyboard-arrow-right"
                size={16}
                color={`${colors.black}`}
              />
            </View>
          </View>
          <View style={styles.brandCardsContainer}>
            {brand?.map((item: any) => (
              <BrandCard
                brandLogo={item.logo}
                brandName={item.name}
                quantity={item.availableCars}
              />
            ))}
          </View>
        </View>
        <View style={styles.popularCarsContainer}>
          <Typography variant="title" text="Popular Cars" />
          <View style={styles.carCardContainer}>
            {car?.length >= 3 && (
              <>
                <CarCard
                  key={car[0].id}
                  carImage={car[0].image}
                  carName={car[0].model}
                  transmissionType={car[0].transmissionType}
                  seatsNumber={car[0].seats}
                  fuelType={car[0].fuelType}
                  handlePressRentNow={undefined}
                  handlePressDetail={() => navigation.navigate('Car')}
                />
                <CarCard
                  key={car[2].id}
                  carImage={car[2].image}
                  carName={car[2].model}
                  transmissionType={car[2].transmissionType}
                  seatsNumber={car[2].seats}
                  fuelType={car[2].fuelType}
                  handlePressRentNow={undefined}
                  handlePressDetail={() => navigation.navigate('Car')}
                />
                <CarCard
                  key={car[6].id}
                  carImage={car[6].image}
                  carName={car[6].model}
                  transmissionType={car[6].transmissionType}
                  seatsNumber={car[6].seats}
                  fuelType={car[6].fuelType}
                  handlePressRentNow={undefined}
                  handlePressDetail={() => navigation.navigate('Car')}
                />
              </>
            )}
          </View>
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
    overflow: 'hidden',
    paddingHorizontal: 32,
    paddingVertical: 40,
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
  },
  seeAllButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  brandsContainer: {
    gap: 10,
  },
  brandCardsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  bransTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularCarsContainer: {
    gap: 12,
  },
  carCardContainer: {
    gap: 40,
  },
});

export default Home;
