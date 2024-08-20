import {Pressable, StyleProp, Text, TextStyle} from 'react-native';
import {styles} from '../styles';
interface ICalcButtonProps {
  value: string;
  textStyle?: StyleProp<TextStyle>;
  onClick(value: string): void;
}

export function Button({value, onClick, textStyle}: ICalcButtonProps) {
  return (
    <Pressable
      android_ripple={{
        color: 'white',
        borderless: true,
        radius: 40,
      }}
      onPress={() => onClick && onClick(value)}
      style={styles.container}>
      <Text style={[styles.text, textStyle]}>{value}</Text>
    </Pressable>
  );
}
