import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  padding: 1rem 0;
  background-color: white;
  border-bottom: 0.05rem solid #dbdbdb;
`
export const HeaderNav = styled.nav`
  display: flex;
  width: 75%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`
export const LogoDiv = styled.div`
  display: flex;
  width: 20%;
`
export const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  padding-right: 1rem;
`
export const LogoImage = styled.img`
  display: flex;
  align-items: center
  width: 100%;
  cursor: pointer;
`
export const LogoText = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  padding-left: 1rem;
  border-left: 0.05rem solid black;
`
export const SearchDiv = styled.div`
  width: 20%;
`
export const SearchInput = styled.input`
  width: 100%;
  padding: 0.3rem;
  font-size: 0.875rem;
  text-align: center;
  border-radius: 0.3rem;
  border: 0.05rem solid #dbdbdb;
  background-color: #fafafa;
`
export const IconHolderDiv = styled.div`
  width: 15%;
  padding: 0 0.5rem;
`
export const IconsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`