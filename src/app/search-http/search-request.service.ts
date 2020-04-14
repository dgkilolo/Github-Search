import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserName } from '../user-name';
import { Repository } from '../repository';

import { SearchFormComponent } from '../search-form/search-form.component';


@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {

  UserName: UserName;
  NumberRepo: UserName;
  LoginName: UserName;
  Avatar: UserName;
  ListRepos: Repository[] = [] ;
 
  Repos: Repository;
 

  constructor(private http:HttpClient) {
    this.UserName = new UserName('', '', '', '', '');    
    
    
    this.Repos = new Repository('');
   }

   displayRequest() {
    interface ApiResponse {
     login:string;
     avatar_url:string;
    }

    let promise = new Promise ((resolve, reject)=> {
      this.http.get<ApiResponse>(environment.apiUrl + 'dgkilolo' ).toPromise().then (response => {
        this.UserName.LoginName = response.login
        this.UserName.Avatar = response.avatar_url
        
        resolve()
      })
    })
    return promise 
  }

   
  
   searchRequest(name) {
     interface ApiResponse {
      login:string;
      public_repos:string;
     }

     let promise = new Promise ((resolve, reject)=> {
       this.http.get<ApiResponse>(environment.apiUrl + name ).toPromise().then (response => {
         this.UserName.UserName = response.login
        this.UserName.NumberRepo = response.public_repos
        console.log(response.public_repos)
         resolve()
       })
     })
     return promise 
   }
   
   searchRepo(name) {
    interface ApiResponse {
    name:string;
    }

    this.ListRepos.length = 0;    

    let promise = new Promise ((resolve, reject)=> {
      this.http.get<ApiResponse>(environment.apiUrl + name + '/repos' ).toPromise().then (response => {

        for(let i = 0; i<15;i++){

        this.Repos.repository = response[i].name

        this.ListRepos.push( new Repository(this.Repos.repository) ) 
      
        // console.log(response[i].name)
        }
        // console.log(this.ListRepos)
        resolve()
      })
    })
    return promise 
  }

}
