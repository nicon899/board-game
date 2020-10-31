import React from 'react';
import { StyleSheet, View } from 'react-native';

import Player from './Objects/Player';
import BoardGameController from './BoardGameController';
import NoActionField from './Objects/fields/NoActionField';
import FieldAction from './Objects/fields/FieldAction';

export default function App() {
  const player = [];
  player.push(new Player('apple', 0, require('./assets/icons/apple.png'), 0));
  player.push(new Player('banana', 1, require('./assets/icons/banana.png'), 5));
  player.push(new Player('cherry', 2, require('./assets/icons/cherry.png'), 8));


  const fieldWidth = 0.2;
  const relativeSize = { width: fieldWidth, height: fieldWidth, padding: 5 };
  const fields = [];
  for (let i = 0; i < 10; i++) {
    const fieldRow = [];
    for (let j = 0; j < 5; j++) {
      const id = i * 5 + j;

      let nextFields;
      if (i % 2 === 0) {
        nextFields = j < 4 ? id + 1 : id + 5;
      } else {
        nextFields = j > 0 ? id - 1 : id + 5;
      }
      if(id === 45){nextFields = 0;}

      const connection = {
        connectionLines:
        {
          top: (i > 0) && ((i % 2 !== 0) ? j === 4 : j === 0),
          right: j < 4,
          left: j > 0,
          bot: (i < 9) && ((i % 2 === 0) ? j === 4 : j === 0)
        },
        nextFields: [nextFields]
      }
      fieldRow.push(new NoActionField(id, relativeSize, connection))
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
