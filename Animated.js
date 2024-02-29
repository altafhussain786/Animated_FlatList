import {
	StatusBar,
	FlatList,
	Image,
	Animated,
	Text,
	View,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
  Button
} from "react-native";
const { width, height } = Dimensions.get("screen");
import React from "react";

const data = [
	"https://miro.medium.com/v2/resize:fit:1400/1*StyeHBv6f65QWn7aQbpcKw.png",
	"https://miro.medium.com/v2/resize:fit:768/1*u8_4zdPF9fcSYCgIRGG3oA.jpeg",
	"https://img.freepik.com/premium-photo/artificial-intelligence-tech_777576-7929.jpg",
	"https://images.squarespace-cdn.com/content/v1/640e80a60b3ef53ac5f1adc9/dff5a139-62ec-475f-96f6-154020972c33/AI+person+3.jpg",
	"https://miro.medium.com/v2/resize:fit:1400/1*6Y-xTD3NjG3EQYcBOOrRKA.jpeg",
	"https://notrealart.com/wp-content/uploads/2022/07/Beautiful-City-in-the-Galaxy_Hannah-Moesker_232dc1655c84bac8ee6f37a1bd68251a_800.jpg"
];

const imageW = width * 0.7;
const imageH = imageW * 1.54;
const App = () => {
	const scrollX = React.useRef(new Animated.Value(0)).current;
	return (
		<View style={{ flex: 1, backgroundColor: "#000" }}>
			<StatusBar hidden backgroundColor={"rgba(0,0,0,0.1)"}/>
			<View style={[StyleSheet.absoluteFillObject]}>
				{data?.map((image, index) => {
					const inputRange = [
						(index - 1) * width,
						index * width,
						(index + 1) * width
					];
					const opacity = scrollX.interpolate({
						inputRange,
						outputRange: [0, 1, 0]
					});
					return (
						<Animated.Image
							key={`image-${index}`}
							source={{ uri: image }}
							style={[StyleSheet.absoluteFillObject, { opacity }]}
							blurRadius={50}
						/>
					);
				})}
			</View>
      <View style={{
        flex:1,
								width,
								justifyContent: "center",
								alignItems: "center"
							}}>
      <Text style={{fontSize:50,fontWeight:"bold",color:"rgba(0,0,0,0.2)",top:70}}>FUTURE</Text>  
      <Text style={{fontWeight:"bold",color:"rgba(0,0,0,0.2)",top:70}}>github : @altafhussain786</Text>  

      </View>
			<Animated.FlatList
				data={data}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: true }
				)}
        showsHorizontalScrollIndicator={false}
				keyExtractor={(_, index) => index.toString()}
				horizontal
				pagingEnabled
				renderItem={({ item }) => {
					return (
						<View
							style={{
								width,
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<Image
								source={{ uri: item }}
								style={{
									width: imageW,
									height: imageH,
									resizeMode: "cover",
									borderRadius: 16
								}}
							/>
						</View>
					);
				}}
			/>
      {/* <TouchableOpacity style={{backgroundColor:"rgba(0,0,0,0.1)",justifyContent:"center",alignItems:"center",margin:30,padding:20,borderRadius:10}}>
        <Text style={{fontWeight:"bold",color:"white"}}>Next</Text>
      </TouchableOpacity> */}
		</View>
	);
};

export default App;
