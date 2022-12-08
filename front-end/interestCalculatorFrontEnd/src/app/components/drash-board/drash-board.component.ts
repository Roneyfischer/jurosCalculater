import { Component } from '@angular/core';
import {
  IpostSetInterestRate,
  IreturnInterestRate,
} from 'src/app/interfaces/drashboard/interest-rate';
import * as $ from 'jquery';
@Component({
  selector: 'app-drash-board',
  templateUrl: './drash-board.component.html',
  styleUrls: ['./drash-board.component.css'],
})
export class DrashBoardComponent {
  interestRate!: IreturnInterestRate;
  postSetInterestRate!: IpostSetInterestRate;

  teste(msg: string) {
    alert(msg);
  }
}
