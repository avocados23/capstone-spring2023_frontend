import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, FlatList, Dimensions } from 'react-native';
import * as Location from 'expo-location';

import styles from '../Stylesheet.default.js';
import { JMULogoComponent, ParkingDeckInfoComponent } from '../componentLib.js';

let parkingGarageCoords = new Map();
parkingGarageCoords.set('Warsaw Avenue Parking Deck', require("../assets/warsaw_parking_deck.jpeg"));
parkingGarageCoords.set('Mason Street Parking Deck', require('../assets/mason_parking_deck.jpeg'))
parkingGarageCoords.set('Champions Parking Deck', require("../assets/champs_deck.jpeg"))

export default Home = () => {
	const [location, setLocation] = useState(null);
	const [loadedLocation, setLoadedLocation] = useState(false);
	const [errorMsg, setErrorMsg] = useState(null);
  
	useEffect(() => {
	  	(async () => {
		
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
				setLoadedLocation(true);
				return;
			}
	
			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
			setLoadedLocation(true);
	  	})();
	}, []);

	const [parkingGarageData, setParkingGarageData] = useState(null);
	const [loadedPGData, setLoadedPGData] = useState(false);

	const getData = async () => {
		try {
			console.log('Fetching data...')
			const response = await fetch(`https://smartparking-backend.herokuapp.com/predict?latitude=38.4238362&longitude=-78.8619331`);
			// const response = await fetch(`https://smartparking-backend.herokuapp.com/predict?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}`);
			const fetchedData = await response.json();
			console.log(fetchedData);
			setParkingGarageData(fetchedData);
		} catch (error) {
			console.error(error);
		} finally {
			setLoadedPGData(true);
		}
	};

	useEffect(() => {
		if (loadedLocation && errorMsg === null) {
			getData();
		}
	}, [loadedLocation]);

	const opacityAnimation = useRef(new Animated.Value(0.5)).current;
	const opacityStyle = { opacity: opacityAnimation };
	const animateElement = () => {
		Animated.sequence([
			Animated.delay(1000),
			Animated.timing(opacityAnimation, {
				toValue: 0,
				duration: 1500,
				useNativeDriver: true
			})
			.start(() => {
				Animated.timing(opacityAnimation, {
					toValue: 1,
					duration: 1500,
					useNativeDriver: true
				})
			.start(() => {
				animateElement();
			})
			})
		])
	};

	useEffect(() => {
		animateElement();
	}, []);
  
  
    return (
		loadedLocation && loadedPGData && parkingGarageData !== null
		?
		<View style={styles.container}>
			{
			loadedPGData &&
			<FlatList
				showsHorizontalScrollIndicator={false}
				data={parkingGarageData.parkingData.sort((a,b) => b.spotsPredicted - a.spotsPredicted)}
				renderItem={({item}) => <ParkingDeckInfoComponent title={item?.name} imageURL={parkingGarageCoords.get(item.name)} availableSpots={item?.spotsPredicted} 
				clientLat={location.coords.latitude} clientLong={location.coords.longitude} deckLat={item?.coordinate.latitude} deckLong={item?.coordinate.longitude} etaString={item.time} />}
				keyExtractor={(item) => item.name}
				snapToAlignment="start"
				decelerationRate={"fast"}
				snapToInterval={Dimensions.get("window").width}
				horizontal
			/>
		}
		</View>
		:
		<View style={styles.loadingContainer}>
			<Animated.View style={opacityStyle}>
				<JMULogoComponent />
			</Animated.View>
		</View>
  	);
}