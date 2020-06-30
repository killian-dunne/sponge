import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Switch } from 'react-native-switch';
import { colors } from '../styles/colors';

const SettingsSwitch = () => {
  const [val, setVal] = useState(true);

  const toggleValue = (e) => {
    e.persist();
    setVal(!val);
  }

  return (
    <View style={styles.switchContainer}>
      <Switch
        value={val}
        disabled={false}
        activeText={'General'}
        inActiveText={'Reading'}
        circleSize={30}
        barHeight={30}
        circleBorderWidth={2}
        backgroundActive={"white"}
        backgroundInactive={colors.backOrange}
        circleActiveColor={colors.mainYellow}
        circleInActiveColor={colors.mainOrange}
        changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
        innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
        outerCircleStyle={{}} // style for outer animated circle
        renderActiveText={true}
        renderInActiveText={true}
        switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
        switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
        switchWidthMultiplier={3.5} // multipled by the `circleSize` prop to calculate total width of the Switch
        switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
        onPress={toggleValue}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: "center",
    color: 'red'
  },
  switch: {
    color: 'red',
  }
})

export default SettingsSwitch;