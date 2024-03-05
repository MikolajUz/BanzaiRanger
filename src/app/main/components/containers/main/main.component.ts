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
      columnNames: this.columnNames,
      tableData: [
        {
          herovill: '10 bb',
          MP: { path: 'assets/ranges/OR/10bb_MP_open.png' },
          CO: { path: 'assets/ranges/OR/10bb_CO_open.png' },
          BTN: { path: 'assets/ranges/OR/10bb_BU_open.png' },
          SB: { path: 'assets/ranges/OR/10bb_SB_open.png' },
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
      columnNames: this.columnNames,
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
          MP: { path: 'assets/ranges/DefvsAllin/14/DEF_BBvsMP_14BBAllin.png' },
          CO: { path: 'assets/ranges/DefvsAllin/14/DEF_BBvsCO_14BBAllin.png' },
          BTN: { path: 'assets/ranges/DefvsAllin/14/DEF_BBvsBU_14BBAllin.png' },
          SB: { path: 'assets/ranges/DefvsAllin/14/DEF_BBvsSB_14BBAllin.png' },
        },
        {
          herovill: '16 bb',
          MP: { path: 'assets/ranges/DefvsAllin/16/DEF_BBvsMP_16BBAllin.png' },
          CO: { path: 'assets/ranges/DefvsAllin/16/DEF_BBvsCO_16BBAllin.png' },
          BTN: { path: 'assets/ranges/DefvsAllin/16/DEF_BBvsBU_16BBAllin.png' },
          SB: { path: 'assets/ranges/DefvsAllin/16/DEF_BBvsSB_16BBAllin.png' },
        },
        {
          herovill: '18 bb',
          MP: { path: 'assets/ranges/DefvsAllin/18/DEF_BBvsMP_18BBAllin.png' },
          CO: { path: 'assets/ranges/DefvsAllin/18/DEF_BBvsCO_18BBAllin.png' },
          BTN: { path: 'assets/ranges/DefvsAllin/18/DEF_BBvsBU_18BBAllin.png' },
          SB: { path: 'assets/ranges/DefvsAllin/18/DEF_BBvsSB_18BBAllin.png' },
        },
        {
          herovill: '20 bb',
          MP: { path: 'assets/ranges/DefvsAllin/20/DEF_BBvsMP_20BBAllin.png' },
          CO: { path: 'assets/ranges/DefvsAllin/20/DEF_BBvsCO_20BBAllin.png' },
          BTN: { path: 'assets/ranges/DefvsAllin/20/DEF_BBvsBU_20BBAllin.png' },
          SB: { path: 'assets/ranges/DefvsAllin/20/DEF_BBvsSB_20BBAllin.png' },
        },
      ],
    },
    {
      title: 'Def vs 2bb & 3bet',
      columnNames: this.columnNames,
      tableData: [
        {
          herovill: '10 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: {
            path: 'assets/ranges/Defvs2bb_vs3bet/10/10bb_DEF_BB_vs_BU_2x.png',
          },
          SB: {
            path: 'assets/ranges/Defvs2bb_vs3bet/10/10bb_DEF_BB_vs_SB_2x.png',
          },
        },
        {
          herovill: '12 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: {
            path: 'assets/ranges/Defvs2bb_vs3bet/12/12bb_DEF_BB_vs_BU_2x.png',
          },
          SB: {
            path: 'assets/ranges/Defvs2bb_vs3bet/12/12bb_DEF_BB_vs_SB_25x.png',
          },
        },
        {
          herovill: '14 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: {
            path: 'assets/ranges/Defvs2bb_vs3bet/14/14bb_DEF_BB_vs_BU_open2bb.png',
          },
          SB: {
            path: 'assets/ranges/Defvs2bb_vs3bet/14/14bb_DEF_BB_vs_SB_2,5x.png',
          },
        },
        {
          herovill: '16 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: {
            path: 'assets/ranges/Defvs2bb_vs3bet/16/16bb_DEF_BB_vs_BU_2x.png',
          },
          SB: {
            path: 'assets/ranges/Defvs2bb_vs3bet/16/16bb_DEF_BB_vs_SB_25x.png',
          },
        },
        {
          herovill: '18 bb',
          MP: { path: '-' },
          CO: { path: '-' },
          BTN: {
            path: 'assets/ranges/Defvs2bb_vs3bet/18/DEF_BBvsBU_18BB_vs2BB.png',
          },
          SB: {
            path: 'assets/ranges/Defvs2bb_vs3bet/18/DEF_BBvsSB_18BB_vs2BB.png',
          },
        },
        {
          herovill: '20 bb',
          MP: {
            path: 'assets/ranges/Defvs2bb_vs3bet/20/DEF_BBvsMP_20BB_vs2BB.png',
          },
          CO: {
            path: 'assets/ranges/Defvs2bb_vs3bet/20/DEF_BBvsCO_20BB_vs2BB.png',
          },
          BTN: {
            path: 'assets/ranges/Defvs2bb_vs3bet/20/DEF_BBvsBU_20BB_vs2BB.png',
          },
          SB: {
            path: 'assets/ranges/Defvs2bb_vs3bet/20/DEF_BBvsSB_20BB_vs2BB.png',
          },
        },
      ],
    },
  ];
}
