import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onInputOrSelectChange(select: HTMLSelectElement, input: HTMLInputElement): void {
    const selValue = select.value,
      result = document.getElementById('result') as HTMLDivElement;

    if (input.value === '') {
      result.innerText = '';
      return;
    }

    //If the input value of input is negative number replace value by 1
    if (Number(input.value) < 0) {
      input.value = '1';
    }

    //If the value of input is decimal number, round it to the nearest value
    const roundNumber = Math.round(Number(input.value));
    input.value = `${roundNumber}`;

    const inputValue = Number(input.value);
    switch (selValue) {
      case 'prime':
        result.textContent = `${this.isPrime(inputValue)}`;
        break;
      case 'fibonacci':
        result.textContent = `${this.isFibonacci(inputValue)}`;
        break;
    }
  }

  //Check the value of input in first column is Fibonacci number or Not
  isFibonacci(n: number): boolean {
    const isPerfectSquare = (x: number): boolean => {
      let s = Math.trunc(Math.sqrt(x));
      return s * s == x;
    };

    return (
      isPerfectSquare(5 * Math.pow(n, 2) + 4) ||
      isPerfectSquare(5 * Math.pow(n, 2) - 4)
    );
  }

  //Check the value of input in first column is Prime number or Not
  isPrime(n: number): boolean {
    if (n <= 1) {
      return false;
    }

    //If the number can be divided by other numbers besides 1 and itself, it's not a prime number.
    for (let x = 2; x <= Math.sqrt(n); x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}
