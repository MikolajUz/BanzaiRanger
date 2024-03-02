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
        // {
        //   herovill: '12 bb',
        //   MP: { path: 'assets/ranges/OR/12bb_MP_open.png' },
        //   CO: { path: 'assets/ranges/OR/12bb_CO_open.png' },
        //   BTN: { path: 'assets/ranges/OR/12bb_BU_open.png' },
        //   SB: { path: 'assets/ranges/OR/12bb_SB_open.png' },
        // },
        // {
        //   herovill: '14 bb',
        //   MP: { path: 'assets/ranges/OR/14bb/MP_open_14bb.png' },
        //   CO: { path: 'assets/ranges/OR/14bb/CO_open_14bb.png' },
        //   BTN: { path: 'assets/ranges/OR/14bb/BU_open_14bb.png' },
        //   SB: { path: 'assets/ranges/OR/14bb/SB_open_14bb.png' },
        // },
        {
          herovill: '16 bb',
          MP: { path: 'assets/ranges/OR/16bb/MP_open_16bb.png' },
          CO: { path: 'assets/ranges/OR/16bb/CO_open_16bb.png' },
          BTN: { path: 'assets/ranges/OR/16bb/BU_open_16bb.png' },
          SB: { path: 'assets/ranges/OR/16bb/SB_open_16bb.png' },
        },
        // {
        //   herovill: '18 bb',
        //   MP: { path: 'assets/ranges/OR/18bb/MP_open_18bb.png' },
        //   CO: { path: 'assets/ranges/OR/18bb/CO_open_18bb.png' },
        //   BTN: { path: 'assets/ranges/OR/18bb/BU_open_18bb.png' },
        //   SB: { path: 'assets/ranges/OR/18bb/SB_open_18bb.png' },
        // },
        {
          herovill: '20 bb',
          MP: { path: 'assets/ranges/OR/20bb/MP_open_20bb.png' },
          CO: { path: 'assets/ranges/OR/20bb/CO_open_20bb.png' },
          BTN: { path: 'assets/ranges/OR/20bb/BU_open_20bb.png' },
          SB: { path: 'assets/ranges/OR/20bb/SB_open_20bb.png' },
        },
      ],
    },
    {
      title: 'Def vs AI on BB',
      columnNames: ['herovill', 'MP', 'CO', 'BTN', 'SB'],
      tableData: [
        {
          herovill: '10 bb',
          MP: { path: 'assets/ranges/DefvsAllin/DEF_BBvsMP_allin_10bb.png' },
          CO: { path: 'assets/ranges/DefvsAllin/DEF_BBvsCO_allin_10bb.png' },
          BTN: { path: 'assets/ranges/DefvsAllin/DEF_BBvsBTN_allin_10bb.png' },
          SB: { path: 'assets/ranges/DefvsAllin/DEF_BBvsSB_allin_10bb.png' },
        },
        {
          herovill: '12 bb',
          MP: { path: 'assets/ranges/DefvsAllin/DEF_BBvsMP_allin.png' },
          CO: { path: 'assets/ranges/DefvsAllin/DEF_BBvsCO_allin.png' },
          BTN: { path: 'assets/ranges/DefvsAllin/DEF_BBvsBu_Allin.png' },
          SB: { path: 'assets/ranges/DefvsAllin/DEF_BBvsSB_allin.png' },
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
