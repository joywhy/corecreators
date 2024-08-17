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
    set({ loading: true });
    let report = { ...newContent, linkList: null };
    delete report.advertiser;
    console.log(report);
    await req('setReport', report);
    set((state) => ({
      report: state.report.map((content, idx) => {
        return index === idx ? report : content;
      }),
      loading: false,
    }));
  },
  setList: async (newForm) => {
    set({ loading: true });
    let report = { ...newForm, linkList: null, userNo: 2 };

    delete report.date;
    delete report.no;
    delete report.advertiser;
    console.log(report);
    const no = await req('setReport', { ...newForm, linkList: null });
    console.log(no);
    set((state) => ({
      report: [{ ...report, no: no, linkList: null }].concat(state.report),
      loading: false,
    }));
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
