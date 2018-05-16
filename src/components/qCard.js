import React from 'react';
import { View,Text, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

class QCardComponent extends React.Component {
    constructor (props){
        super(props)
        this.state = ({
        })
      }
    
      render(){
          return(
            <View>
            <Text style={{fontWeight: 'bold', fontSize: 15}} >
            {this.props.question}
            </Text>
            <Text style={{ fontSize: 15}} >
            {this.props.answer}
            </Text>
            </View>

          )
      }
}

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => 
<View style={[ styles.container, { backgroundColor: 'red' } ]} >
<QCardComponent 
question= "what 1 ?"
answer= "answer 1"
/>
</View>
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: 'white' } ]} 
>
<QCardComponent 
question= "what 2 ?"
answer= "answer 2"
/>
</View>
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: 'red' } ]} 
>
<QCardComponent 
question= "what 3 ?"
answer= "answer 3"
/>
</View>
const FourthRoute = () => <View style={[ styles.container, { backgroundColor: 'white' } ]} 
>
<QCardComponent 
question= "what 4 ?"
answer= "answer 4"
/>
</View>

export default class qCard extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Details' },
      { key: 'second', title: 'QCard' },
      { key: 'third', title: 'Quiz' },
      { key: 'fourth', title: 'Quiz' },

    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  });

  render() {
    return (
    <View style ={{flex:1}} >
    <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
    >
    </TabViewAnimated>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});