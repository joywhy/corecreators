import { create } from 'zustand';
import { CAMPAIGN_STRUCTURE } from '../constants';

export const useCampaign = create((set) => ({
  loading: false,
  campaign: [CAMPAIGN_STRUCTURE],
  error: null,
  getList: async (count) => {
    set({ loading: true });
    const campaign = await req('getList', { count: count });
    console.log(campaign);

    set({ campaign, loading: false });

    if (campaign.length <= 0) {
      set({ error: true, loading: false });
    }
  },
  changeList: (changeForm, index) => {
    let newList = campaign.map((content, idx) => {
      return index === idx ? newContent : content;
    });
    set({ campaign: newList });
  },
  deleteList: (idx) => {
    const newList = campaign.filter((_, index) => index !== idx);

    if (newList.length === 0) {
      set({ campaign: [{ ...CAMPAIGN_STRUCTURE }] });
    } else {
      set({ campaign: newList });
    }
  },
}));
