import { Component, OnInit, Input } from '@angular/core';
import { CompileService } from 'src/app/services/compile.service';

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

  constructor(private compileService: CompileService) { }

  ngOnInit() {
  }

  toggleShow() {
    this.shouldBeVisible = !this.shouldBeVisible;
  }

}
