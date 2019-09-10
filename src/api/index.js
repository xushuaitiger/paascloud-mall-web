import axios from 'axios';
import store from '../store/';
const REFRESH_TOKEN_URL = '/uac/auth/user/refreshToken';
export function refreshToken () {
  alert('haha '+store.getters.getRefreshToken);
  return axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: REFRESH_TOKEN_URL,
    auth: {
      username: 'paascloud-client-uac',
      password: 'paascloudClientSecret'
    },
    params: {
      refreshToken: store.getters.getRefreshToken,
      accessToken: store.getters.getAccessToken
    }
  });

}
