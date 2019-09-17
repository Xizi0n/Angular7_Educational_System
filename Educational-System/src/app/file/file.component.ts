import { Component, OnInit, Input } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-file",
  templateUrl: "./file.component.html",
  styleUrls: ["./file.component.css"]
})
export class FileComponent implements OnInit {
  @Input() file;
  BaseUrl = environment.BasePdfUrl;
  fileUrl;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fileUrl =
      this.BaseUrl + this.file.name + "?name=" + this.file.title + ".pdf";
  }

  downloadPdf() {
    fetch(this.fileUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        return res.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const tempLink = document.createElement("a");
        tempLink.style.display = "none";
        tempLink.href = url;
        tempLink.setAttribute("download", this.file.title + ".pdf");
        tempLink.setAttribute("target", "_blank");
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
      })
      .catch(err => console.log(err));
  }
}
