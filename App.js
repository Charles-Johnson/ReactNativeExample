import React, {Component} from 'react';
import {SectionList, ScrollView, StyleSheet, Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
				<SectionList 
		  		sections={[
						{title: '첫번째 선택', data: ['가', '나', '다']},
						{title: '둘번째 선택', data: ['가', '나']},
						{title: '셋번째 선택', data: ['가', '나', '다', '라', '가', '나', '다', '라']},
						{title: '넷번째 선택', data: ['가']},
					]}
					renderItem={({item, index, section}) =>
							<Text style={styles.text}>{item}</Text>
		  		}
					renderSectionHeader={({section: {title}}) => (
						<View style={styles.option}> 
							<Text style={styles.text}>{title}</Text>
						</View>
					)}
  				keyExtractor={(item, index) => item + index}
				/>
      </ScrollView>
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
