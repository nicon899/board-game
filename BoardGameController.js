import React, { useRef, useState } from 'react'
import { Button, StyleSheet, ToastAndroid, View } from 'react-native'

import BoardView from './BoardView';

const BoardGameController = props => {
    const childRef = useRef();
    const [activePlayer, setactivePlayer] = useState(0);
    const [showMove, setShowMove] = useState(true);

    const play = async () => {
        setShowMove(false);
        const dice = Math.floor(Math.random() * 5) + 1;
        ToastAndroid.show("Dice: " + dice, ToastAndroid.SHORT);
        await moveTo(props.player[activePlayer], dice);
        setactivePlayer((activePlayer + 1) % props.player.length)
       // console.log(props.player[activePlayer].name +': ' +props.player[activePlayer].field);
        setShowMove(true);
    }

    const moveTo = async (player, i) => {
        if (i <= 0) { return; };
        const nextField = (player.field + 1) % 25;
        const row = Math.floor(nextField / 5);
        const col = nextField % 5;
        await childRef.current.move(player, nextField);
        props.fields[row][col].onEnter(player);
        await moveTo(player, i - 1);
    }

    return (
        <View style={{ flex: 1 }}>
            <BoardView ref={childRef} fields={props.fields} player={props.player} numberOfFields={25} />
            <View style={styles.bottomBar}>
                {showMove && <Button title="Move" onPress={() => play()} />}
            </View>
        </View>
    )
}

export default BoardGameController

const styles = StyleSheet.create({
    bottomBar: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
