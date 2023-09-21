"use strict";
function doGet(e) {
    Logger.log("Hello!");
    // return HtmlService.createHtmlOutput("ハローワールド！");
    return ContentService.createTextOutput("Hello, ワールド!")
        .setMimeType(ContentService.MimeType.TEXT);
}
