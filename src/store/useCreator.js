import { create } from 'zustand';
// import { CAMPAIGN_STRUCTURE } from '../constants';

export const useCreator = create((set) => ({
  loading: false,
  member: [
    {
      no: 1, // 계정 고유 번호
      cate: 'instargram', // 유튜브, 인스타그램, 틱톡
      id: '@lieul', // 계정 아이디
      creatorNo: 0, // 계정 소유자 고유번호
      fallower: '1,234', // 팔로워 수
      memo: '계정1의 메모', // 메모,
      view: '15,344',
      percent: '80%',
      img: 'src/assets/userProfile.png',
      icon: '/src/assets/instargram_icon.svg',
    },
  ],
  error: null,
  getMember: async (count) => {
    set({ loading: true });
    const members = await req('getCreator', { count: count });
    // console.log(members);

    set({ member: members, loading: false });

    // if (member.length <= 0) {
    //   set({ error: true, loading: false });
    // }
  },
  searchCreaotr: async (input) => {
    set({ loading: true });
    const members = await req('getCreator', {
      search: input,
    });
    console.log(members);

    set({ member: members, loading: false });
  },
  searchCreaotrwithFilter: async (input) => {
    set({ loading: true });
    // console.log(input);
    const members = await req('getCreator', {
      search: input,
    });
    // console.log(members);

    set({ member: members, loading: false });
  },
}));
