import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Field = props => {
    return (
        <View style={[
            styles.field,
            {
                width: props.field.relativeSize.width,
                height: props.field.relativeSize.height,
            },
            props.style]}>
            <Text>{props.field.id}</Text>
        </View>
    )
}

export default Field

const styles = StyleSheet.create({
    field: {

        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#00FF00',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
