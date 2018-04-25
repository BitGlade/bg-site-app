import React from 'react';
import { StyleSheet, WebView } from 'react-native';

import { STATUS_BAR_HEIGHT } from './util';

const BG_URL = 'http://www.bitglade.com';


export default class App extends React.Component {
  render() {
    return (
      <WebView source={{ uri: BG_URL }} onError={onErr} onLoad={onLoad} style={styles.container}/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: STATUS_BAR_HEIGHT
  }
});


// util
function onLoad(data) {
    console.log('LOADED:', data);
}

function onErr(err) {
    console.log('ERR:', err);
}