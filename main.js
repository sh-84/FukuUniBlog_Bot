function start() {
    console.log("start");

    values = sheetGet();
    // Pattern A
    // const data = convertIntoFlex_TiDa(values);
    // Pattern B
    const data = convertIntoFlex_DaTi(values);

    broadcast(data);
  }

  function sheetGet() {
    // スプレッドシートの連携
    const ss = SpreadsheetApp.openById('1PSAm7r1GuF0UEm3dErTox16hf1akVNmNu6x-TsS3szg');
    const sheet = ss.getSheetByName('フォームの回答 1');
    // スプレッドシート全体の取得 ※ getDisplayValues は日付を文字列(yyyy/MM/dd)で取り込むため
    const values = sheet.getRange(2,2, sheet.getLastRow()-1, sheet.getLastColumn()-1).getDisplayValues();
    // スプレッドシートの年月部分のみ取得(比較の時に使う用)
    //const dateValues = sheet.getRange(2,3, sheet.getLastRow()-1).getDisplayValues();

    return values
  }

  function broadcast(content) {
    const channelToken = PropertiesService.getScriptProperties().getProperty('ACCESS_TOKEN');
    const broadcastUrl = 'https://api.line.me/v2/bot/message/broadcast';
    const payload = {
      messages: [
        {
          type: "flex",
          altText: "ブログ情報をお届けします！",
          contents: content,
        }
      ]
    };

    const params = {
      method: 'post',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer ' + channelToken,
      },
      payload: JSON.stringify(payload),
      //muteHttpExceptions: true, // to find error
    };
    UrlFetchApp.fetch(broadcastUrl, params);

    /* // to check for error
    try {
      const res = UrlFetchApp.fetch(broadcastUrl, params);
      Logger.log("res" , res);
    } catch(e) {
      Logger.log("error: ");
      Logger.log(e);
    } */
  }

  /*
  // 最新から2件を取得する関数(未完成)
  function readyReplyData(values, dateValues) {
    const stackMain = 0;
    const stackSub = 0;
    const count = dateValues.length();


    for (const i=1;i<count; i++){
      if (dateValues[i] > dateValues[stackMain]) {
        stackSub = stackMain;
        stackMain = i;
        return;
      } else {
        return;
      }
    }
  }
  */
