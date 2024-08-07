import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Header from './Header'
import Headerone from './Headerone'
import Slider from './Slider'
import Footer from './Footer'




export default function Home() {
  return (
    <View>
      <StatusBar />
      <Header />
      <Headerone />
      <Slider />

      <Footer />
    </View>
  )
}