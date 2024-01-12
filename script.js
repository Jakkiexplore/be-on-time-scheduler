

function getCurrentClass(rowHour) {
  var currentTime = moment();
  var rowTime = moment(currentTime);
  
  rowTime.set({hour: rowHour});
