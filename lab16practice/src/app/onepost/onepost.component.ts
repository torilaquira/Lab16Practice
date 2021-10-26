import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent implements OnInit {

  @Input() theposts: Post={
    title: 'Love',
    thought: 'Love everyone'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
