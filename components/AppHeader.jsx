import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import useWidth from "../hooks/useWidth";

const Cover = styled.article`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0px 10px;
`;

const HeaderInput = styled(Input)`
  width: ${(props) => props.w};
`;

const AppHeader = () => {
  const width = useWidth();

  return (
    <Cover>
      <div>로고</div>
      <HeaderInput
        w={width < 800 ? "200px" : "400px"}
        size="small"
        allowClear
        placeholder="검색어를 입력하세요."
      />
      <div>메뉴아이콘</div>
    </Cover>
  );
};

export default AppHeader;
