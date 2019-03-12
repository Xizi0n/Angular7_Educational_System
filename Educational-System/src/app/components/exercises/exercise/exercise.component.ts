import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  @Input() exercise;
  @Input() index;
  compiled = false;
  shouldBeVisible = false;

  constructor() { }

  ngOnInit() {
  }

  compile() {
    this.compiled = true;
  }

  toggleShow() {
    this.shouldBeVisible = !this.shouldBeVisible;
  }

}
