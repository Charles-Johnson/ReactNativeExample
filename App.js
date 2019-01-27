import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View } from 'react-native';



export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
				<FlatList contentContainerStyle={styles.container}
		  		data={[
						{key: '첫번째 선택'},
						{key: '둘번째 선택'},
						{key: '셋번째 선택'},
						{key: '넷번째 선택'},
					]}
					renderItem={({item}) =>
							<View style={styles.option}> 
								<Text style={styles.text}>{item.key}</Text>
							</View>
		  		}
				/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		justifyContent: 'space-evenly',
    backgroundColor: '#fff',
  },
  option: {
		flexGrow: 1, // if just flex, backgroundColor doesn't display
		backgroundColor:'#D4EFFC',
		padding: 20,
  },
  text: {
		color: '#003E74',
		fontSize: 30,
		textAlign: 'center',
  },
});
