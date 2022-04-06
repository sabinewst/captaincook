import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() meal!: { id: number, name: string, imageUrl: string, portionSize: string};
  @Output() answer = new EventEmitter<{id: number, name: string}>();

  onClick(item: { id: number, name: string}) {
    this.answer.emit(item)
  }
}
