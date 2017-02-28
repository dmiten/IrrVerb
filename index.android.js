'use strict'

import React, {Component} from 'react';
import {
  Alert,
  AppRegistry,
  Keyboard,
  ListView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import Tts from 'react-native-tts';

import VERBS from './verbs.list';
import STYLES from './styles.js';

export default IrrVerb;

const styles = StyleSheet.create(STYLES);

AppRegistry.registerComponent('IrrVerb', () => IrrVerb);

try {
  Tts.setDefaultLanguage('en-IE');
  Tts.setDefaultRate(0.4)
} catch (error) {
  Alert.alert(
      'Ошибка речевого синтезатора',
      'Проверте настройки TTS Вашего устройства.'
  )
}

class FilteredTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      })
    }
  }

  componentWillMount() {
    this.updateDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.toSearch !== this.props.toSearch) {
      this.updateDataSource(nextProps)
    }
  }

  updateDataSource(props) {
    let dataBlob = [],
        rowId = [],
        isContainsToSearch = (verb) => {
          return (
              !((verb.firstForm.indexOf(props.toSearch))
              && (verb.secondForm.indexOf(props.toSearch))
              && (verb.thirdForm.indexOf(props.toSearch)))
          )
        },
        makedataBlob = (verb) => {
          dataBlob[String(verb.id)] = {
            id: verb.id,
            firstForm: verb.firstForm,
            secondForm: verb.secondForm,
            thirdForm: verb.thirdForm
          };
          rowId.push(verb.id)
        };
    VERBS.filter((verb) => isContainsToSearch(verb)).map(
        (verb) => makedataBlob(verb));
    this.setState(
        {dataSource: this.state.dataSource.cloneWithRows(dataBlob, rowId)});
  }

  renderRow(dataBlob) {
    return (
        <TouchableOpacity
            key={dataBlob.id}
            onPress={() => this.props.onPressHandlerParent(dataBlob.id)}>
          <View style={styles.singleRow}>
            <Text style={styles.verbForms}>{dataBlob.firstForm}</Text>
            <Text style={styles.verbForms}>{dataBlob.secondForm}</Text>
            <Text style={styles.verbForms}>{dataBlob.thirdForm}</Text>
          </View>
        </TouchableOpacity>
    )
  }

  render() {
    return (
        <ListView
            key={this.props.toSearch}
            dataSource={this.state.dataSource}
            enableEmptySections={true}
            keyboardShouldPersistTaps='handled'
            keyboardDismissMode='on-drag'
            renderRow={(dataBlob) => this.renderRow(dataBlob)}
        />
    )
  }
}

class SearchInput extends Component {

  shouldComponentUpdate(nextProps) {
    return (nextProps.toSearch !== this.props.toSearch)
  }

  render() {
    return (
        <TextInput
            style={styles.searchInput}
            maxLength={20}
            placeholder='поиск глагола eng'
            placeholderTextColor={'#b0bec5'}
            underlineColorAndroid='transparent'
            returnKeyType='done'
            autoCorrect={false}
            onEndEditing={() => Keyboard.dismiss()}
            onSubmitEditing={() => Keyboard.dismiss()}
            value={this.props.toSearch}
            onChangeText={(input) =>
                this.props.inputHandlerParent(input.toLowerCase())}
        />
    )
  }
}

class ButtonX extends Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
        <TouchableOpacity onPress={() => this.props.clearToSearchParent()}>
          <Text style={styles.xButton}>{String.fromCharCode(9632)}</Text>
        </TouchableOpacity>
    )
  }
}

class DetailsInModal extends Component {

  shouldComponentUpdate(nextProps) {
    return (nextProps.detailsInModal !== this.props.detailsInModal)
  }

  touchToSpeak = (verb, form) => {
    return (
        <TouchableOpacity
            key={form}
            onPress={() => Tts.speak(verb[form])}>
          <View style={styles.rowInModal}>
            <Text style={styles.verbForms}>{verb[form]}</Text>
            <Text style={styles.transcriptionInModal}>
              {verb[form + 'Transcription'] + '   \uD83D\uDD0A'}
            </Text>
          </View>
        </TouchableOpacity>
    )
  };

  render() {
    let verb = this.props.pressedVerb;
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={this.props.detailsInModal}
            onRequestClose={() => this.props.toggleModalParent()}>
          <View style={styles.modal}>
            <View style={styles.verbFormsInModal}>
              {this.touchToSpeak(verb, 'firstForm')}
              {this.touchToSpeak(verb, 'secondForm')}
              {this.touchToSpeak(verb, 'thirdForm')}
            </View>
            <Text style={styles.translationInModal}>
              {verb.translation}
            </Text>
            <TouchableOpacity onPress={() => this.props.toggleModalParent()}>
              <Text style={styles.okButton}>ok</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    )
  }
}

class IrrVerb extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toSearch: '',
      pressedVerb: {},
      detailsInModal: false
    }
  }

  inputHandler = (newToSearch) => {
    this.setState({toSearch: newToSearch})
  };

  toggleModal = () => {
    this.setState({detailsInModal: !this.state.detailsInModal})
  };

  onPressHandler = (id) => {
    this.setState({
      pressedVerb: VERBS[id],
      detailsInModal: !this.state.detailsInModal
    });
  };

  clearToSearch = () => {
    this.setState({toSearch: ''})
  };

  render() {
    return (
        <View style={styles.irrVerb}>
          <View style={styles.searchInputWithX}>
            <View style={styles.rowSearch_X}>
              <SearchInput
                  toSearch={this.state.toSearch}
                  inputHandlerParent={this.inputHandler}/>
              <ButtonX clearToSearchParent={this.clearToSearch}/>
            </View>
          </View>
          <View style={styles.filteredTable}>
            <FilteredTable
                toSearch={this.state.toSearch}
                pressedVerb={this.state.pressedVerb}
                onPressHandlerParent={this.onPressHandler}/>
          </View>
          <DetailsInModal
              detailsInModal={this.state.detailsInModal}
              pressedVerb={this.state.pressedVerb}
              toggleModalParent={this.toggleModal}/>
        </View>
    )
  }
}