// GET

/**
 * Built-in webapp method for GET requests
 */
function doGet(e) {
  try {
    const respData = handleGet(e);
    return ContentService.createTextOutput(JSON.stringify(respData)).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    console.log('Failed GET with error %s', err.message);
  }
}
//copy from case to break; and replace the word "Wallet" to your account name as many as you want
function handleGet(e) {
  let data = {};
  switch(e.parameter.choice) {
    case 'WALLET': 
      data = getDataWallet();
      break;
    case 'GCASH': 
      data = getDataGCash();
      break;
    case 'SEABANK': 
      data = getDataSeaBank();
      break;
    case 'PNB': 
      data = getDataPNB();
      break;
    case 'BDO': 
      data = getDataBDO();
      break;
    case 'MAYA': 
      data = getDataMaya();
      break;
  }

  const finalData = {
    ...getDataShared(), 
    ...data
  };

  return finalData;
}

//Replace the word "Wallet" to your account name from here and copy paste as much as you want
function getDataWallet() {
  // Get remaining amount in bimonthly period
  const sc = sheetConstants.wallet;
  return {
    remainingAmountWallet: Number(getCellValue(sc.remainingAmtCell, sc.sheetName))
  };
}
//ending in here

function getDataGCash() {
  // Get remaining amount in bimonthly period
  const sc = sheetConstants.gcash;
  return {
    remainingAmountGCash: Number(getCellValue(sc.remainingAmtCell, sc.sheetName))
  };
}
function getDataSeaBank() {
  // Get remaining amount in bimonthly period
  const sc = sheetConstants.seabank;
  return {
    remainingAmountSeaBank: Number(getCellValue(sc.remainingAmtCell, sc.sheetName))
  };
}
function getDataPNB() {
  // Get remaining amount in bimonthly period
  const sc = sheetConstants.pnb;
  return {
    remainingAmountPNB: Number(getCellValue(sc.remainingAmtCell, sc.sheetName))
  };
}
function getDataBDO() {
  // Get remaining amount in bimonthly period
  const sc = sheetConstants.bdo;
  return {
    remainingAmountBDO: Number(getCellValue(sc.remainingAmtCell, sc.sheetName))
  };
}
function getDataMaya() {
  // Get remaining amount in bimonthly period
  const sc = sheetConstants.maya;
  return {
    remainingAmountMaya: Number(getCellValue(sc.remainingAmtCell, sc.sheetName))
  };
}


// POST ACTION

/**
 * Built-in webapp method for POST requests
 */
function doPost(e) {
  try {
    handlePost(e);
  } catch(err) {
    console.log('Failed POST with error %s', err.message);
  }
}

//Replace name to your account again here from case to break;
//if you're gonna add a action in the apple shortcut, add in the (req.ACTION_NAME) in the exact same order as in the sheets and shortcut
function handlePost(e) {
  const req = JSON.parse(e.postData.contents);
  switch(req.type) {
    case 'WALLET': 
      logPurchaseWallet(req.date, req.category, req.description, req.amount, req.notes);
      break;
    case 'GCASH': 
      logPurchaseGCash(req.date, req.category, req.description, req.amount, req.notes);
      break;
    case 'SEABANK': 
      logPurchaseSeaBank(req.date, req.category, req.description, req.amount, req.notes);
      break;
    case 'PNB': 
      logPurchasePNB(req.date, req.category, req.description, req.amount, req.notes);
      break;
    case 'BDO': 
      logPurchaseBDO(req.date, req.category, req.description, req.amount, req.notes);
      break;
    case 'MAYA': 
      logPurchaseMaya(req.date, req.category, req.description, req.amount, req.notes);
      break;
  }
}

/**
 * Log purchase to wallet sheet
 */
// logpurchase should be the same as in the action order, sheets column order, and especially in this code 
function logPurchaseWallet(date, category, description, amount, notes) {
  const sc = sheetConstants.wallet;
  logPurchase(date, category, description, amount, notes, sc.sheetName, sc.leftMostCol, sc.leftMostColStartingIndex, sc.rightMostCol);
}
function logPurchaseGCash(date, category, description, amount, notes) {
  const sc = sheetConstants.gcash;
  logPurchase(date, category, description, amount, notes, sc.sheetName, sc.leftMostCol, sc.leftMostColStartingIndex, sc.rightMostCol);
}
function logPurchaseSeaBank(date, category, description, amount, notes) {
  const sc = sheetConstants.seabank;
  logPurchase(date, category, description, amount, notes, sc.sheetName, sc.leftMostCol, sc.leftMostColStartingIndex, sc.rightMostCol);
}
function logPurchasePNB(date, category, description, amount, notes) {
  const sc = sheetConstants.pnb;
  logPurchase(date, category, description, amount, notes, sc.sheetName, sc.leftMostCol, sc.leftMostColStartingIndex, sc.rightMostCol);
}
function logPurchaseBDO(date, category, description, amount, notes) {
  const sc = sheetConstants.bdo;
  logPurchase(date, category, description, amount, notes, sc.sheetName, sc.leftMostCol, sc.leftMostColStartingIndex, sc.rightMostCol);
}
function logPurchaseMaya(date, category, description, amount, notes) {
  const sc = sheetConstants.maya;
  logPurchase(date, category, description, amount, notes, sc.sheetName, sc.leftMostCol, sc.leftMostColStartingIndex, sc.rightMostCol);
}
