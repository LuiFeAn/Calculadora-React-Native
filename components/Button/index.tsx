import {Pressable, StyleProp, Text, TextStyle} from 'react-native';
import {styles} from '../styles';

interface ICalcButtonProps {
  value: string | number;
  textStyle?: StyleProp<TextStyle>;
  onClick(): void;
}

export function Button({value, onClick, textStyle}: ICalcButtonProps) {
  return (
    <Pressable
      android_ripple={{
        color: 'white',
        borderless: true,
        radius: 40,
      }}
      onPress={onClick}
      style={styles.container}>
      <Text style={[styles.text, textStyle]}>{value}</Text>
    </Pressable>
  );
}
