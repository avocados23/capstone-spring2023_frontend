import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function App() {

	const [data, setData] = useState('');
	const [loaded, setLoaded] = useState(false);

	const [showOpeningPage, setShowOpeningPage] = useState(true);

	const getData = async () => {
		try {
			const response = await fetch('https://smartparking-backend.herokuapp.com/getParkingGarage');
			const fetchedData = await response.json();
			console.log(fetchedData);
			setData(fetchedData);
		} catch (error) {
			console.error(error);
		} finally {
			setLoaded(true);
		}
	};

	const handleOpenData = () => {
		setShowOpeningPage(false);
		getData();
	};

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

  	return (
		<View style={showOpeningPage && !loaded ? styles.container : styles.containerMap}>
			{
				showOpeningPage
				?
				<>
					<Text>
						<Icon name="car" size={96} color="#4F8EF7" />
					</Text>
					<Text style={{fontSize:32,fontWeight:"bold",marginBottom:96}}>Smart Parking Recommender</Text>
					<TouchableOpacity
						style={styles.loginScreenButton}
						onPress={handleOpenData}
						underlayColor='#fff'>
						<Text style={styles.loginText}>Start</Text>
					</TouchableOpacity>
				</>
				:
				<>
				{
					loaded
					?
					<MapView 
					style={styles.map}
					initialRegion={{
						latitude: 38.437689,
						longitude: -78.872908,
						latitudeDelta: 0.015,
						longitudeDelta: 0.01
					}}>
						{
							parkingGarageCoords.map((coord, i) => 
								<Marker
								key={coord.title}
								coordinate={coord.coordinate}
								pinColor={i === data.parkingGarageNum ? 'red' : 'purple'}
							/>
							)
						}
					</MapView>
					: <Text>loading...</Text>
				}
				</>
			}
		</View>
  	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
containerMap: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  loginScreenButton:{
	width:200,
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#4F8EF7',
    borderRadius:5,
    borderWidth: 2,
    borderColor: '#000'
  },
  loginText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  }
});
