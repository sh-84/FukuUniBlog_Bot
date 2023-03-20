function convertIntoFlex_DaTi(values) { // date title の順番
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
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": releaseDate,
                "flex": 5,
                "size": "sm",
                "color": "#0095db"
              },
              {
                "type": "text",
                "text": "投稿",
                "flex": 11,
                "size": "sm",
                "position": "relative",
                "margin": "sm"
              }
            ]
          },
          {
            "type": "separator"
          },
          {
            "type": "text",
            "wrap": true,
            "weight": "bold",
            "size": "md",
            "text": blogName,
            "margin": "sm",
            "contents": []
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
  contents.push(content);
  };
  console.log(contents);
  return {
    "type": "carousel",
    "contents": contents
  };
}
