import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchRequestService } from '../search-http/search-request.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  
  

  userName: string;
  
  searching() {  
   this.searchService.searchRequest(this.userName)
   console.log(this.userName)
  }

  constructor(private searchService: SearchRequestService) { }

  ngOnInit(): void {
  }
  
}
