import { Component } from '@angular/core';
import { DailyJsonService } from '../services/daily-json.service';
import { DailyUtf8Service } from '../services/daily-utf8.service';

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
  public curCurrency = '';

  constructor(
    public dailyJson: DailyJsonService,
    public dailyUtf8: DailyUtf8Service,
  ) {
  }

  ngOnInit() {
    this.dailyUtf8.getHttpValute();
    setTimeout(() => {
      this.curCurrency = this.dailyUtf8.charValue;
    }, 300);
    let count = 0;
    setInterval(() => {
      let temp: any = 0;
      if (count <= 5) {
        this.dailyUtf8.getHttpValute();
      } else if (count >= 5 && count <= 10) {
        this.dailyJson.getHttpValute();
        temp = 1;
        if (count === 10) { count = 0;}
      }
      if (this.curCurrency === undefined) {
        count++;
      } else {
        this.curCurrency = temp === 0 ? this.dailyJson.charValue : this.dailyJson.charValue;
      }
  }, 5000);
  }
}
