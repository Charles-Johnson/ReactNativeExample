import React, {Component} from 'react';
import {Alert, SectionList, TouchableHighlight, ScrollView, Button, StyleSheet, Text, View, ViewToken } from 'react-native';

// Titles of each section of the menu
const titles = ['첫번째 선택', '둘번째 선택', '셋번째 선택', '넷번째 선택'];

export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {section_is_shown: {}};
		// Initially all sections are collapsed
		for (title of titles) {
			this.state.section_is_shown[title] = false;
		}
	}
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
				<SectionList
					// Information for each section
		  		sections={[
						{title: titles[0], data: ['가', '나', '다']},
						{title: titles[1], data: ['가', '나']},
						{title: titles[2], data: ['가', '나', '다', '라', '마', '바', '사', '아']},
						{title: titles[3], data: ['가']},
					]}
					// Renders the information for each section depending on the state
					renderItem={
						({item, index, section: {title}}) =>
							(this.state.section_is_shown[title]) ? 
								<Text style={styles.text}>{item}</Text> : null
					}
					// Renders the section titles as buttons which uncollapse or collapse the section information depending on the state.
					renderSectionHeader={
						({section: {title}}) => {
							let new_section_is_shown = Object.assign({}, this.state.section_is_shown);
							new_section_is_shown[title] = !new_section_is_shown[title];
							return (<TouchableHighlight onPress={
								() => this.setState(
									{section_is_shown: new_section_is_shown}
								)
							}>
								<View style={styles.option}> 
									<Text style={styles.text}>{title}</Text>
								</View>
							</TouchableHighlight>);
						}
					}
  				keyExtractor={(item, index) => item + index} // A warning is given without this prop 
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
