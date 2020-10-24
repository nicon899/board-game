import React from 'react';
import { StyleSheet, View } from 'react-native';

import Player from './Objects/Player';
import BoardGameController from './BoardGameController';
import Field from './Objects/fields/Field';

export default function App() {
  const player = [];
  player.push(new Player('apple', 0, require('./assets/icons/apple.png'), 0));
  player.push(new Player('banana', 1, require('./assets/icons/banana.png'), 1));
  player.push(new Player('cherry', 2, require('./assets/icons/cherry.png'), 2));

  const fieldWidth = (1 / 5);
  const relativeSize = { isSquare: true, size: fieldWidth, width: fieldWidth, height: fieldWidth };
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
