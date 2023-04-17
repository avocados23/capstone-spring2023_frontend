import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
	loadingContainer: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
    container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:"white"
    },
	headerBarStyle: {
		width: '100%',
		height: 250,
		position: "absolute",
		bottom: 0
	},
	headerText: {
		fontWeight: 600,
		fontSize: 24,
		fontFamily: 'System'
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
	},
	parkingDeck: {
		flexDirection: 'row',
		backgroundColor: 'white',
		width: '100%',
		paddingVertical: 24,
		paddingHorizontal: 12,
		borderColor: "#eee",
		borderBottomWidth: 1,
		justifyContent: "space-between"
	},
	parkingDeckInfoContainer: {
		position: "relative",
		marginRight: 8,
		width: "60%"
	},
	parkingDeckContainer: {
		backgroundColor: 'white',
		position: "relative",
		height: '100%'
	},
	parkingDeckContainerHeader: {
		fontWeight: 700
	},
	parkingDeckImage: {
		width: 100,
		height: 100,
		objectFit: "cover",
		borderRadius: 5
	},
	navigateButton: {
		backgroundColor: "black",
		paddingHorizontal: 14,
		paddingVertical: 12,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 12,
		borderRadius: 10,
	},
	navigateButtonText: {
		color: "white",
		fontWeight: 600
	},
	testContainer: {
		flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width,
	}
});