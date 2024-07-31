// import { atom } from 'recoil';
// // import getUserInfo

// export const userState = atom({
//    key: 'userState',
//   default: {}
// });

import { atom } from 'jotai';

export const userInfo = atom({});


// export const getUserInfoSelector = selector({
//   key: 'getUserInfo',
//   get: async () => {
//       try {
//           const posts = await fetchPostsFromServer();

//           return posts;
//       } catch (error) {
//           console.error('Error fetching posts:', error);
//           throw error;
//       }
//   },
// });

  //  useRecoilState = react의 useState
  //   useSetRecoilState = useState에서 setter
  //   useRecolValue =useState에서 value
  //   useResetRecoilState = 기본값으로 초기화 


  // {
  //   bno: null, //비즈니스넘버: 사업자등록번호  > 일반사용자의 경우 null 
  //   cate: null, //유저타입 카테고리 > 일반 : null,  거래처: "거래처", 관리자: "최고관리자"
  //   mail: null,
  //   memo:null,
  //   name: null,
  //   nick:null,
  //   no:null,
  //   tel:null,
  //   token:null
  // }