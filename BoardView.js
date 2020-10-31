import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react'
import { Dimensions, StyleSheet, Text, View, Animated, Button, ScrollView } from 'react-native'

import FieldView from './renderer/FieldView';
import PlayerView from './renderer/PlayerView';

const PLAYER_SIZE = Dimensions.get('window').width < Dimensions.get('window').height ? Dimensions.get('window').width * 0.1 : Dimensions.get('window').height * 0.1
const MAX_SIZE = Dimensions.get('window').width < Dimensions.get('window').height ? Dimensions.get('window').width : Dimensions.get('window').height;

const BoardView = forwardRef((props, ref) => {
    const [fields, setFields] = useState([]);
    const [fieldViews, setFieldViews] = useState([]);
    const [playerViews, setPlayerViews] = useState([]);
    const [animation, setanimation] = useState([])
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        setFields(createFields());
    }, [zoom])

    useEffect(() => {
        if (fieldViews && fieldViews.length === props.numberOfFields) {
            const playerSize = PLAYER_SIZE * zoom;
            const newPlayerViews = [];
            for (let i = 0; i < props.player.length; i++) {
                const fieldLayout = fieldViews[props.player[i].field];
                const scrollOffset = { x: Math.abs(fieldViews[0].x), y: Math.abs(fieldViews[0].y) };

                animation[props.player[i].id] = {};
                animation[props.player[i].id].x = new Animated.Value(fieldLayout.x + fieldLayout.width / 2 - playerSize / 2 + scrollOffset.x);
                animation[props.player[i].id].y = new Animated.Value(fieldLayout.y + fieldLayout.height / 2 - playerSize / 2 + scrollOffset.y);

                const transformStyle = {
                    position: 'absolute',
                    transform: [{
                        translateX: animation[props.player[i].id].x,
                    },
                    {
                        translateY: animation[props.player[i].id].y,
                    }]
                }
                newPlayerViews[props.player[i].id] = (
                    <Animated.View key={'player_' + i}
                        style={transformStyle}
                    >
                        <PlayerView player={props.player[i]} size={playerSize} />
                    </Animated.View>
                );
            }
            setanimation(animation.slice())
            setPlayerViews(newPlayerViews.slice());
        }
    }, [fieldViews])

    useImperativeHandle(ref, () => ({
        async move(player, field) {
            const animationTime = 1000;
            const fieldLayout = fieldViews[field];
            const playerSize = PLAYER_SIZE * zoom;
            const scrollOffset = { x: Math.abs(fieldViews[0].x), y: Math.abs(fieldViews[0].y) };

            Animated.parallel([
                Animated.timing(animation[player.id].x, {
                    toValue: fieldLayout.x + fieldLayout.width / 2 - playerSize / 2 + scrollOffset.x,
                    duration: animationTime,
                    useNativeDriver: true
                }),
                Animated.timing(animation[player.id].y, {
                    toValue: fieldLayout.y + fieldLayout.height / 2 - playerSize / 2 + scrollOffset.y,
                    duration: animationTime,
                    useNativeDriver: true
                })
            ]).start(() => {
                // callback
            });
            await timer(animationTime);
        }
    }));

    function timer(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    const setFieldLayout = (field, layout) => {
        fieldViews[field] = layout;
        setFieldViews(fieldViews.slice());
    }

    const createFields = () => {
        const newFields = [];
        for (let i = 0; i < props.fields.length; i++) {
            const fieldRow = [];
            for (let j = 0; j < props.fields[i].length; j++) {
                const field = props.fields[i][j];
                const size = { width: 0, height: 0 }

                size.width = field.relativeSize.width * MAX_SIZE * zoom;
                size.height = field.relativeSize.height * MAX_SIZE * zoom;

                fieldRow.push(
                    <FieldView
                        key={'field_' + field.id}
                        field={field}
                        width={size.width}
                        height={size.height}
                        padding={field.relativeSize.padding}
                        connectionLines={field.connectionLines}
                        setFieldLayout={(field, layout) => setFieldLayout(field, layout)}
                    />
                )
            }
            newFields.push(<View key={'row_' + i} style={{ flexDirection: 'row' }}>{fieldRow}</View>)
        }
        return newFields
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#000000' }}>
            <ScrollView horizontal={true}>
                <ScrollView style={{ flex: 1 }}>
                    {fields}
                    {playerViews}
                </ScrollView>
            </ScrollView>
            <View style={{ flexDirection: 'row' }}>
                <Button title="Zoom +" onPress={() => { setZoom(zoom + 0.1) }} />
                <Button title="Zoom -" onPress={() => { setZoom(zoom - 0.1) }} />
            </View>
        </View>
    )
});

export default BoardView

const styles = StyleSheet.create({

})
