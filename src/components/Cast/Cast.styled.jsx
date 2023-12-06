 import styled from 'styled-components';

export const CastList = styled.ul`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width:1440px) {
    max-width: 1440px;

}
`;
export const CastItem = styled.li`
  list-style-type: none;
  width: 220px;
  max-height: none;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  border-radius: 8px; 
  padding: 10px;

  @media (max-width:1440px) {
    width: 120px;
    max-height: 320px;
}
`;
export const CastImg = styled.img`
  border: 2px solid #ddd; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  border-radius: 8px;
  width: 100%;
`;
export const CastName = styled.p``
export const Character = styled.p``