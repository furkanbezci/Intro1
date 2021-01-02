import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import FontIcon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';
// slides = [...]




const slides = [
    {
        key: " 1",
        title: '',
        text: 'Happy New Year',
        image: require('../assets/ev.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: "2",
        title: '',
        text: 'Snowman',
        image: require('../assets/kardan.png'),
        backgroundColor: '#febe29',
    },
    {
        key: "3",
        title: '',
        text: 'Gifts',
        image: require('../assets/agac.png'),
        backgroundColor: '#22bcb5',
    }
];




const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    image: {
        resizeMode: 'contain',
        width: 400,
        height: 600

    }
    // [...]
});



export default class Slider extends React.Component {
    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide} key={index}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.text}</Text>
                <Icon name="rocket" size={30} color="#900" />
            </View>
        );
    }
    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="arrow-forward-circle-outline"
                    size={30}

                />
            </View>
        );
    };
    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };
    _renderSkipButton = () => {
        return (
            <View style={{ marginTop: 10 }} >
                <Text>Skip</Text>
            </View>
        )
    }
    render() {
        return (
            <AppIntroSlider
                data={slides}
                renderItem={this._renderItem}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
                bottomButton={false}
                activeDotStyle={{ backgroundColor: 'pink' }}
                onDone={() => navigation.navigate('Icons')}
                style={{ backgroundColor: 'rgb(0, 204, 153)' }}
                renderSkipButton={this._renderSkipButton}
                onSkip={() => navigation.navigate('Icons')}
                showSkipButton={true}

            />
        );
    }
}

