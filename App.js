import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Player from './Objects/Player';
import BoardGameController from './BoardGameController';
import Field from './Objects/fields/Field';

export default function App() {
  const player = [];
  player.push(new Player('apple', require('./assets/icons/apple.png')));
  player.push(new Player('banana', require('./assets/icons/banana.png')));
  player.push(new Player('cherry', require('./assets/icons/cherry.png')));

  const fieldWidth = Dimensions.get('window').width * (1 / 5);
  const relativeSize = { width: fieldWidth, height: fieldWidth };
  const fields = [];
  for (let i = 0; i < 5; i++) {
    const fieldRow = [];
    for (let j = 0; j < 5; j++) {
      const id = i * 5 + j;
      fieldRow.push(new Field(id, relativeSize))
    }
    fields.push(fieldRow);
  }

  return (
    <View style={styles.container}>
      <BoardGameController player={player} fields={fields} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
