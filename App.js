import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {

	const [data, setData] = useState('');
	const [loading, setLoading] = useState(true);

	const getData = async () => {
		try {
			const response = await fetch('https://dummyjson.com/products/1');
			const fetchedData = await response.json();
			setData(fetchedData);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

  	return (
		<View style={styles.container}>
			{
				loading
				? <ActivityIndicator />
				: <Text>{JSON.stringify(data)}</Text>
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
});
