import { API_KEY } from "@env"
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';

import styles from '../Stylesheet.default.js';
import { JMULogoComponent } from '../componentLib.js';

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
  
    return (
		<View style={styles.container}>
			{
				errorMsg !== null && <Text>{errorMsg}</Text>
			}
			{
				errorMsg === null &&
				<>
				{
					loadedLocation ?
					<>
						<Text>Latitude: {JSON.stringify(location.coords.latitude)}</Text>
						<Text>Longitude: {JSON.stringify(location.coords.longitude)}</Text>
						<Text>Latitude, encoded: {encodeURI(JSON.stringify(location.coords.latitude))}</Text>
						<Text>Longitude, encoded: {encodeURI(JSON.stringify(location.coords.longitude))}</Text>
					</> 
					: <JMULogoComponent/>
				}
				</>
			}
		</View>
  	);
}