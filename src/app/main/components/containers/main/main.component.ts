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
          MP: { path: 'assets/ranges/OR/12bb_MP_open.png' },
          CO: { path: 'assets/ranges/OR/12bb_CO_open.png' },
          BTN: { path: 'assets/ranges/OR/12bb_BU_open.png' },
          SB: { path: 'assets/ranges/OR/12bb_SB_open.png' },
        },
        {
          herovill: '14 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: { path: '-' },
          SB: { path: '-' },
        },
        {
          herovill: '16 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: { path: '-' },
          SB: { path: '-' },
        },
        {
          herovill: '18 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: { path: '-' },
          SB: { path: '-' },
        },
        {
          herovill: '20 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: { path: '-' },
          SB: { path: '-' },
        },
      ],
    },
    {
      title: 'Def vs AI on BB',
      columnNames: ['herovill', 'MP', 'CO', 'BTN', 'SB'],
      tableData: [
        {
          herovill: '10 bb',
          MP: { path: 'assets/ranges/DefvsAllin/DEF_BBvsMP_allin.png' },
          CO: { path: 'assets/ranges/DefvsAllin/DEF_BBvsCO_allin.png' },
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
        {
          herovill: '14 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: { path: '-' },
          SB: { path: '-' },
        },
        {
          herovill: '16 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: { path: '-' },
          SB: { path: '-' },
        },
        {
          herovill: '18 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: { path: '-' },
          SB: { path: '-' },
        },
        {
          herovill: '20 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: { path: '-' },
          SB: { path: '-' },
        },
      ],
    },
  ];
}
