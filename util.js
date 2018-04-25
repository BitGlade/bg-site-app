'use strict';

import { Platform, Dimensions } from 'react-native';

const IPHONE_X_SMALL_DIM = 812;
const WINDOW_DIM = Dimensions.get('window');
let iosStatusBarHeight = isIphoneX() ? 35 : 20;
let androidStatusBarHeight = 0;
export const STATUS_BAR_HEIGHT = isIOS() ? iosStatusBarHeight : androidStatusBarHeight;

export function isIOS() {
  return (Platform.OS = 'ios');
}

export function isIphoneX() {
    let { height, width } = WINDOW_DIM;
    return ( isIOS() && (height === IPHONE_X_SMALL_DIM || width === IPHONE_X_SMALL_DIM) );
}
