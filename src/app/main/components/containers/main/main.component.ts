import { Component, OnInit } from '@angular/core';

interface position {
  path: string;
}

interface chartData {
  title: string;
  columnNames: string[];
  tableData: {
    herovill: string;
    MP: position;
    CO: position;
    BTN: position;
    SB: position;
  }[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  ngOnInit(): void {
    console.log('table', this.table[0].title);
  }
  displayedImage: string = '';
  columnNames = ['herovill', 'MP', 'CO', 'BTN', 'SB'];

  title = 'Def vs 2bb';

  tableData = [
    {
      herovill: 'CO',

      MP: { path: '../../../../../assets/ranges/test2.png' },
    },
    {
      herovill: 'BTN',

      MP: { path: '../../../../../assets/ranges/test2.png' },
      CO: { path: '../../../../../assets/ranges/test2.png' },
    },

    {
      herovill: 'SB',

      MP: { path: '../../../../../assets/ranges/test2.png' },
      CO: { path: '../../../../../assets/ranges/test2.png' },
      BTN: { path: '../../../../../assets/ranges/test.png' },
    },
    {
      herovill: 'BB',

      MP: { path: '../../../../../assets/ranges/test2.png' },
      CO: { path: '../../../../../assets/ranges/test2.png' },
      BTN: { path: '../../../../../assets/ranges/test2.png' },
      SB: { path: '../../../../../assets/ranges/test2.png' },
    },
  ];

  title2 = 'Open Raise 10bb all';
  columnNames2 = ['MP', 'CO', 'BTN', 'SB'];
  tableData2 = [{}];

  table: chartData[] = [
    {
      title: 'Open Raise',
      columnNames: ['herovill', 'MP', 'CO', 'BTN', 'SB'],
      tableData: [
        {
          herovill: '10 bb',
          MP: { path: 'assets/ranges/OR/OR_MP_10_10_10_10_10.png' },
          CO: { path: 'assets/ranges/OR/OR_CO_10_10_10_10.png' },
          BTN: { path: 'assets/ranges/OR/OR_BTN_10_10_10.png' },
          SB: { path: 'assets/ranges/OR/OR_SB_10_10.png' },
        },
        {
          herovill: '12 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: { path: 'assets/ranges/OR/12bb_BU_open.png' },
          SB: { path: 'assets/ranges/OR/12bb_SB_open.png' },
        },
      ],
    },
    {
      title: 'Def vs AI on BB',
      columnNames: ['herovill', 'MP', 'CO', 'BTN', 'SB'],
      tableData: [
        {
          herovill: '10 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: { path: 'assets/ranges/DefvsAllin/DEF_BBvsBu_Allin.png' },
          SB: { path: 'assets/ranges/DefvsAllin/DEF_BBvsSB_allin.png' },
        },
        {
          herovill: '12 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: { path: '-' },
          SB: { path: '-' },
        },
      ],
    },
  ];
}
