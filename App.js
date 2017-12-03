import React, { Component } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native'
import Weather from './weather'

const API_KEY = ''

export default class App extends Component {

  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({error: error})
      }
    )
  };

  _getWeather = (lat, long) => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&APPID='+API_KEY
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true
        })
      })
  }

  render () {
    const {isLoaded, temperature, name, error} = this.state
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        {isLoaded ? <Weather temp={Math.ceil(temperature - 273.1)} name={name}/> : (<View style={styles.loading}>
          <ActivityIndicator/>
          <Text style={styles.loadingText}>Getting the weather</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 30,
    marginBottom: 100
  }
})
