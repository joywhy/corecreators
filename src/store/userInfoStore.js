import { create } from 'zustand';
// import {persist} from "zustand/middleware";
// {
// bno: null,
// cate : "거래처",
// mail : "admin@lieul.com",
// memo : null,
// name : "박재천",
// nick : "리을컴퍼니",
// no : 2,
// tel : "070-7630-1111",
// token : "eyJ0aW1lIjoxNzIzMDkxMTQwOTU5LCJkYXRhIjoiYkc5allXeG9iM04wWHpVeE56TWV5SnVieUk2TW4wIn0"
// }

export const useUserInfo = create((set) => ({
  loading: false,
  userInfo: {
    name: '',
  },
  error: null,
  sendLoginRequest: async (userinput) => {
    set({ loading: true });
    const { email: email, password: pass } = userinput;
    const userInfo = await req('login', {
      mail: email,
      pw: await password(pass),
    });
    // console.log(userInfo);
    window.localStorage.setItem('no', userInfo.no);
    window.localStorage.setItem('cate', userInfo.cate);
    cookie.my = userInfo.token;
    delete userInfo.token;

    set({ userInfo, loading: false });

    if (!userInfo.no) {
      set({ error: true, loading: false });
    }
  },
  rememberUser: async () => {
    if (cookie.my) {
      // console.trace(cookie.my);
      set({ loading: true });
      const userInfo = await req('login', { token: cookie.my });

      set({ userInfo, loading: false });
      if (userInfo.no) {
        set({ error: true, loading: false });
      }
    }
  },
}));
