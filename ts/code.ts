function doGet(e: GoogleAppsScript.Events.DoGet): any {
  Logger.log("Hello!");

  // return HtmlService.createHtmlOutput("ハローワールド！");

  return ContentService.createTextOutput("Hello, ワールド!")
    .setMimeType(ContentService.MimeType.TEXT);
}
