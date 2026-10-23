/*
  Album data. To add a photo:
  1. Put a large image at assets/album/<chapter>/<name>.jpg and a small one at <name>-t.jpg
  2. Add a line to that chapter's `photos` list below.
  `w`/`h` are the full image's size; `doc: true` shows it as a framed certificate;
  `feature: true` makes it the big tile (use a landscape photo); `pano: true` makes a
  full-width strip; `place` links a travel photo to a stamp.
*/
window.ALBUM = [
  {
    id: 'speech', kanji: '話',
    title: { ja: 'スピーチ大会', en: 'Speech Contest' },
    when: { ja: '2023年9月', en: 'September 2023' },
    where: { ja: '岡山外語学院', en: 'Okayama Institute of Languages' },
    story: {
      ja: '22か国から約250名の学生が参加したスピーチ大会で1位となり、優勝カップと金メダルをいただきました。この結果は、日本のテレビや新聞、電子新聞でも紹介されました。',
      en: 'I took first place out of about 250 students from 22 countries and received the winner\'s cup and a gold medal. The result was covered by Japanese TV, newspapers and online news.'
    },
    facts: [
      { ja: '1位・金メダル', en: '1st place · gold medal' },
      { ja: '22か国・約250名', en: '22 countries · ~250 students' },
      { ja: 'スピーチ題「私の夢」', en: 'Speech title: “My Dream”' },
      { ja: 'テレビ・新聞・webマガジンで紹介', en: 'Featured on TV, in newspapers and online' }
    ],
    links: [
      { href: 'https://www.youtube.com/watch?v=laDMdR_SR9o', ja: 'スピーチ動画 ↗', en: 'Speech video ↗' },
      { href: 'https://web-opinions.jp/posts/detail/676', ja: '掲載記事 ↗', en: 'Article ↗' }
    ],
    photos: [
      { src: 'speech/medal', w: 1600, h: 901, feature: true, ja: '金メダルをいただいた瞬間', en: 'Receiving the gold medal' },
      { src: 'speech/stage', w: 865, h: 1536, ja: 'スピーチ本番', en: 'On stage' },
      { src: 'speech/tv', w: 1080, h: 608, ja: 'テレビ局のインタビュー', en: 'Interviewed by a TV crew' },
      { src: 'speech/group', w: 1600, h: 901, ja: '大会後、皆さんと一緒に', en: 'With everyone after the contest' },
      { src: 'speech/cup', w: 206, h: 206, ja: '優勝カップの授与', en: 'Receiving the winner\'s cup' },
      { src: 'speech/news-interview', w: 800, h: 450, news: true, big: true, ja: 'テレビニュースで紹介されました', en: 'Featured on local TV news' },
      { src: 'speech/news-title', w: 800, h: 450, news: true, ja: 'ニュース「留学生の日本での夢は？」', en: 'News: students\' dreams in Japan' },
      { src: 'speech/news-award', w: 800, h: 450, news: true, ja: 'ニュース：表彰', en: 'News: the award' },
      { src: 'speech/news-chair', w: 800, h: 450, news: true, ja: 'ニュース：理事長のコメント', en: 'News: the chairperson' }
    ]
  },
  {
    id: 'awards', kanji: '賞',
    title: { ja: '表彰・奨学金', en: 'Awards & scholarship' },
    tab: { ja: '表彰・奨学金', en: 'Awards' },
    when: { ja: '2023年', en: '2023' },
    where: { ja: '岡山外語学院', en: 'Okayama Institute of Languages' },
    story: {
      ja: '2023年度前期、無遅刻・無欠席で皆勤賞をいただきました。また、出席率と成績が評価され、ナカシマプロペラ株式会社から奨学金をいただきました。',
      en: 'In the first half of the 2023 school year, I was never late and never absent, and received a perfect-attendance award. My attendance and grades also earned me a scholarship from Nakashima Propeller Co., Ltd.'
    },
    facts: [
      { ja: '皆勤賞（無遅刻・無欠席）', en: 'Perfect attendance award' },
      { ja: 'ナカシマプロペラ株式会社 奨学金', en: 'Nakashima Propeller scholarship' }
    ],
    photos: [
      { src: 'awards/nakashima-group', w: 1478, h: 1108, feature: true, ja: '奨学金授与式', en: 'Scholarship ceremony' },
      { src: 'awards/kaikin', w: 1600, h: 1558, doc: true, ja: '皆勤賞（2023年9月22日）', en: 'Perfect attendance award (Sept 22, 2023)' },
      { src: 'awards/nakashima', w: 206, h: 206, ja: '奨学金をいただいた時', en: 'Receiving the scholarship' }
    ]
  },
  {
    id: 'volunteer', kanji: '川',
    title: { ja: '川掃除のボランティア', en: 'River clean-up volunteering' },
    tab: { ja: 'ボランティア', en: 'Volunteering' },
    when: { ja: '2023年度 上半期', en: 'April–September 2023' },
    where: { ja: '岡山市 岡輝公民館・西川用水／枝川用水', en: 'Kouki Community Center, Okayama · Nishigawa & Edagawa canals' },
    story: {
      ja: '地域ボランティア団体「西川・枝川用水をきれいにし隊」の活動に参加し、地域の方々やさまざまな国の学生と一緒に用水路の清掃を行いました。言葉や文化が違っても、同じ目標に向かって協力する大切さを学びました。',
      en: 'I joined a local volunteer group cleaning Okayama\'s Nishigawa and Edagawa canals, working side by side with residents and students from many countries. It taught me how a team with different languages can still pull toward one goal.'
    },
    facts: [
      { ja: '参加証明書あり', en: 'Certificate of participation' },
      { ja: '地域の方々と協力', en: 'Worked with local residents' }
    ],
    photos: [
      { src: 'volunteer/group', w: 1600, h: 632, pano: true, ja: '参加者の皆さんと', en: 'With the volunteer team' },
      { src: 'volunteer/v4', w: 1109, h: 1479, ja: '用水路の草を取る', en: 'Clearing weeds from the canal' },
      { src: 'volunteer/v2', w: 1479, h: 1109, ja: '道の清掃', en: 'Sweeping the path' },
      { src: 'volunteer/v1', w: 1109, h: 1479, ja: '集めた草を運ぶ', en: 'Carrying the cut weeds' },
      { src: 'volunteer/v5', w: 1479, h: 1109, ja: '川沿いでの作業', en: 'Working along the canal' },
      { src: 'volunteer/v3', w: 1109, h: 1479, ja: '水路の中での作業', en: 'Working in the waterway' },
      { src: 'volunteer/certificate', w: 1519, h: 1600, doc: true, ja: 'ボランティア参加証明書', en: 'Certificate of participation' }
    ]
  },
  {
    id: 'events', kanji: '祭',
    title: { ja: '学校のイベント', en: 'School events' },
    when: { ja: '2022年〜', en: '2022 onward' },
    where: { ja: '岡山', en: 'Okayama' },
    story: {
      ja: '日本語学校の行事や運動会、岡山芸術創造劇場ハレノワでのイベントなどに参加しました。いろいろな国の友達と一緒に、日本の文化を体験しながら交流を深めました。',
      en: 'School festivals, sports day, and an event at Okayama\'s Harenowa theater. Each one was a chance to experience Japanese culture with friends from many countries.'
    },
    facts: [
      { ja: '多国籍の仲間と交流', en: 'Friends from many countries' }
    ],
    photos: [
      { src: 'events/school', w: 1600, h: 1200, feature: true, ja: '日本語学校のイベント', en: 'Language school event' },
      { src: 'events/harenowa', w: 1600, h: 1066, ja: '岡山芸術創造劇場ハレノワのイベント', en: 'Event at Harenowa theater' },
      { src: 'events/class', w: 1600, h: 1066, ja: '学校での発表', en: 'Presenting at school' },
      { src: 'events/party', w: 1600, h: 1200, ja: 'クラスの友達と', en: 'With classmates' },
      { src: 'events/sports', w: 206, h: 206, ja: '運動会', en: 'Sports day' }
    ]
  },
  {
    id: 'travel', kanji: '旅',
    title: { ja: '旅行', en: 'Travel' },
    when: { ja: '2022年〜', en: '2022 onward' },
    where: { ja: '8都府県', en: '8 prefectures' },
    story: {
      ja: '休みの日には、日本各地を訪れています。歴史や自然、街並みを自分の目で見ることで、日本のことがもっと好きになりました。スタンプを押すと、その場所の写真だけを表示します。',
      en: 'On days off I travel around Japan. Seeing its history, nature and cities first-hand made me love the country more. Tap a stamp to see photos from that place.'
    },
    places: [
      { id: 'nikko', ja: '日光', en: 'Nikko', pref: { ja: '栃木', en: 'Tochigi' } },
      { id: 'tokyo', ja: '東京', en: 'Tokyo', pref: { ja: '東京', en: 'Tokyo' } },
      { id: 'disney', ja: '舞浜', en: 'Maihama', pref: { ja: '千葉', en: 'Chiba' } },
      { id: 'hakone', ja: '箱根', en: 'Hakone', pref: { ja: '神奈川', en: 'Kanagawa' } },
      { id: 'fuji', ja: '富士山', en: 'Mt. Fuji', pref: { ja: '山梨', en: 'Yamanashi' } },
      { id: 'kyoto', ja: '京都', en: 'Kyoto', pref: { ja: '京都', en: 'Kyoto' } },
      { id: 'okayama', ja: '岡山', en: 'Okayama', pref: { ja: '岡山', en: 'Okayama' } },
      { id: 'hiroshima', ja: '広島', en: 'Hiroshima', pref: { ja: '広島', en: 'Hiroshima' } },
      { id: 'seasons', ja: '四季', en: 'Seasons', pref: { ja: '各地', en: 'Various' } }
    ],
    photos: [
      { src: 'travel/miyajima-friends', w: 1478, h: 1108, place: 'hiroshima', feature: true, ja: '宮島・大鳥居を背に友人と', en: 'With friends at Miyajima' },
      { src: 'travel/inari', w: 1109, h: 1479, place: 'kyoto', ja: '伏見稲荷大社の千本鳥居', en: 'Senbon torii, Fushimi Inari' },
      { src: 'travel/peace', w: 900, h: 1600, place: 'hiroshima', ja: '平和記念公園・原爆ドーム', en: 'Atomic Bomb Dome, Peace Memorial Park' },
      { src: 'travel/fuji', w: 1600, h: 1200, place: 'fuji', ja: '富士山', en: 'Mt. Fuji' },
      { src: 'travel/arashiyama', w: 1108, h: 1478, place: 'kyoto', ja: '嵐山の竹林', en: 'Arashiyama bamboo grove' },
      { src: 'travel/hakone', w: 1600, h: 1600, place: 'hakone', ja: '芦ノ湖の海賊船', en: 'Pirate ship on Lake Ashi' },
      { src: 'travel/okayama-castle', w: 1600, h: 1200, place: 'okayama', ja: '夜の岡山城', en: 'Okayama Castle at night' },
      { src: 'travel/nikko', w: 1600, h: 900, place: 'nikko', ja: '日光・中禅寺湖', en: 'Lake Chuzenji, Nikko' },
      { src: 'travel/shibuya', w: 1200, h: 1600, place: 'tokyo', ja: '渋谷', en: 'Shibuya' },
      { src: 'travel/kurashiki', w: 1200, h: 1600, place: 'okayama', ja: '倉敷美観地区', en: 'Kurashiki Bikan district' },
      { src: 'travel/miyajima', w: 768, h: 768, place: 'hiroshima', ja: '宮島から瀬戸内海を望む', en: 'Looking over the Seto Inland Sea, Miyajima' },
      { src: 'travel/korakuen', w: 1600, h: 1200, place: 'okayama', ja: '岡山後楽園', en: 'Korakuen Garden' },
      { src: 'travel/nantai', w: 1600, h: 900, place: 'nikko', ja: '男体山', en: 'Mt. Nantai' },
      { src: 'travel/odaiba', w: 1200, h: 1600, place: 'tokyo', ja: 'お台場の自由の女神', en: 'Statue of Liberty, Odaiba' },
      { src: 'travel/oshino', w: 1600, h: 1200, place: 'fuji', ja: '忍野八海と富士山', en: 'Oshino Hakkai and Mt. Fuji' },
      { src: 'travel/fujiq', w: 1200, h: 1600, place: 'fuji', ja: '富士急ハイランド', en: 'Fuji-Q Highland' },
      { src: 'travel/disneysea', w: 960, h: 720, place: 'disney', ja: '東京ディズニーシー', en: 'Tokyo DisneySea' },
      { src: 'travel/hakone-view', w: 1200, h: 1600, place: 'hakone', ja: '箱根の展望台', en: 'Lookout in Hakone' },
      { src: 'travel/skytree', w: 1200, h: 1600, place: 'tokyo', ja: '東京スカイツリー', en: 'Tokyo Skytree' },
      { src: 'travel/asakusa', w: 1600, h: 1200, place: 'tokyo', ja: '浅草寺・宝蔵門', en: 'Hozomon gate, Senso-ji' },
      { src: 'travel/gundam', w: 1200, h: 1600, place: 'tokyo', ja: 'お台場のユニコーンガンダム', en: 'Unicorn Gundam, Odaiba' },
      { src: 'travel/roppongi', w: 900, h: 1600, place: 'tokyo', ja: '六本木のイルミネーション', en: 'Roppongi illuminations' },
      { src: 'travel/temple-autumn', w: 1600, h: 900, place: 'seasons', ja: '紅葉の参道', en: 'Autumn temple path' },
      { src: 'travel/sakura', w: 1600, h: 1200, place: 'seasons', ja: '川沿いの桜並木', en: 'Cherry blossoms by the river' },
      { src: 'travel/momiji', w: 1600, h: 900, place: 'seasons', ja: '紅葉', en: 'Autumn maple leaves' }
    ]
  },
  {
    id: 'bd', kanji: '原',
    title: { ja: 'バングラデシュでの仕事', en: 'Work in Bangladesh' },
    tab: { ja: 'バングラデシュ', en: 'Bangladesh' },
    when: { ja: '2018年〜2022年', en: '2018–2022' },
    where: { ja: 'バングラデシュ', en: 'Bangladesh' },
    story: {
      ja: 'G-11 Engineering Ltd.（電機メーカー）では変圧器の製造に、Alliance Computers Ltd.（ネットワーク会社）では電気部門を担当し、通信設備の電源・配線や分電盤、接地などの電気工事に携わりました。現場で身につけたハードウェアの知識が、いまの私の原点です。',
      en: 'At G-11 Engineering Ltd., an electrical manufacturer, I worked on building transformers. At Alliance Computers Ltd., a networking company, I worked on the electrical side: power and cabling for telecom equipment, distribution panels and grounding. That hands-on hardware experience is where I started.'
    },
    places: [
      { id: 'g11', ja: '電機', en: 'G-11 Engineering', pref: { ja: 'G-11', en: 'G-11' } },
      { id: 'alliance', ja: '通信', en: 'Alliance Computers', pref: { ja: 'Alliance', en: 'Alliance' } },
      { id: 'jpschool', ja: '日本語', en: 'Japanese school', pref: { ja: '日本語学校', en: 'Language' } },
      { id: 'home', ja: '故郷', en: 'Pabna', pref: { ja: 'パブナ', en: 'Pabna' } }
    ],
    photos: [
      { src: 'bd/factory', w: 1440, h: 1080, place: 'g11', feature: true, ja: '変圧器の組み立て現場', en: 'Transformer assembly on the shop floor' },
      { src: 'bd/transformer', w: 612, h: 816, place: 'g11', ja: '製造した変圧器と', en: 'With a transformer we built' },
      { src: 'bd/pole-transformer', w: 1200, h: 1600, place: 'g11', ja: '柱上変圧器', en: 'Pole-mounted transformer' },
      { src: 'bd/transformers', w: 1200, h: 1600, place: 'g11', ja: '出荷前の変圧器', en: 'Transformers before shipping' },
      { src: 'bd/equipment-room', w: 1200, h: 1600, place: 'alliance', ja: '通信機器室での作業', en: 'In a telecom equipment room' },
      { src: 'bd/rack-power', w: 1200, h: 1600, place: 'alliance', ja: '通信ラックと電源装置', en: 'Telecom rack and power system' },
      { src: 'bd/rectifier', w: 1600, h: 1200, place: 'alliance', ja: '整流器ユニット', en: 'Rectifier units' },
      { src: 'bd/telecom-rack', w: 1200, h: 1600, place: 'alliance', ja: '通信装置の配線', en: 'Cabling telecom equipment' },
      { src: 'bd/breaker', w: 1600, h: 1200, place: 'alliance', ja: 'ブレーカーの配線', en: 'Circuit breaker wiring' },
      { src: 'bd/rack-rectifier', w: 1200, h: 1600, place: 'alliance', ja: 'バッテリー・整流器ラック', en: 'Battery and rectifier rack' },
      { src: 'bd/panel', w: 1200, h: 1600, place: 'alliance', ja: '分電盤', en: 'Distribution panel' },
      { src: 'bd/rack-cabling', w: 1200, h: 1600, place: 'alliance', ja: 'ラック内の配線', en: 'Rack cabling' },
      { src: 'bd/grounding', w: 1600, h: 1200, place: 'alliance', ja: '基地局の接地（アース）工事', en: 'Grounding work at a site' },
      { src: 'bd/jp-school', w: 1600, h: 1200, place: 'jpschool', ja: 'バングラデシュの日本語学校', en: 'Japanese language school in Bangladesh' },
      { src: 'bd/site-2021', w: 1600, h: 738, place: 'home', ja: 'パブナの文化財・タラシュ・ボボン', en: 'Tarash Bhaban, a heritage site in Pabna' }
    ]
  }
];
