import Svg, { Path } from "react-native-svg"
import styles from './Stylesheet.default';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';

exports.ChampsDeckImage = require('./assets/champs_deck.jpeg')
exports.MasonDeckImage = require('./assets/mason_parking_deck.jpeg');
exports.WarsawDeckImage = require('./assets/warsaw_parking_deck.jpeg');

export const ParkingDeckInfoComponent = ({title, imageURL, availableSpots, clientLat, clientLong, deckLat, deckLong, etaString}) => {
	return (
		<View style={styles.testContainer}>
			<Image source={imageURL} style={{width:"100%",height:200,objectFit:"cover"}} />
			<View style={{flex:1,backgroundColor:'white',width:'100%',paddingHorizontal:15,paddingTop:25}}>
				<Text style={{fontWeight:'bold',fontSize:24,marginBottom:5}}>{title}</Text>
				<Text style={{color:"#888"}}>
					Spots available: <Text style={{color:"black",fontWeight:"bold"}}>{parseInt(availableSpots) <= 0 ? 0 : parseInt(availableSpots)}</Text>
					&nbsp;&middot;&nbsp;{etaString}
				</Text>
				<TouchableOpacity
				style={styles.navigateButton}
				onPress={() => Linking.openURL(`maps://app?saddr=${clientLat}+${clientLong}&daddr=${deckLat}+${deckLong}`)}>
					<Text style={styles.navigateButtonText}>Navigate to parking garage</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
};

export const JMULogoComponent = () => {
	return (
		<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={(363.19 / 4)}
		height={(119.67 / 4)}
		viewBox="0 0 363.193 119.667"
		>
			<Path
			fill="#b5a36a"
			d="M66.433 1.046 55.829 43.822H11.764L2.166 82.54c-2.195 8.847-.316 17.972 5.154 25.035 5.482 7.079 13.832 11.137 22.912 11.137h274.075c16.8 0 31.944-11.912 36.013-28.324l22.144-89.34H66.439"
			/>
			<Path
			fill="#450084"
			d="M70.47 6.209 59.866 48.985H15.801L7.175 83.789c-1.812 7.306-.272 14.827 4.225 20.636s11.364 9.139 18.836 9.139h274.075c14.462 0 27.5-10.265 31.008-24.409l20.559-82.946h-285.4"
			/>
			<Path
			fill="#b5a36a"
			d="m79.377 17.705-15.95 64.343H49.772l5.35-21.567H24.708L18.34 86.18c-.966 3.894-.146 7.901 2.251 10.997 2.398 3.095 6.058 4.869 10.039 4.869h45.024c9.18 0 17.457-6.514 19.684-15.494l17.066-68.846H79.379zm228.85 0-15.95 64.343h-13.654l15.94-64.295h-33.025l-16.96 68.425c-.968 3.895-.148 7.902 2.252 10.998 2.395 3.095 6.056 4.869 10.037 4.869h47.638c9.179 0 17.457-6.514 19.683-15.494l17.068-68.846H308.23zm-182.1.048-20.907 84.34h33.028l11.815-47.665 3.928 47.665h24.094l27.699-47.905-11.878 47.905h33.03l20.905-84.34h-51.257l-23.439 42.116-4.18-42.116h-42.838z"
			/>
			<Path
			fill="#fff"
			d="M106.345 17.705 89.693 84.884C88.08 91.39 82.17 96.039 75.518 96.039H19.813c.238.39.496.771.78 1.137 2.396 3.095 6.055 4.869 10.037 4.869h45.023c9.18 0 17.457-6.515 19.683-15.494l17.067-68.846h-6.06zm228.85 0-16.647 67.179c-1.613 6.506-7.524 11.155-14.177 11.155h-58.318c.238.39.496.771.78 1.137 2.396 3.095 6.056 4.869 10.037 4.869h47.636c9.18 0 17.46-6.515 19.684-15.494l17.069-68.846h-6.063zm-93.42.048-19.42 78.34h-26.961l-1.488 6h33.029l20.906-84.34h-6.067zm46.723 0L272.56 82.048h6.066l15.938-64.295h-6.066zm-77.83 16.71-35.67 61.63h-21.503l.495 6h24.094l27.699-47.905 4.887-19.725zM148.55 36.13 133.69 96.093h-26.985l-1.488 6h33.027l11.816-47.665-1.508-18.297zm-99.498 24.35-5.345 21.565h6.066L55.12 60.48h-6.068zM18.218 92.753c.007.027.018.055.027.083l-.019-.075-.008-.008z"
			/>
		</Svg>
	)
};