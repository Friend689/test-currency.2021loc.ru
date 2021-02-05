export interface Currency {
  charCode: string;
  charValue: string;
  getHttpValute(): void;
  getValue(): string;
}
