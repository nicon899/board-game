import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Player = props => {  
    return (
        <Image
            source={props.player.imageSource}
            fadeDuration={0}
            resizeMode='stretch'
            style={{
                width: 25,
                height: 25,
            }} />
    )
}

export default Player

const styles = StyleSheet.create({})
