import { Component, OnInit } from '@angular/core';
import { SearchRequestService } from '../search-http/search-request.service';
import { UserName } from '../user-name';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  UserName: UserName;
  LoginName: UserName;
  Avatar:UserName;
  Repozz = [];

  constructor(private searchService: SearchRequestService) { }

  ngOnInit(): void {
    this.searchService.displayRequest()
    this.LoginName = this.searchService.LoginName
    this.Avatar = this.searchService.Avatar    
    this.UserName = this.searchService.UserName
    this.searchService.ListRepos = this.Repozz
  }
}