// remove my IDs before committing for obvious reasons, but add in your own spreadsheet IDs below;;
// spreadsheet ID is between /d/ and /edit in the Google Sheet URL and paste it in ' SHEET_ID_HERE ' below
var spreadsheetIds = {
  march1: 'YOUR_SHEET_ID_HERE', 
  march2: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw',
  april1: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw', 
  april2: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw',
  may1: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw', 
  may2: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw',
  june1: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw', 
  june2: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw',
  july1: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw', 
  july2: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw',
  august1: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw', 
  august2: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw',
  september1: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw', 
  september2: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw',
  october1: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw', 
  october2: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw',
  november1: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw', 
  november2: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw',
  december1: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw', 
  december2: '1yi-1vFX2u1VQ7IC0yuQyr713Bz3njaowxUpSi35Mdhw'
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
