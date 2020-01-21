import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = 'ee886f9b23b256796c5a';
  private clientsecret = '4a744521e45df949c60d73caa4ed683d073ad736';
  constructor(private http:HttpClient) {
   console.log("service is ready!"); 
   this.username = 'atienophanice'
   }
   getProfileInfo(){
    return this.http.get("2" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res); 
   }
getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res); 
}

updateProfile(username:string){
this.username = username;
}

}
