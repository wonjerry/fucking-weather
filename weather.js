import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

const weatherCases = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    icon: 'weather-rainy',
    title: 'Rainning!',
    subTitle: 'For more info look outside'
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    icon: 'weather-sunny',
    title: 'Sunny!',
    subTitle: 'Go get your ass burnt'
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    icon: 'weather-lightning',
    title: 'Thunderstorm in the house!',
    subTitle: 'Actually, outside of the house'
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    icon: 'weather-cloudy',
    title: 'Clouds!',
    subTitle: 'I know boring'
  },
  Snow: {
    colors: ['#7DE2FC', '#B9B6E5'],
    icon: 'weather-snowy',
    title: 'Cold as balls!',
    subTitle: 'Do you wanna build the snow man? fuck no'
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    icon: 'weather-hail',
    title: 'Drizzle!',
    subTitle: 'Is like rain, but gay'
  },
  Haze: {
    colors: ['#89F7FE', '#66A6FF'],
    icon: 'weather-hail',
    title: 'Haze!',
    subTitle: 'Don\'t know what that is shit'
  },
  Mist: {
    colors: ['#D7D2CC', '#304352'],
    icon: 'weather-fog',
    title: 'Mist!',
    subTitle: "It's like you have no glasses on"
  }

}

function Weather ({temp, name}) {
  return (
    <LinearGradient colors={weatherCases[name].colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons color='white' size={144} name={weatherCases[name].icon}/>
        <Text style={styles.temp}>{temp}˚</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[name].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[name].subTitle}</Text>
      </View>
    </LinearGradient>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired
}

export default Weather

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  temp: {
    fontSize: 48,
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 10,
    fontWeight: '300'
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 24
  }
})