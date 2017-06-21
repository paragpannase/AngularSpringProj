import {HttpModule,Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {User} from './user.interface';

@Injectable()
export class RegisterService{
http:Http;
post_Url:string='http://localhost:8080/angular2Spring//api/person/save';

constructor(public _http:Http)
{
this.http=_http;
}
addEmployee(user:User){
 return this.http.post(this.post_Url,user,{}).map(res=>res.json());

}

}




