import React from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {Button} from './components/Button';
import {styles} from './styles';
import {useAppController} from './app.controller';

function App(): React.JSX.Element {
  const {
    options,
    buttonTextColorHandler,
    calcRootHandler,
    expressions,
    resultOfCalc,
    setExpressions,
  } = useAppController();

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View>
        <TextInput
          value={expressions}
          onChangeText={setExpressions}
          style={styles.container}
        />
        <Text
          style={{
            fontSize: 20,
            color: 'gray',
            textAlign: 'right',
          }}>
          {resultOfCalc}
        </Text>
      </View>
      <View style={styles.calculatorButtonContainer}>
        {options.map((item, index) => (
          <Button
            textStyle={{
              color: buttonTextColorHandler(index),
            }}
            onClick={calcRootHandler}
            value={item}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

export default App;
