import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Walking on water and developing software from a specification are easy if both are frozen.', 'Marvin Minsky',new Date(2020,3,14)),
    new Quote('You can only become truly accomplished at something you love.', 'Maya Angelou',new Date(2020,6,9)),
    new Quote('A conscious human is driven by their conscience, not popular opinion.', 'Paul Graham',new Date(2022,1,12)),

  ];
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].text}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
