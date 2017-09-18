import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {



  @Output() thingSelected = new EventEmitter<object>();

  selectedCard: object;

  @Input() title;



  constructor() { }

  ngOnInit() {
  }

  clickedCard(cardIClicked) {
    this.selectedCard = cardIClicked;
    this.selectedCard.emit(cardIClicked);
  }



}


