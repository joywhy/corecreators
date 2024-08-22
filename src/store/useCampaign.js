import { create } from 'zustand';
import { useUser } from './useUser';
import { CAMPAIGN_STRUCTURE, CHANNEL_STRUCTURE } from '../constants';

export const useCampaign = create((set) => ({
  loading: false,
  campaign: [{ ...CAMPAIGN_STRUCTURE }],
  error: null,
  userNo: [],
  async getList(count){
    set({ loading: true });
    let campaign = await req('getList', { count: count });

    const userIds = campaign.map((campaign) => campaign.userNo);
    let users = [];
    for (let no of userIds) {
      if (!users[no]) {
        let userResponse = await req('getUser', { noList: [no] });
        users[no] = userResponse[0];
      }
      set((state) => ({
        userNo: [...state.userNo, users[no].nick],
      }));
    }

    campaign = campaign.map((camp) => {
      if (!camp.creatorList) {
        return { ...camp, creatorList: [{ ...CHANNEL_STRUCTURE }] };
      } else {
        return camp;
      }
    });
    set({ campaign: campaign, loading: false });

    if (campaign.length <= 0) {
      set({ error: true, loading: false });
    }
  },
  //새로 등록
  async setList(newForm){
    let isUpdate;
    set({ loading: true });

    // console.log(newForm);
    newForm.userNo = 2;
    newForm.creatorList = null;

    delete newForm.channelList;
    delete newForm.date;

    if(newForm.no){
      isUpdate = true;
    }else{
      delete newForm.no;
    }
    delete newForm.advertiser;
    delete newForm.await_i;
    newForm.no = await req('setList', newForm);
    
    set((state) => {
      if(isUpdate){
        Object.assign(state.campaign.find(({no}) => no == newForm.no), newForm);
      }else{
        state.campaign.unshift(newForm)
      }
      return {loading: false};
    });

  },
  searchList: async (input) => {
    set({ loading: true });

    let campaign = await req('getList', {
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
