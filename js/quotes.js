const quotes = [
  {
    quote: "나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote:
      "항상 맑으면 사막이 된다.   비가 내리고 바람이 불어야만 비옥한 땅이 된다.",
    author: "스페인 속담",
  },
  {
    quote:
      "인생에서 가장 슬픈 세 가지.   할 수 있었는데, 해야 했는데, 해야만 했는데.",
    author: "루이스 E. 분",
  },
  {
    quote:
      "같은 실수를 두려워하되 새로운 실수를 두려워하지 마라.   실수는 곧 경험이다.",
    author: "도서 ‘어떤 하루’ 中",
  },
  {
    quote: "오늘은 당신의 남은 인생 중, 첫 번째 날이다.",
    author: "영화 ‘아메리칸 뷰티’ 中",
  },
  {
    quote:
      "인생은 곱셈이다.   어떤 기회가 와도 내가 제로면 아무런 의미가 없다.",
    author: "나카무라 미츠루",
  },
  {
    quote: "별은 바라보는 자에게 빛을 준다.",
    author: "도서 ‘드래곤 라자’ 中",
  },
  {
    quote:
      "생명이 있는 한 희망이 있다.   실망을 친구로 삼을 것인가, 아니면 희망을 친구로 삼을 것인가.",
    author: "J.위트",
  },
  {
    quote: "실패란 넘어지는 것이 아니라, 넘어진 자리에 머무는 것이다.",
    author: "도서 ‘프린세스, 라 브라바!’ 中",
  },
  {
    quote:
      "슬픔이 그대의 삶으로 밀려와 마음을 흔들고 소중한 것을 쓸어가 버릴 때면 그대 가슴에 대고 말하라.   “이것 또한 지나가리라”",
    author: "",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
