import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.css']
})
export class MonacoEditorComponent implements OnInit {

  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code = 'function x() {\nconsole.log("Hello world!");\n}';

  editorOption$ = new BehaviorSubject(this.editorOptions);

  constructor() {
    this.editorOption$.subscribe( options => {
      this.editorOptions = null;
      this.editorOptions = options;

      console.log(this.editorOptions.language);
    });
   }

  ngOnInit() {
  }

  settingsChanged(event) {
    this.editorOptions.language = document.getElementsByTagName('select')[0].value;
    this.editorOption$.next(this.editorOptions);

  }

  editorChanged(event) {
    //
  }

}
