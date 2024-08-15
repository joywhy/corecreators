import { create } from 'zustand';
import { useUser } from './useUser';
import { CAMPAIGN_STRUCTURE, CHANNEL_STRUCTURE } from '../constants';
import { getUserInfoNo } from '../utils';

//  CAMPAIGN_STRUCTURE = {
//   name: '캠페인명',
//   userNo: 1,
//   creatorList: [],
//   // channelList: [{ ...CHANNEL_STRUCTURE }],
//   no: 0,
//   date: '2024.07.27',
//   memo: '메모',
// };

export const useCampaign = create((set) => ({
  loading: false,
  campaign: [{ ...CAMPAIGN_STRUCTURE }],
  error: null,
  userNo: [],
  getList: async (count) => {
    set({ loading: true });
    let campaign = await req('getList', { count: count });

    const userIds = campaign.map((campaign) => campaign.userNo);
    // console.log(userIds);
    userIds.forEach(async (no) => {
      const userResponse = await req('getUser', { noList: [no] });
      // const userData = await userResponse.json();
      // console.log(userResponse);
      set((state) => {
        // console.log(state.userNo);
        return { userNo: [...state.userNo].concat([userResponse[0].nick]) };
      });
    });

    campaign = campaign.map((camp) => {
      // 광고주 구하기
      // let advertiser = camp.userNo
      //camp.creatorList null 일때 기본 배열넣기
      if (!camp.creatorList) {
        return { ...camp, creatorList: [{ ...CHANNEL_STRUCTURE }] };

        // } else if (camp.creatorList) {
        // const creatorList = [1, 2, 4];
      } else {
        return camp;
      }
    });
    set({ campaign: campaign, loading: false });

    if (campaign.length <= 0) {
      set({ error: true, loading: false });
    }
  },
  getMemberCampaignList: async (no, startCount, endCount) => {
    set({ loading: true });
    let campaign = await req('getList', {
      userNo: no,
      count: startCount,
      max: endCount,
    });

    campaign = campaign.map((camp) => {
      if (!camp.creatorList) {
        return { ...camp, creatorList: [{ ...CHANNEL_STRUCTURE }] };
      } else {
        return camp;
      }
    });
    set({ campaign, loading: false });

    if (campaign.length <= 0) {
      set({ error: true, loading: false });
    }
  },
  changeList: async (newContent, index) => {
    set({ loading: true });
    await req('setList', { ...newContent, creatorList: null });
    set((state) => ({
      campaign: state.campaign.map((content, idx) => {
        return index === idx ? newContent : content;
      }),
      loading: false,
    }));
  },
  //새로 등록
  setList: async (newForm) => {
    set({ loading: true });

    // console.log(newForm);
    newForm.userNo = 2;
    newForm.creatorList = null;

    delete newForm.channelList;
    delete newForm.date;
    delete newForm.no;
    delete newForm.advertiser;
    if ('await_i' in newForm) {
      delete newForm.await_i;
    }
    // console.log(newForm);

    const { no } = await req('setList', newForm);
    console.log(no);

    set((state) => ({
      campaign: [
        { ...newForm, no: no, creatorList: [{ ...CHANNEL_STRUCTURE }] },
      ].concat(state.campaign),
      loading: false,
    }));
  },
  searchList: async (input) => {
    set({ loading: true });
    let no = getUserInfoNo();

    let campaign = await req('getList', {
      userNo: no,
      search: input,
      count: 10,
      max: 30,
    });
    campaign = campaign.map((camp) => {
      if (!camp.creatorList) {
        return { ...camp, creatorList: [{ ...CHANNEL_STRUCTURE }] };
      } else {
        return camp;
      }
    });
    set({ campaign, loading: false });
  },

  deleteList: async (no, idx) => {
    await req('deleteList', { no });
    set((state) => {
      const newList = state.campaign.filter((_, index) => index !== idx);
      if (newList.length === 0) {
        return { campaign: [{ ...CAMPAIGN_STRUCTURE }] };
      } else {
        return { campaign: newList };
      }
    });
  },
}));
