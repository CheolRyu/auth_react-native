// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = props => {
  const { textStyle, viewStyles } = styles;
  return (
    <View style={viewStyles}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
  viewStyles: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component availble for other parts of the apps
export { Header };
