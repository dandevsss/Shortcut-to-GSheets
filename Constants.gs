// remove my IDs before committing for obvious reasons, but add in your own spreadsheet IDs below;;
// spreadsheet ID is between /d/ and /edit in the Google Sheet URL and paste it in ' SHEET_ID_HERE ' below
var spreadsheetIds = {
  march1: 'YOUR_SHEET_ID_HERE_AND_BELOW', 
  march2: '',
  april1: '', 
  april2: '',
  may1: '', 
  may2: '',
  june1: '', 
  june2: '',
  july1: '', 
  july2: '',
  august1: '', 
  august2: '',
  september1: '', 
  september2: '',
  october1: '', 
  october2: '',
  november1: '', 
  november2: '',
  december1: '', 
  december2: ''
};

// replace sheetName: 'POCKET_NAME' exactly as in the apple shortcut choices and sheet tab name
// leftMostCol where column choices will begin and rightMostCol where it ends
// just follow the name format
var sheetConstants = {
  wallet: {
    sheetName: 'Wallet',
    remainingAmtCell: 'A4',
    remainingDaysCell: 'C4',
    leftMostCol: 'A',
    leftMostColStartingIndex: 6,
    rightMostCol: 'E'
  },
  gcash: {
    sheetName: 'GCash',
    remainingAmtCell: 'A4',
    remainingDaysCell: 'C4',
    leftMostCol: 'A',
    leftMostColStartingIndex: 6,
    rightMostCol: 'E'
  },
  seabank: {
    sheetName: 'SeaBank',
    remainingAmtCell: 'A4',
    remainingDaysCell: 'C4',
    leftMostCol: 'A',
    leftMostColStartingIndex: 6,
    rightMostCol: 'E'
  },
  pnb: {
    sheetName: 'PNB',
    remainingAmtCell: 'A4',
    remainingDaysCell: 'C4',
    leftMostCol: 'A',
    leftMostColStartingIndex: 6,
    rightMostCol: 'E'
  },
  bdo: {
    sheetName: 'BDO',
    remainingAmtCell: 'A4',
    remainingDaysCell: 'C4',
    leftMostCol: 'A',
    leftMostColStartingIndex: 6,
    rightMostCol: 'E'
  },
  maya: {
    sheetName: 'Maya',
    remainingAmtCell: 'A4',
    remainingDaysCell: 'C4',
    leftMostCol: 'A',
    leftMostColStartingIndex: 6,
    rightMostCol: 'E'
  },
};

var months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july', 
  'august',
  'september',
  'october',
  'november',
  'december'
];
