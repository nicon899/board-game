import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import BoardView from './BoardView';

const BoardGameController = props => {
    
    return (
        <BoardView fields={props.fields} />
    )
}

export default BoardGameController

const styles = StyleSheet.create({})
