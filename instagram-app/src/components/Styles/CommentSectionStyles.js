import styled from 'styled-components';

export const CommentSectionDiv = styled.div`
`
export const CommentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding: 0 0.8rem;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  border: 0rem;
`
export const DeleteButtonImage = styled.img`
  cursor: pointer;
  opacity: 0.4;
  filter: alpha(opacity=40);
  &:hover {
    opacity: 1;
    filter: alpha(opacity=100)
  }
`
export const PostTimeDiv = styled.div`
  text-align: left;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: #aaaaaa;
  padding: 0 0.8rem;
  margin-bottom: 0.35rem;
`
export const PostFooterDiv = styled.div`
  padding: 1rem 0.8rem;
  border-top: 0.05rem solid #dbdbdb;
`
export const AddCommentForm = styled.form`
  display: flex;
`
export const AddCommentInput = styled.input`
  width: 100%;
  padding: 0.3rem 0rem;
  font-size: 0.9rem;
  text-align: left;
  border: 0;
`
export const PostBtnDiv = styled.div`
  padding: 0rem 0.5rem;
  color: #d5e9fc;
  cursor: pointer;
`