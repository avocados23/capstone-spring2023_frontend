import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import MapView from 'react-native-maps';

import styles from '../Stylesheet.default';

const parkingGarageCoords = [
    {
        title: "Warsaw Avenue Parking Deck",
        coordinate: {
            latitude: 38.44049301960376,
            longitude: -78.8775374000211,
        },
        subtitle: "Parking Deck 1"
    },
    {
        title: "Mason Street Parking Deck",
        coordinate: {
            latitude: 38.441077053986234, 
            longitude: -78.87189939666584,
        },
        subtitle: "Parking Deck 2"
    },
    {
        title: "JMU Main Parking Deck",
        coordinate: {
            latitude: 38.43502599007161,
            longitude: -78.87410192849666,
        },
        subtitle: "Parking Deck 3"
    }
];

export default MapPage = () => {

    const [data, setData] = useState(null);
	const [loaded, setLoaded] = useState(false);

    const getData = async () => {
		try {
			const response = await fetch('https://smartparking-backend.herokuapp.com/getParkingGarage?eta=200');
			const fetchedData = await response.json();
			setData(fetchedData);
		} catch (error) {
			console.error(error);
		} finally {
			setLoaded(true);
		}
	};

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.containerMap}>
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: 38.437689,
                    longitude: -78.872908,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.01
                }}>
                </MapView>
        </View>
    )
};