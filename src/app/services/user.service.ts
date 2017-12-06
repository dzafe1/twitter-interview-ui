import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const ENDPOINT_BASE = '/api';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  fetchUserInfo(username: string) {
    return this.http.get<any>(ENDPOINT_BASE + '/userinfo/' + username);
  }
}
