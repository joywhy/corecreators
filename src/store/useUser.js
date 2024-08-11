import { create } from 'zustand';

export const useUser = create((set) => ({
  loading: false,
  users: [],
  userNoList: [],
  error: null,
  getUserNo: async (no) => {
    set({ loading: true });
    // console.log('동작');
    const users = await req('getUser', { count: 10 });
    // console.log(users);
    set((state) => {
      return { users: state.users.concat(users), loading: false };
    });

    return users;
  },
  getUserNoList: async (list) => {
    set({ loading: true });
    console.log('동작');
    // console.log(list);
    const noList = list.map((li, idx) => li.userNo);
    // console.log(noList);
    let userList = [];
    noList.forEach(async (no, idx) => {
      //   console.log(no);
      //   if (no < 10) {
      //   }
      const users = await req('getUser', { noList: [no] });
      //   console.log(users);
      let nick = users[0].nick;
      //   console.log(nick);
      userList.push(nick);
    });

    console.log(userList);
    set({ userNoList: userList, loading: false });

    // return users[0].nick;
  },
}));
