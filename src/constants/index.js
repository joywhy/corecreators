export const CARDS = [
  {
    title: '리스트업 솔루션',
    desc: '크리에이터 리스트 전달용',
    img: '/src/assets/home/list_img.png',
    url: 'http://localhost:5173/list', //추후 주소로
  },
  {
    title: '보고서 솔루션',
    desc: '캠페인 보고서 전달용',
    img: '/src/assets/home/list_img.png',
    url: 'http://localhost:5173/report',
  },
  {
    title: '코크 크리에이터',
    desc: '어떤 크리에이터들이 활동하고 있는 지 검색해보세요!',
    img: '/src/assets/home/coreCreator_img.jpg',
    url: 'http://localhost:5173/sort',
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
export const CHANNEL_STRUCTURE = {
  channelType: 'instargram',
  channel: '',
};
export const CAMPAIGN_STRUCTURE = {
  name: '캠페인명',
  userNo: '',
  creatorList: [],
  // channelList: [{ ...CHANNEL_STRUCTURE }],
  no: '',
  date: '2024.07.27',
  memo: '메모',
};
export const responsiveWidth = 1200;
export const responsiveWidthMiddle = 750;
