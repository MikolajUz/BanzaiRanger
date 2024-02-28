import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  displayedImage: string = '';
  title = 'Def vs 2bb';
  columnNames = ['herovill', 'MP', 'CO', 'BTN', 'SB'];
  tableData = [
 
    {
      herovill: 'CO',
      EP: { path: '../../../../../assets/ranges/test2.png' },
      MP: { path: '../../../../../assets/ranges/test2.png' },
    },
    {
      herovill: 'BTN',
      EP: { path: '../../../../../assets/ranges/test2.png' },
      MP: { path: '../../../../../assets/ranges/test2.png' },
      CO: { path: '../../../../../assets/ranges/test2.png' },
    },

    {
      herovill: 'SB',
      EP: { path: '../../../../../assets/ranges/test2.png' },
      MP: { path: '../../../../../assets/ranges/test2.png' },
      CO: { path: '../../../../../assets/ranges/test2.png' },
      BTN: { path: '../../../../../assets/ranges/test.png' },
    },
    {
      herovill: 'BB',
      EP: { path: '../../../../../assets/ranges/test2.png' },
      MP: { path: '../../../../../assets/ranges/test2.png' },
      CO: { path: '../../../../../assets/ranges/test2.png' },
      BTN: { path: '../../../../../assets/ranges/test2.png' },
      SB: { path: '../../../../../assets/ranges/test2.png' },
    },
  ];

  title2 = 'Open Raise 10bb all';
  columnNames2 = [ 'MP', 'CO', 'BTN', 'SB'];
  tableData2 = [
    {
      MP: { path: 'assets/ranges/OR/OR_MP_10_10_10_10_10.png' },
      CO: { path: 'assets/ranges/OR/OR_CO_10_10_10_10.png' },
      BTN: { path: 'assets/ranges/OR/OR_BTN_10_10_10.png' },
      SB: { path: 'assets/ranges/OR/OR_SB_10_10.png' },
    },
  ];
}
