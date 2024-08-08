import { create } from 'zustand';
import { CAMPAIGN_STRUCTURE, CHANNEL_STRUCTURE } from '../constants';

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
  getList: async (count) => {
    set({ loading: true });
    let campaign = await req('getList', { count: count });

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
    await req('setList', { ...newContent,no: index,creatorList :null});
    set((state) => ({
      campaign: state.campaign.map((content, idx) => {
        return index === idx ? newContent : content;
      }),
      loading: false,
    }));
  },
   setList : async (newForm) => {
    set({ loading: true });
    console.log({ ...newForm,creatorList :null});
    await req('setList', { ...newForm,creatorList :null});
    set((state) => ({
      campaign: [{ ...newForm,no:0,creatorList :null}].concat(state.campaign),
      loading: false,
    }));

  },
  //변경 요망
  deleteList: (idx) => {
    const newList = campaign.filter((_, index) => index !== idx);

    if (newList.length === 0) {
      set({ campaign: [{ ...CAMPAIGN_STRUCTURE }] });
    } else {
      set({ campaign: newList });
    }
  },
}));
