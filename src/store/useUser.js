import { create } from 'zustand';
import { USER_STRUCTURE } from '../constants/index';
export const useUser = create((set) => ({
  loading: false,
  users: [
    {
      ...USER_STRUCTURE,
    },
  ],
  userNoList: [],
  error: null,
  getUser: async (count) => {
    set({ loading: true });
    const users = await req('getUser', { count: count });
    set((state) => {
      return { users: users, loading: false };
    });

    return users;
  },
  getUserNoList: async (list) => {
    set({ loading: true });
    const noList = list.map((li, idx) => li.userNo);
    let userList = [];

    noList.forEach(async (no, idx) => {
      const users = await req('getUser', { noList: [no] });
      let nick = users[0].nick;
      userList.push(nick);
    });

    set({ userNoList: userList, loading: false });
  },
  setUser: async (newForm) => {
    set({ loading: true });
    console.log(newForm);

    const no = await req('setUser', { ...newForm, pw: password(newForm.pw) });
    console.log(no);

    set((state) => ({
      users: [
        {
          ...newForm,
          no: no,
          // , creatorList: [{ ...CHANNEL_STRUCTURE }]
        },
      ].concat(state.users),
      loading: false,
    }));
  },
  deleteUser: async (no, idx) => {
    await req('deleteUser', { no });
    set((state) => {
      const newList = state.users.filter((_, index) => index !== idx);
      if (newList.length === 0) {
        return { users: [{ ...USER_STRUCTURE }] };
      } else {
        return { users: newList };
      }
    });
  },
  searchUser: async (input) => {
    set({ loading: true });
    let users = await req('getUser', {
      search: input,
      count: 10,
      max: 1,
    });
    // users = users.map((camp) => {
    //   if (!camp.creatorList) {
    //     return { ...camp, creatorList: [{ ...CHANNEL_STRUCTURE }] };
    //   } else {
    //     return camp;
    //   }
    // });
    set({ users: users, loading: false });
  },
}));
