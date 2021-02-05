import { Injectable } from "@angular/core";
import { CurrencyService } from "./currency.service";
import { HttpClient } from "@angular/common/http";
import { xml2json } from 'xml-js';

@Injectable()
export class DailyUtf8Service extends CurrencyService {
  constructor(
    private http: HttpClient,
    ) {
    super();
  }
  public getHttpValute() {
    this.http.get('https://www.cbr-xml-daily.ru/daily_utf8.xml', { responseType: "text" }).subscribe(response => {
      let temp = xml2json(response, {compact: true, spaces: 4});
      let result = JSON.parse(temp);
      let currencyEU = result.ValCurs.Valute.filter((el:any) => el.CharCode._text === 'EUR');
      this.charValue = currencyEU[0].Value._text;
    });
  }
}
