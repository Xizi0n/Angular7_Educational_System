import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CompileService } from 'src/app/services/compile.service';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.css']
})
export class MonacoEditorComponent implements OnInit {

  selectedLanguage: string;

  @ViewChild('copilerResult') private compilerResponse;

  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code = `console.log('Hello world!');`;

  editorOption$ = new BehaviorSubject(this.editorOptions);
  compiled = false;

  constructor( private compileService: CompileService) {
    this.editorOption$.subscribe( options => {
      this.editorOptions = null;
      this.editorOptions = options;

      console.log(this.editorOptions.language);
    });
   }

  ngOnInit() {
  }

  settingsChanged(event) {
    console.log(event.target.value);
    this.editorOptions.language = event.target.value;
    this.editorOption$.next(this.editorOptions);

  }

  compile() {
    this.compileService.compile(this.code, this.editorOptions.language).subscribe( (response: any) => {
      console.log(this.code, this.editorOptions.language);
=======
    this.compileService.compile(this.code, this.selectedLanguage).subscribe( (response: any) => {
>>>>>>> 29ae5f75feed64251b31af1cdeb07c5945eefa3d
      console.log(error);
    });
    this.compiled = true;
  }

}
