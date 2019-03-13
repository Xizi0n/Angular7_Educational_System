import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CompileService } from 'src/app/services/compile.service';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.css']
})
export class MonacoEditorComponent implements OnInit {

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
    this.editorOptions.language = document.getElementsByTagName('select')[0].value;
    this.editorOption$.next(this.editorOptions);

  }

  editorChanged(event) {
    //
  }

  compile() {
    this.compileService.compile(this.code, 'javascript').subscribe( (response: any) => {
      console.log(response);
      this.compilerResponse.nativeElement.value = response.result;
    }, error => {
      console.log(error);
    });
    this.compiled = true;
  }

}
