import React, { useState, useEffect } from 'react';
import CampaignForm from './common/CampaignForm.jsx';
import styled from 'styled-components';

import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
import { responsiveWidthMiddle } from '../constants/index.js';
// import { useUserInfo } from '../store/userInfoStore.js';
import { useCampaign } from '../store/useCampaign.js';
import { getUserInfoCate } from '../utils';
import { CAMPAIGN_STRUCTURE } from '../constants';
//리스트
const Contents = ({
  index,
  isCreatedReady,
  setIsCreatedReady,
  setIsOpenNav,
  setIndex,
  userNo,
}) => {
  //가데이터
  const creatorList = [
    {
      name: '@pattery_Ledner',
      cate: '콘텐츠 메이커',
      img: '/src/assets/userProfile.png',
      icon: '/src/assets/instargram_icon.svg',
      follower: '134,233',
      view: '15,344',
      percent: '80%',
    },
    {
      name: '@pattery_Ledner',
      cate: '인플루언서',
      img: '/src/assets/userProfile.png',
      icon: '/src/assets/instargram_icon.svg',
      follower: '134,233',
      view: '15,344',
      percent: '80%',
    },
  ];
  const { campaign, changeList, setList } = useCampaign();
  let isManager = getUserInfoCate() === '최고관리자';
  const advertiser = '관리자';
  let { width } = useWindowDimensions();

  const handleBackCick = () => {
    setIsOpenNav(true);
  };
  return (
    <StyledDiv>
      {width < responsiveWidthMiddle && (
        <div className="back-button" onClick={handleBackCick}>
          <img src="/src/assets/common/back_icon.svg" alt="뒤로가기" />
          뒤로가기
        </div>
      )}
      {isManager ? (
        <CampaignForm
          list={campaign}
          changeList={changeList}
          setList={setList}
          index={index}
          isCreatedReady={isCreatedReady}
          setIsCreatedReady={setIsCreatedReady}
          basic={CAMPAIGN_STRUCTURE}
          setIndex={setIndex}
          userNo={userNo[index]}
        />
      ) : (
        <CreatorList list={creatorList} index={index} />
      )}
    </StyledDiv>
  );
};

const CreatorList = ({ list }) => {
  return (
    <StyledContainer>
      <header>
        <span>팔로워수</span>
        <span>최근 영상 조회수</span>
        <span>팔로워수 대비 조회수 %</span>
      </header>
      <ul>
        {list.map((user, idx) => (
          <Li
            name={user.name}
            cate={user.cate}
            img={user.img}
            icon={user.icon}
            follower={user.follower}
            view={user.view}
            percent={user.percent}
            key={user.name + idx}
          />
        ))}
      </ul>
    </StyledContainer>
  );
};
const Li = (props) => {
  const { name, cate, img, icon, follower, view, percent } = props;
  return (
    <StyledLi>
      <div className="profile">
        <div className="img-wrapper">
          <img src={img} alt="유저" />
          <img className="icon" src={icon} alt="유저" />
        </div>
        <div className="title">
          <p>{cate}</p>
          <h2>{name}</h2>
        </div>
      </div>

      <div className="des">
        <span>{follower}</span>
        <span>{view}</span>
        <span>{percent}</span>
      </div>
    </StyledLi>
  );
};

const StyledDiv = styled.div`
  flex-grow: 7;
  overflow: scroll;
  height: 100vh;

  @media only screen and (width <= 1200px) {
    & {
      height: calc(100vh - 70px);
      overflow: scroll;
    }
  }

  & .back-button {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    padding: 10px 10px 0;

    & img {
      /* border: 1px solid red; */
    }
  }
`;

const StyledContainer = styled.div`
  padding: 14px 25px;

  & header {
    display: flex;
    justify-content: end;
    margin-bottom: 5px;

    & span {
      margin-left: 20px;
      font-size: 10px;
    }
  }
`;
const StyledLi = styled.li`
  width: 100%;
  border-radius: 10px;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;

  &:hover {
    background-color: var(--gray-10);
  }

  & .profile {
    display: flex;

    & .img-wrapper {
      position: relative;
      width: 56px;
      height: 47px;

      & img {
        position: absolute;
        display: block;
      }

      & img.icon {
        left: 30px;
        bottom: 0;
      }
    }

    & .title {
      display: flex;
      flex-direction: column;
      justify-content: end;
      margin-left: 18px;

      & p {
        font-size: 13px;
        color: #818181;
      }

      & h2 {
        font-size: 16px;
        font-weight: bold;
        margin-top: 5px;
      }
    }
  }

  & .des {
    display: flex;
    width: 300px;
  }

  & span {
    display: block;
    max-width: 100px;
    flex-grow: 1;
    text-align: end;
    font-size: 14px;
    font-weight: bold;
  }
`;
export default Contents;

// import React, { useEffect } from 'react';
// import CampaignForm from './common/CampaignForm.jsx';
// import styled from 'styled-components';

// import useWindowDimensions from '../hooks/useWindowDimensions.jsx';
// import { responsiveWidthMiddle } from '../constants/index.js';
// import { useUserInfo } from '../store/userInfoStore.js';
// import { useHasManagerPermission } from '../hooks/useHasManagerPermission.jsx';

// const Contents = ({ index, setIsCreatedReady, isCreatedReady }) => {
//   //가데이터
//   const creatorList = [
//     {
//       name: '@pattery_Ledner',
//       cate: '콘텐츠 메이커',
//       img: '/src/assets/userProfile.png',
//       icon: '/src/assets/instargram_icon.svg',
//       follower: '134,233',
//       view: '15,344',
//       percent: '80%',
//     },
//     {
//       name: '@pattery_Ledner',
//       cate: '인플루언서',
//       img: '/src/assets/userProfile.png',
//       icon: '/src/assets/instargram_icon.svg',
//       follower: '134,233',
//       view: '15,344',
//       percent: '80%',
//     },
//   ];
//   const { userInfo, rememberUser } = useUserInfo();
//   let { isManager } = useHasManagerPermission();
//   let { height, width } = useWindowDimensions();

//   useEffect(() => {
//     rememberUser();
//   }, []);

//   const handleBackCick = () => {
//     alert('뒤로가기');
//   };
//   return (
//     <StyledDiv style={{ height: height - 70 }}>
//       {width < responsiveWidthMiddle && (
//         <div className="back-button" onClick={handleBackCick}>
//           <img src="/src/assets/common/back_icon.svg" alt="뒤로가기" />
//           뒤로가기
//         </div>
//       )}
//       {isManager ? (
//         <CampaignForm
//           index={index}
//           isCreatedReady={isCreatedReady}
//           setIsCreatedReady={setIsCreatedReady}
//         />
//       ) : (
//         <CreatorList list={creatorList} index={index} />
//       )}
//     </StyledDiv>
//   );
// };

// const CreatorList = ({ list }) => {
//   return (
//     <StyledContainer>
//       <header>
//         <span>팔로워수</span>
//         <span>최근 영상 조회수</span>
//         <span>팔로워수 대비 조회수 %</span>
//       </header>
//       <ul>
//         {list.map((user, idx) => (
//           <Li
//             name={user.name}
//             cate={user.cate}
//             img={user.img}
//             icon={user.icon}
//             follower={user.follower}
//             view={user.view}
//             percent={user.percent}
//             key={user.name + idx}
//           />
//         ))}
//       </ul>
//     </StyledContainer>
//   );
// };
// const Li = (props) => {
//   const { name, cate, img, icon, follower, view, percent } = props;
//   return (
//     <StyledLi>
//       <div className="profile">
//         <div className="img-wrapper">
//           <img src={img} alt="유저" />
//           <img className="icon" src={icon} alt="유저" />
//         </div>
//         <div className="title">
//           <p>{cate}</p>
//           <h2>{name}</h2>
//         </div>
//       </div>

//       <div className="des">
//         <span>{follower}</span>
//         <span>{view}</span>
//         <span>{percent}</span>
//       </div>
//     </StyledLi>
//   );
// };

// const StyledDiv = styled.div`
//   flex-grow: 7;
//   overflow: scroll;

//   @media only screen and (width <= 1200px) {
//     & {
//       height: calc(100vh - 70px);

//       /* border:1px solid red; */
//       overflow: scroll;
//     }
//   }

//   & .back-button {
//     /* border: 1px solid red; */
//     display: flex;
//     align-items: center;
//     padding: 10px 10px 0;

//     & img {
//       /* border: 1px solid red; */
//     }
//   }
// `;

// const StyledContainer = styled.div`
//   padding: 14px 25px;

//   & header {
//     display: flex;
//     justify-content: end;
//     margin-bottom: 5px;

//     & span {
//       margin-left: 20px;
//       font-size: 10px;
//     }
//   }
// `;
// const StyledLi = styled.li`
//   width: 100%;
//   border-radius: 10px;
//   height: 66px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   box-sizing: border-box;
//   padding: 10px;

//   &:hover {
//     background-color: var(--gray-10);
//   }

//   & .profile {
//     display: flex;

//     & .img-wrapper {
//       position: relative;
//       width: 56px;
//       height: 47px;

//       & img {
//         position: absolute;
//         display: block;
//       }

//       & img.icon {
//         left: 30px;
//         bottom: 0;
//       }
//     }

//     & .title {
//       display: flex;
//       flex-direction: column;
//       justify-content: end;
//       margin-left: 18px;

//       & p {
//         font-size: 13px;
//         color: #818181;
//       }

//       & h2 {
//         font-size: 16px;
//         font-weight: bold;
//         margin-top: 5px;
//       }
//     }
//   }

//   & .des {
//     display: flex;
//     width: 300px;
//   }

//   & span {
//     display: block;
//     max-width: 100px;
//     flex-grow: 1;
//     text-align: end;
//     font-size: 14px;
//     font-weight: bold;
//   }
// `;
// export default Contents;
