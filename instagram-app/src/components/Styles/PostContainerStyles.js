import styled from 'styled-components';

export const PostsPageDiv = styled.div`
`
export const Main = styled.main`
`
export const PostContainerDiv = styled.div`
  width: 65%;
`
export const ProfileSectionAside = styled.aside`
  width: calc(33% - 1rem);
  padding: 0.5rem;
`
export const PostDiv = styled.article`
  margin-bottom: 4rem;
  border-radius: 0.3rem;
  border: 0.05rem solid #dbdbdb;
  background-color: white;
`
export const PostHeadDiv = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
`
export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`
export const RightDiv = styled.div`
  display: flex;
  align-items: center;
`
export const ProfileThumbnailDiv = styled.div`
  border-radius: 50%;
  width: ${props => (props.small ? '2.3rem' : '3rem')};
  height: ${props => (props.small ? '2.3rem' : '3rem')};
  position: relative;
  overflow: hidden;
  border: ${props => (props.small ? '0.1rem solid purple' : 'none')};
  cursor: pointer;
`
export const ProfileThumbnail = styled.img`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`
export const ProfileDetailsDiv = styled.div`
  padding-left: 1rem;
  text-align: left;
  cursor: pointer;
`
export const UsernameDiv = styled.div`
`
export const ProfileNameDiv = styled.div`
  font-size: 0.75rem;
  color: #aaaaaa;
`
export const PostImageDiv = styled.div`
  width: 100%;
`
export const PostBodyDiv = styled.div`
  padding: 0.5rem 0.8rem;
  padding-bottom: 0rem;
`
export const PostInteractionDiv = styled.div`
  width: 20%;
  text-align: left;
`