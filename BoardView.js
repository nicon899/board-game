import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import FieldView from './renderer/FieldView';

const BoardView = props => {

    const fields = [];


    for (let i = 0; i < props.fields.length; i++) {
        const fieldRow = [];
        for (let j = 0; j < props.fields[i].length; j++) {
            fieldRow.push(<FieldView field={props.fields[i][j]} key={'field_' + props.fields[i][j].id} />)
        }
        fields.push(<View style={{flexDirection: 'row'}}>{fieldRow}</View>)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {fields}
        </View>
    )
}

export default BoardView

const styles = StyleSheet.create({})
