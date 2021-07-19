import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-guest',
  templateUrl: './book-guest.component.html',
  styleUrls: ['./book-guest.component.css']
})
export class BookGuestComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
