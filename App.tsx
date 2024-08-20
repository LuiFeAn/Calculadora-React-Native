import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import {Button} from './components/Button';
import {styles} from './styles';
import {useAppController} from './app.controller';

function App(): React.JSX.Element {
  const {
    options,
    buttonTextColorHandler,
    calcRootHandler,
    expressions,
    setExpressions,
  } = useAppController();

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View>
        <TextInput
          value={expressions}
          editable={false}
          onChangeText={setExpressions}
          style={styles.container}
        />
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
