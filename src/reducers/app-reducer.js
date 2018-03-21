import AppCenter from 'appcenter';
import { Platform } from 'react-native';
import RNFS from 'react-native-fs';
import DeviceInfo from 'react-native-device-info';


export default function app(
  state = {
    isLoggedIn: false,
    isReadyBot: false,
    user: undefined,
    version: '1.0',
    dateUpdateDepartmentTime: undefined,
  },
  action = {},
) {
  switch (action.type) {
    default:
      return state;
  }
}
