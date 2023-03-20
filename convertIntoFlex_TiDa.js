function convertIntoFlex_TiDa(values) { // title date の順番
  const contents = [];
  // for(i in values) { // 全データ取得用
  const count = values.length;
  for (var n=0; n<3; n++) {
    let rnd = Math.floor(Math.random() * count); // random -> あとで最新順で取得したい（頑張れ）
    const blogName = values[rnd][0];
    const releaseDate = values[rnd][1];
    const blogUri = values[rnd][2]; // ur'i'->注意
    const heroURL = values[rnd][3];

    const content = {
      "type": "bubble",
      "hero": {
        "type": "image",
        "size": "full",
        "aspectRatio": "3:2",
        "aspectMode": "cover",
        "url": heroURL
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "spacing": "md",
        "contents": [
          {
            "type": "text",
            "wrap": true,
            "weight": "bold",
            "size": "md",
            "text": blogName,
            "contents": []
        },
        {
          "type": "separator"
        },
        {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Date",
                "size": "sm",
                "color": "#999999"
              },
              {
                "type": "text",
                "text": releaseDate,
                "size": "sm",
                "color": "#0095db",
                "offsetStart": "xs",
                "flex": 3
              }
            ],
            "paddingStart": "md"
          }
        ]
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "primary",
            "action": {
              "type": "uri",
              "label": "ブログ詳細",
              "uri": blogUri
            },
            "offsetBottom": "sm"
          },
          {
            "type": "button",
            "action": {
              "type": "uri",
              "label": "See more",
              "uri": "https://www.fukuyama-u.ac.jp/blog/"
            },
            "style": "secondary"
        }
        ]
      }
    };
  contents.push(content); // コンテンツに追加する
  };
  console.log(contents);
  return {
    "type": "carousel",
    "contents": contents
  };
}
