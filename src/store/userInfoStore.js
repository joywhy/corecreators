
import { create } from 'zustand';

export const useUserInfo = create((set) => ({
  loading: false,
  userInfo: {
    name: ''
  },
  error: null,
  sendLoginRequest: async (userinput) => {
    set({ loading: true });
    const { email: email, password: pass } = userinput;
    const userInfo = await req('login', {
      mail: email,
      pw: await password(pass),
    });
    cookie.my = userInfo.token;
    delete userInfo.token;

    set({ userInfo, loading: false });

    if(!!userInfo.no){
      set({ error:true, loading: false });
    }
  },
  rememberUser: async () => {
  if(cookie.my){
    set({ loading: true });
    const userInfo = await req('login', {token: cookie.my});

    set({ userInfo, loading: false });
    if(!!userInfo.no){
      set({ error:true, loading: false });
    }
 }
  
  },
}));
