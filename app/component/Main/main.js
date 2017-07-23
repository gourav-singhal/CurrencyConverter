/**
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconEn from 'react-native-vector-icons/Entypo';

import styles from './main.styles';
import CURRENCIES from '../../config/currency';
import { getCurrencyRates, showInput, setInr } from '../../redux/actions/index';

class Main extends Component {

  componentWillMount() {
    this.props.getCurrencyRates();
  }

  static navigationOptions = {
      header: null,
  }

  handleIconPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Selector');
  }

  handleSubmitPress = () => {
    const rs = this.refs.textInput._lastNativeText;
    if(Number(rs)) {
      this.props.setInr(rs);
    }
    else {
      Alert.alert('Error', 'Please provide valid input.')
    }
  }

  render() {
    const { selectedCurrency, currencyRate, fullName, isInputShown, indianRs } = this.props;
    return (
      <View style={styles.container}>
        {/* red container */}
        <View style={styles.firstContainer}>
          <Text style={styles.firstText}>Indian Rupees</Text>

          {isInputShown ?
            (<View style={styles.inputContainer}>
              <TextInput
                  style={styles.text}
                  ref='textInput'
                  placeholder='INR'
                  placeholderTextColor='#fcf9fa'
                  selectionColor='#fcf9fa'
                  keyboardType='numeric'
                  autoFocus
              />
              <TouchableOpacity
                style={styles.iconEnContainer}
                onPress={() => this.handleSubmitPress()}>
                <IconEn name='check' size={20} color='#ffffff' />
              </TouchableOpacity>
            </View>):
            (<TouchableOpacity style={styles.inputContainer} onPress={() => this.props.showInput(true)}>
              <Text style={styles.secondText}>{indianRs}</Text>
              <View style={styles.iconEnContainer}>
                <IconEn name='edit' size={20} color='#ffffff' />
              </View>
            </TouchableOpacity>)}

          <Text style={styles.thirdText}>INR</Text>
        </View>

        {/* toggle button container */}
        <View style={styles.iconContainer}>
          <Icon
            name='arrow-down'
            color='#ff5354'
            size={100}
            onPress={this.handleIconPress}
          />
        </View>

        {/* white container */}
        <View style={styles.secondContainer}>
          <Text style={styles.fourthText}>{selectedCurrency}</Text>
          <Text style={styles.fifthText}>{currencyRate}</Text>
          <Text style={styles.sixthText}>{fullName}</Text>
        </View>

      </View>
    )
  }
}

function mapStateToProps(state) {
  let currencyRate = 0, fullName = '';
  if(!state.main.loading) {
    currencyRate = state.main.conversionData[state.selector.selectedCurrency];
  }
  CURRENCIES.forEach(currency => {
    if(currency.abbr === state.selector.selectedCurrency) {
      fullName = currency.fullName;
    }
  })
  return {
    indianRs: state.main.indianRs,
    currencyRate: (currencyRate * state.main.indianRs).toFixed(2),
    selectedCurrency: state.selector.selectedCurrency,
    fullName,
    isInputShown: state.main.isInputShown,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrencyRates: bindActionCreators(getCurrencyRates, dispatch),
    showInput: bindActionCreators(showInput, dispatch),
    setInr: bindActionCreators(setInr, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
