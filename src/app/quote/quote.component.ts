import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Walking on water and developing software from a specification are easy if both are frozen.', 'Marvin Minsky'),
    new Quote('You can only become truly accomplished at something you love.', 'Maya Angelou'),
    new Quote('A conscious human is driven by their conscience, not popular opinion.', 'Paul Graham'),


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
