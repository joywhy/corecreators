export const CARDS = [
  {
    title: '리스트업 솔루션',
    desc: '크리에이터 리스트 전달용',
    img: '/src/assets/home/listup.png',
    url: 'list', //추후 주소로
  },
  {
    title: '보고서 솔루션',
    desc: '캠페인 보고서 전달용',
    img: '/src/assets/home/report.png',
    url: 'report',
  },
  {
    title: '코크 크리에이터',
    desc: '어떤 크리에이터들이 활동하고 있는 지 검색해보세요!',
    img: '/src/assets/home/sort.png',
    url: 'sort',
  },
];

export const ChannelType = [
  {
    name: '인스타그램',
    type: 'instargram',
    imgUrl: '/src/assets/channel/instargram_icon.svg',
  },
  {
    name: '유튜브',
    type: 'youtube',
    imgUrl: '/src/assets/channel/youtube_icon.svg',
  },
  {
    name: '틱톡',
    type: 'tikkok',
    imgUrl: '/src/assets/channel/tikkok_icon.svg',
  },
];
export const userType = [
  {
    name: '일반',
    type: '일반',
    imgUrl: null,
  },
  {
    name: '거래처',
    type: '거래처',
    imgUrl: '/src/assets/userType/client.svg',
  },
  {
    name: '최고관리자',
    type: '최고관리자',
    imgUrl: '/src/assets/userType/manager.svg',
  },
];
export const CHANNEL_STRUCTURE = {
  channelType: 'instargram',
  channel: '',
};
export const CAMPAIGN_STRUCTURE = {
  name: '',
  userNo: null,
  creatorList: [],
  // channelList: [{ ...CHANNEL_STRUCTURE }],
  channelList: [{ ...CHANNEL_STRUCTURE }],
  no: 0,
  date: '',
  memo: '',
};
export const REPORT_STRUCTURE = {
  name: '',
  userNo: null,
  linkList: [], //? text ?
  no: 0,
  date: '',
  memo: '',
};
export const USER_STRUCTURE = {
  // no: 1, // 계정 고유 번호
  nick: '', // 닉네임 or 회사명
  name: '', // 이름
  tel: '', // 연락처
  cate: '', // 분류
  mail: '', // 메일
  bno: '', // 사업자번호
  memo: '', // 메모
  pw: '',
};
export const responsiveWidth = 1200;
export const responsiveWidthMiddle = 750;

export const country = [
  {
    label: '국가',
    value: '',
  },
  {
    label: '대한민국',
    value: 'KOR',
  },
  {
    label: '베트남',
    value: 'VNM',
  },
  {
    label: '태국',
    value: 'THA',
  },
  {
    label: '인도네시아',
    value: 'IDN',
  },
  {
    label: '인도',
    value: 'IND',
  },
];

export const type = [
  {
    label: '매체',
    value: '',
  },
  {
    label: '인스타그램',
    value: 'INST',
  },
  {
    label: '유튜브',
    value: 'YT',
  },
  {
    label: '틱톡',
    value: 'TT',
  },
  // {
  //   label: '네이버',
  //   value: 'NAV',
  // },
];
export const gender = [
  {
    label: '성별',
    value: '',
  },
  {
    label: '남성',
    value: 'MALE',
  },
  {
    label: '여성',
    value: 'FEMALE',
  },
  {
    label: '분류값 없음',
    value: 'Not Specified',
  },
];

export const age = [
  {
    label: '연령대',
    value: '',
  },
  {
    label: '10대',
    value: 10,
  },
  {
    label: '20대',
    value: 20,
  },
  {
    label: '30대',
    value: 30,
  },
  {
    label: '40대',
    value: 40,
  },
  {
    label: '50대',
    value: 50,
  },
  {
    label: '분류값 없음',
    value: 0,
  },
];
export const tag = {
  title: '분야',
  list: ['뷰티', '패션', '푸드', '일상', '여행', '키즈'],
};
export const cate = {
  title: '크리에이터 유형',
  list: ['콘텐츠 메이커', '비주얼 크리에이터', '인플루언서'],
};
export const follwer = {
  title: '팔로워 수',
  marks: [
    {
      value: 1000,
      label: '1천',
    },
    {
      value: 10000,
      label: '1만',
    },
    {
      value: 50000,
      label: '5만',
    },
    {
      value: 100000,
      label: '10만',
    },
    {
      value: 200000,
      label: '20만',
    },
    {
      value: 300000,
      label: '30만 이상',
    },
  ],
};
