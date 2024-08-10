import React, { useRef, useHistory, useState } from 'react';

export default function SearchPopup() {
  const searchInput = useRef();
  const searchWrapp = useRef();
  const history = useHistory();

  const initialSearch = {
    searchKeyword: '',
    searchFocus: false,
  };

  const [searchState, setSearchState] = useState(initialSearch);
  const [historyList, setHistoryList] = useState([]);

  const handleFocusOn = () => {
    setSearchState({ ...searchState, searchFocus: true });
  };

  const clickWrapp = (event) => {
    console.log(searchWrapp);
    if (
      document.activeElement !== searchInput.current &&
      !searchWrapp.current.contains(event.target)
    ) {
      setSearchState({ ...searchState, searchFocus: false });
    }
  };

  const search = (keyword) => {
    console.log('search');
    setSearchState({ ...searchState, searchKeyword: keyword });
    addHistory(keyword);
  };

  const addHistory = (keyword) => {
    if (!keyword) {
      return;
    }
    const history = { id: createNextId(historyList), keyword };
    setHistoryList([history, ...historyList]);
  };

  const removeHistory = (id) => {
    const history = historyList.filter((item) => item.id !== id);
    setHistoryList(history);
  };

  useEffect(() => {
    document.addEventListener('click', clickWrapp);
  }, []);

  return (
    <div className="search-area" ref={searchWrapp}>
      <form
        className="search-form"
        onSubmit={(event) => {
          event.preventDefault();
          search(searchState.searchKeyword);
          history.push({
            pathname: `/search/${searchState.searchKeyword}`,
          });
          searchInput.current.value = '';
        }}
      >
        <input
          ref={searchInput}
          type="text"
          onChange={(event) => {
            setSearchState({
              ...searchState,
              searchKeyword: event.target.value,
            });
          }}
          onFocus={(event) => handleFocusOn(event)}
        />
        <button>검색</button>
      </form>
      {searchState.searchFocus && (
        <div className="search-layer">
          <h1>최근검색어</h1>
          <ul>
            {historyList.length > 0 ? (
              historyList.map(({ id, keyword }) => (
                <li key={id}>
                  {keyword}
                  <button
                    onClick={(event) => {
                      removeHistory(id);
                    }}
                  >
                    닫기
                  </button>
                </li>
              ))
            ) : (
              <span>검색결과가 없습니다 </span>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
