import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
    },
	tabBarStyle: {
		backgroundColor: "#fff",
		padding: 0,
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.3,
		shadowRadius: 16.0,
		elevation: 24,
		backgroundColor: '#fff',
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: 74,
		zIndex: 0,
	},
	containerMap: {
		flex: 1
	},
	map: {
		width: '100%',
		height: '100%'
	}
});