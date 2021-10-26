import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  myposts: Post[] = [
    {title: 'Time', thought: 'Time is so precious'},
    {title: 'Love', thought: 'Love everyone the same'}
  ]

  thetitle: string='';
  thethought: string='';

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.myposts.push({title: this.thetitle, thought: this.thethought});
  }

}
