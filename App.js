import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './Stylesheet.default';
import { DefaultTheme } from './themes/DefaultTheme';

import Home from './pages/Home';
import MapPage from './pages/Map';

const Tab = createMaterialBottomTabNavigator();

const theme = {
	...DefaultTheme
};

export default function App() {
  	return (
		<SafeAreaProvider>
			<PaperProvider theme={theme}>
				<NavigationContainer>
					<Tab.Navigator
					labeled={false}
					activeColor="#000000"
					inactiveColor="#aaa"
					barStyle={styles.tabBarStyle}
					>
						<Tab.Screen name="Home" component={Home} 
						options={{
							tabBarIcon: ({ color }) => (
								<Ionicons name="ios-home-outline" color={color} size={26} />
							)
						}}
						/>
						<Tab.Screen name="Map" component={MapPage}
						options={{
							tabBarIcon: ({ color }) => (
								<Ionicons name="ios-map-outline" color={color} size={26} />
							)
						}} />
					</Tab.Navigator>
				</NavigationContainer>
			</PaperProvider>
		</SafeAreaProvider>
  	);
};