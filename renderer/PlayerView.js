import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Player = props => {
    return (
        <Image
            source={props.player.imageSource}
            fadeDuration={0}
            resizeMode='center'
            style={{
                width: props.size,
                height: props.size,
            }} />
    )
}

export default Player

const styles = StyleSheet.create({})
