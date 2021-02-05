import { Component } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public arrSources = [
    {
      url: 'https://www.cbr-xml-daily.ru/daily_utf8.xml',
      respType: "text",
    },
    {
      url: 'https://www.cbr-xml-daily.ru/daily_json.js',
      respType: 'json',
    },];
  public curSource = 0;
  public arrCurrency = [];

  // constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCurrency();
  }

  public getCurrency() {
    // let curEl = this.arrSources[this.curSource];

  }
}
