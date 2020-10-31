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
                    padding: props.padding
                },
                props.style]}>
            <View
                style={[
                    styles.innerField,
                    {
                        width: '100%',
                        height: '100%',
                        borderRadius: props.width,
                    }]}
            >
                <Text>{props.field.id}</Text>
            </View>
            {props.connectionLines.top && <View style={[styles.connectTop, { height: props.padding }]}></View>}
            {props.connectionLines.bot && <View style={[styles.connectBot, { height: props.padding }]}></View>}
            {props.connectionLines.right && <View style={[styles.connectRight, { width: props.padding }]}></View>}
            {props.connectionLines.left && <View style={[styles.connectLeft, { width: props.padding }]}></View>}
        </View>
    )
}

export default Field

const styles = StyleSheet.create({
    field: {
        backgroundColor: '#00000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerField: {
        borderColor: 'black',
        borderWidth: 0.5,
        backgroundColor: '#222288',
        alignItems: 'center',
        justifyContent: 'center',
    },
    connectTop: {
        top: 0,
        position: 'absolute',
        width: 5,
        backgroundColor: 'white'
    },
    connectBot: {
        bottom: 0,
        position: 'absolute',
        width: 5,
        backgroundColor: 'white'
    },
    connectRight: {
        right: 0,
        position: 'absolute',
        height: 5,
        backgroundColor: 'white'
    },
    connectLeft: {
        left: 0,
        position: 'absolute',
        height: 5,
        backgroundColor: 'white'
    }
})
