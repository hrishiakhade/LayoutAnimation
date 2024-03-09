import React, { useState } from 'react';
import {
  Button,
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const App = () => {
  const [expanded, setExpanded] = useState(false);
  const [boxPosition, setBoxPosition] = useState('left');
  const [firstBoxPosition, setFirstBoxPosition] = useState('left');
  const [secondBoxPosition, setSecondBoxPosition] = useState('left');
  const [thirdBoxPosition, setThirdBoxPosition] = useState('left');

  const toggleBox = () => {
    LayoutAnimation.configureNext({
      duration: 1500,
      create: { type: 'linear', property: 'opacity' },
      update: { type: 'spring', springDamping: 0.5 },
      delete: { type: 'linear', property: 'opacity' },
    });
    setBoxPosition(boxPosition => boxPosition === 'left' ? 'right' : 'left');
  };

  const toggleFirstBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setFirstBoxPosition(firstBoxPosition => firstBoxPosition === 'left' ? 'right' : 'left');
  };

  const toggleSecondBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setSecondBoxPosition(secondBoxPosition => secondBoxPosition === 'left' ? 'right' : 'left');
  };

  const toggleThirdBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setThirdBoxPosition(thirdBoxPosition => thirdBoxPosition === 'left' ? 'right' : 'left');
  };

  return (
    <ScrollView contentContainerStyle={style.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={style.btn}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
          setExpanded(expanded => !expanded);
        }}>
        <Text>Press me to {expanded ? 'collapse' : 'expand'}!</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={style.tile}>
          <Text>I disappear sometimes!</Text>
        </View>
      )}

      <View style={style.buttonContainer}>
        <Button title="Toggle Layout" onPress={toggleBox} />
      </View>
      <View style={[style.box, boxPosition === 'left' ? null : style.moveRight]} />

      <View style={style.buttonContainer}>
        <Button title="EaseInEaseOut" onPress={toggleFirstBox} />
      </View>
      <View
        style={[
          style.box,
          firstBoxPosition === 'left' ? null : style.moveRight,
        ]}
      />

      <View style={style.buttonContainer}>
        <Button title="Linear" onPress={toggleSecondBox} />
      </View>
      <View
        style={[
          style.box,
          secondBoxPosition === 'left' ? null : style.moveRight,
        ]}
      />

      <View style={style.buttonContainer}>
        <Button title="Spring" onPress={toggleThirdBox} />
      </View>
      <View
        style={[
          style.box,
          thirdBoxPosition === 'left' ? null : style.moveRight,
        ]}
      />

      <View style={style.buttonContainer}>
        <Button title="Spring" onPress={toggleThirdBox} />
      </View>
      <View
        style={[
          style.box,
          thirdBoxPosition === 'left' ? null : style.moveRight,
        ]}
      />
    </ScrollView >
  );
};

const style = StyleSheet.create({
  tile: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  btn: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 8,
    backgroundColor: 'blue',
  },
  moveRight: {
    alignSelf: 'flex-end',
    height: 200,
    width: 200,
  },
  buttonContainer: {
    alignSelf: 'center',
    margin: 20,
  },
});

export default App;