 import styled from 'styled-components';

export const ReviewList = styled.ul`
max-width: 1440px;
display: flex;
gap: 20px;
margin-right: 40px;       
flex-direction: column;

`

export const ReviewItem = styled.li`
  list-style-type: none;
  background-color: #e3dfdf;
  margin-top: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
export const ReviewAuthor = styled.h4`
text-align:center`
export const ReviewText = styled.p`
padding-right: 20px;
padding-left: 20px;`