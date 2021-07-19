import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  cancle() 
  { 
    this.route.navigate(['/book']);
  }
}
