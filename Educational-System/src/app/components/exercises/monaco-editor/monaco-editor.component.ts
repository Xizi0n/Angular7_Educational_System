import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CompileService } from "src/app/services/compile.service";

@Component({
  selector: "app-monaco-editor",
  templateUrl: "./monaco-editor.component.html",
  styleUrls: ["./monaco-editor.component.css"]
})
export class MonacoEditorComponent implements OnInit {
  selectedLanguage: string;
  @Input() language;
  @ViewChild("copilerResult") private compilerResponse;
  editorOptions = { theme: "vs-dark", language: this.language };
  code = `console.log('Hello world!');`;

  editorOption$ = new BehaviorSubject(this.editorOptions);
  compiled = false;

  constructor(private compileService: CompileService) {
    this.editorOption$.subscribe(options => {
      this.editorOptions = null;
      this.editorOptions = options;

      console.log(this.editorOptions.language);
    });
  }

  ngOnInit() {}

  compile() {
    console.log(this.code, this.language);
    this.compileService.compile(this.code, this.language).subscribe(
      (response: any) => {
        // console.log(this.code, this.editorOptions.language);
        console.log(response);
        this.compilerResponse.nativeElement.value = response.result;
      },
      error => {
        console.log(error);
      }
    );
    this.compiled = true;
  }

  languageChanged(event) {
    console.log(event);
  }
}
