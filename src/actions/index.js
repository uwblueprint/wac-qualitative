export * from './pageNumActions';

export const exportCsv = (items) => {
    let convertJSONToCSV = (objArray) => {
      // CSVs require carriage-return characters with newlines because of some excel quirks
      var str = 'Questions,Answers\r\n';
      for (var i = 0; i < objArray.length; i++) {
          var line = '';
          line += objArray[i]["question"] + ',' + objArray[i]["answer"];
          str += line + '\r\n';
      }
      return str;
    };
  
    // Convert input to CSV
    var csv = convertJSONToCSV(items);
    var fileName = 'wac-survey-results.csv';
  
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, fileName);
  
    // Roundabout way of triggering the download
    } else {
      var link = document.createElement("a");
      if (link.download !== undefined) {
          var url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", fileName);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }
    }   
  }