import { create } from 'zustand';
import { REPORT_STRUCTURE } from '../constants';
import { getUserInfoNo } from '../utils';
// export const REPORT_STRUCTURE = {  //변경여지 0
//   name: '보고서명',
//   userNo: 1,
//   creatorList: [], //? text ?
//   no: 0,
//   date: '',
//   memo: '메모',
// };

export const useReport = create((set) => ({
  loading: false,
  report: [{ ...REPORT_STRUCTURE }],
  error: null,
  getReport: async (count) => {
    set({ loading: true });
    // let campaign = await req('getList', { count: count });

    // campaign = campaign.map((camp) => {
    //   if (!camp.creatorList) {
    //     return { ...camp, creatorList: [{ ...CHANNEL_STRUCTURE }] };
    //   } else {
    //     return camp;
    //   }
    // });
    // set({ campaign: campaign, loading: false });

    // if (campaign.length <= 0) {
    //   set({ error: true, loading: false });
    // }
  },
  getMemberReportList: async (no, startCount, endCount) => {
    set({ loading: true });
    // let campaign = await req('getList', {
    //   userNo: no,
    //   count: startCount,
    //   max: endCount,
    // });

    // campaign = campaign.map((camp) => {
    //   if (!camp.creatorList) {
    //     return { ...camp, creatorList: [{ ...CHANNEL_STRUCTURE }] };
    //   } else {
    //     return camp;
    //   }
    // });
    // set({ campaign, loading: false });

    // if (campaign.length <= 0) {
    //   set({ error: true, loading: false });
    // }
  },
  changeList: async (newContent, index) => {
    // set({ loading: true });
    // await req('setList', { ...newContent, no: index, creatorList: null });
    // set((state) => ({
    //   campaign: state.campaign.map((content, idx) => {
    //     return index === idx ? newContent : content;
    //   }),
    //   loading: false,
    // }));
  },
  setList: async (newForm) => {
    // set({ loading: true });
    // console.log({ ...newForm, creatorList: null });
    // await req('setList', { ...newForm, creatorList: null });
    // set((state) => ({
    //   campaign: [{ ...newForm, no: 0, creatorList: null }].concat(
    //     state.campaign
    //   ),
    //   loading: false,
    // }));
  },
  searchList: async (input) => {
    set({ loading: true });
    // let no = getUserInfoNo();

    // let campaign = await req('getList', {
    //   userNo: no,
    //   search: input,
    //   count: 10,
    //   max: 30,
    // });
    // campaign = campaign.map((camp) => {
    //   if (!camp.creatorList) {
    //     return { ...camp, creatorList: [{ ...CHANNEL_STRUCTURE }] };
    //   } else {
    //     return camp;
    //   }
    // });
    // set({ campaign, loading: false });
  },

  deleteList: (idx) => {
    // set((state) => {
    //   const newList = state.campaign.filter((_, index) => index !== idx);
    //   if (newList.length === 0) {
    //     return { campaign: [{ ...CAMPAIGN_STRUCTURE }] };
    //   } else {
    //     return { campaign: newList };
    //   }
    // });
  },
}));
