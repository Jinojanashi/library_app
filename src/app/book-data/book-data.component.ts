import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {
  records = [
      {
        book_number: '00000001',
        book_name_th: 'หนังสือทดสอบ1',
        book_name_en: 'Testbook1',
        catagory: 'Novel',
        genre: 'romance'
      },
      {
        book_number: '00000001',
        book_name_th: 'หนังสือทดสอบ1',
        book_name_en: 'Testbook1',
        catagory: 'Novel',
        genre: 'romance'
      },
      {
        book_number: '00000001',
        book_name_th: 'หนังสือทดสอบ1',
        book_name_en: 'Testbook1',
        catagory: 'Novel',
        genre: 'romance'
      },
      {
        book_number: '00000001',
        book_name_th: 'หนังสือทดสอบ1',
        book_name_en: 'Testbook1',
        catagory: 'Novel',
        genre: 'romance'
      },
      {
        book_number: '00000001',
        book_name_th: 'หนังสือทดสอบ1',
        book_name_en: 'Testbook1',
        catagory: 'Novel',
        genre: 'romance'
      },
      {
        book_number: '00000001',
        book_name_th: 'หนังสือทดสอบ1',
        book_name_en: 'Testbook1',
        catagory: 'Novel',
        genre: 'romance'
      },
    ]
  constructor(private route : Router) { }

  
  ngOnInit(): void {
  }
  create() 
  { 
    this.route.navigate(['/book/create-edit']);
  }

}
