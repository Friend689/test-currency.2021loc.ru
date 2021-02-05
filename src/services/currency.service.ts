import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyService {
  private charCode: string;
  private charValue: string;
  constructor(charCodeValue: string) {
    this.charValue = '';
    this.charCode = charCodeValue;
  }
  protected getHttpValute;
  public getValue(): string {
    this.getHttpValute();
    return this.charValue;
  }
}
