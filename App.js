import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {

	const [data, setData] = useState('');
	const [loaded, setLoaded] = useState(false);

	const getData = async () => {
		try {
			const response = await fetch('https://rmdh-app.herokuapp.com/test');
			const fetchedData = await response.json();
			setData(fetchedData);
		} catch (error) {
			console.error(error);
		} finally {
			setLoaded(true);
		}
	};

  	return (
		<View style={styles.container}>
			<Button onPress={getData} title="Press to fetch API" />
			{ loaded
			? <Text>{JSON.stringify(data)}</Text>
			: <Text>Click on the button to make my API call</Text>
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
