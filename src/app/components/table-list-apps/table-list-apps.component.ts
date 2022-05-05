import { Observable } from 'rxjs';
import { GithubReposService } from './../../service/github-repos.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table-list-apps',
  templateUrl: './table-list-apps.component.html',
  styleUrls: ['./table-list-apps.component.scss']
})
export class TableListAppsComponent implements OnInit {

  repos$: Observable<any>;
  limit = true

  constructor(private gitRepos: GithubReposService) { 
    this.repos$ = this.gitRepos.getAllRepos()
  }

  ngOnInit(): void {
        
  }

  onMoreItems() {
    this.limit = false
  }
}
