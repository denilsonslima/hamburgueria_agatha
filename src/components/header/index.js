import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Header({click, setClick}) {
  const [isFocus, setFocus] = useState(false);
  const [search, setSearch] = useState(false);
  const navigate = useNavigate()
  
  return !search ? (
    <StyleSection>
      <h1>
        Burguer <span>Ágatha</span>
      </h1>
      <StyleContainer>
        <StyleInput color={isFocus ? "#333333" : "#E0E0E0"}>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
          />
          <div>
            <AiOutlineSearch />
          </div>
        </StyleInput>
        <HiSearch className="iconSearch" onClick={() => setSearch(true)} />
        <div onClick={() => setClick(!click)}>
          <FaShoppingCart />
          <span>0</span>
        </div>
        <FiLogOut onClick={() => navigate("/")}/>
      </StyleContainer>
    </StyleSection>
  ) : (
    <StyleSection>
      <StyleInput color={isFocus ? "#333333" : "#E0E0E0"} style={{display: search ? "flex" : "none"}}>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
        />
        <div>
          <AiOutlineSearch onClick={() => setSearch(false)}/>
        </div>
      </StyleInput>
    </StyleSection>
  );
}

const StyleSection = styled.section`
  width: 100%;
  height: 80px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  h1 {
    width: 170px;
    height: 37px;
    font-family: "Inter";
    font-size: 25px;
    font-weight: 700;
    line-height: 37px;
    pointer-events: none;
    span {
      font-size: 15px;
      color: #eb5757;
    }
  }
`;

const StyleInput = styled.div`
  width: 365px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 10px 10px 15px;
  background-color: #fff;
  border: 2px solid ${(props) => props.color};
  border-radius: 8px;
  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    padding: 0;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    text-overflow: ellipsis;
    ::placeholder {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #e0e0e0;
    }

    :focus {
      ::placeholder {
        color: #828282;
      }
    }
  }
  > div {
    width: 53px;
    height: 100%;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 20px;
      height: 20px;
      color: #fff;
    }
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  .iconSearch {
    display: none;
  }

  > div {
    position: relative;
    span {
      width: 20px;
      height: 24px;
      color: #fff;
      background-color: #27ae60;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -13px;
      right: -12px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 900;
      font-size: 14px;
      line-height: 0px;
    }
  }
  svg {
    width: 25px;
    height: 25px;
    color: #bdbdbd;
  }

  @media (max-width: 950px) {
    .iconSearch {
      display: block;
    }
  }
`;
