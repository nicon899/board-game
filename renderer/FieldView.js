import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Field = props => {
    const [view, setview] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            if (view) {
                view.measure((fx, fy, width, height, px, py) => {
                    props.setFieldLayout(props.field.id, { x: px, y: py, height: height, width: width })
                })
            }
        }, 0);
    }, [view, props.width, props.height])

    return (
        <View
            ref={(ref) => { setview(ref) }}
            style={[
                styles.field,
                {
                    width: props.width,
                    height: props.height,
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
        backgroundColor: '#222288',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
