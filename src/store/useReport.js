import { create } from 'zustand';
import { REPORT_STRUCTURE, CHANNEL_STRUCTURE } from '../constants';
import { getUserInfoNo } from '../utils';
// export const REPORT_STRUCTURE = {  //변경여지 0
//   name: '보고서명',
//   userNo: 1,
//   linkList: [], //? text ?
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
    let report = await req('getReport', { count: count });

    report = report.map((data) => {
      if (!data.linkList || data.linkList === 'null') {
        return { ...data, linkList: [{ ...CHANNEL_STRUCTURE }] };
      } else {
        return data;
      }
    });
    set({ report: report, loading: false });
  },
  getMemberReportList: async (no, startCount, endCount) => {
    set({ loading: true });
    let report = await req('getReport', {
      userNo: no,
      count: startCount,
      max: endCount,
    });

    report = report.map((data) => {
      if (!data.linkList || data.linkList === 'null') {
        return { ...data, linkList: [{ ...CHANNEL_STRUCTURE }] };
      } else {
        return data;
      }
    });
    set({ report: report, loading: false });

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
    // console.log({ ...newForm, linkList: null });
    // await req('setList', { ...newForm, linkList: null });
    // set((state) => ({
    //   campaign: [{ ...newForm, no: 0, linkList: null }].concat(
    //     state.campaign
    //   ),
    //   loading: false,
    // }));
  },
  searchReport: async (input) => {
    set({ loading: true });
    let no = getUserInfoNo();

    let report = await req('getReport', {
      userNo: no,
      search: input,
      count: 10,
      max: 30,
    });
    report = report.map((data) => {
      if (!data.linkList || data.linkList === 'null') {
        return { ...data, linkList: [{ ...CHANNEL_STRUCTURE }] };
      } else {
        return data;
      }
    });
    set({ report: report, loading: false });
  },

  deleteReport: async (no, idx) => {
    await req('deleteReport', { no });
    set((state) => {
      const newList = state.report.filter((_, index) => index !== idx);
      if (newList.length === 0) {
        return { report: [{ ...REPORT_STRUCTURE }] };
      } else {
        return { report: newList };
      }
    });
  },
}));
