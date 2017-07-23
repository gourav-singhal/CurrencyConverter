import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSelected } from '../../redux/actions/index';
import styles from './selector.styles';
import CURRENCIES from '../../config/currency';

class Selector extends Component {
  static navigationOptions = {
    headerTintColor: '#ff5354',
    headerStyle: {
      backgroundColor: '#ffffff',
      shadowColor: 'transparent',
    }
  }

  handleItemPress = (abbr) => {
    this.props.setSelected(abbr);
  }

  render() {
    const items = this.props.currencies.map(currency => (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => this.handleItemPress(currency.abbr)}
        key={currency.abbr}
      >

        <View style={styles.textContainer}>
          <Text style={styles.full}>{currency.fullName} <Text style={styles.abbr}>{currency.abbr}</Text></Text>
        </View>

        <View style={styles.iconContainer}>
          {currency.isSelected ? <Icon name='check' size={20} color='#ff5354' /> : null}
        </View>

      </TouchableOpacity>
    ));

    return (
      <ScrollView style={styles.container}>
        {items}
      </ScrollView>
    )
  }
}


function mapStateToProps(state) {
  const newState = CURRENCIES.map(currency => {
    if(currency.abbr === state.selector.selectedCurrency) {
      return { ...currency, isSelected: true };
    }
    else {
      return { ...currency, isSelected: false };
    }
  });
  return {
    selectedCurrency: state.selector.selectedCurrency,
    currencies: newState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelected: bindActionCreators(setSelected, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
