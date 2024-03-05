import $api from '../http';

export default class AuthServices {
  static async login(email, password) {
    return $api.post('/auth/login', { email, password });
  }

  static async register(fullName, email, password, country) {
    return $api.post('/auth/register', { fullName, email, password, country });
  }
}
