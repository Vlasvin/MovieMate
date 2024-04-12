import styled from 'styled-components';

export const Style = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: rgba(117, 115, 115, 0.5);
  border-radius: 8px;

  @media (max-width: 1440px) {
    display: block;
  }

  @media (max-width: 768px) {
  }
`;
export const GoBackBtn = styled.button`
  display: flex;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 8px;

  @media (max-width: 1440px) {
    margin-left: 40px;
  }
`;
export const MovieImg = styled.img`
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 1440px) {
    margin-left: 40px;
  }
`;
export const MovieName = styled.h2`
  font-size: 30px;
`;
export const UserScore = styled.p`
  font-size: 18px;
`;
export const Overview = styled.h3``;
export const OverviewText = styled.p`
  font-size: 18px;
  padding-right: 20px;
`;
export const Genres = styled.h3`
  font-weight: bold;
`;
export const GenresText = styled.p`
  font-size: 18px;
`;
export const GenresStyles = styled.div`
  display: flex;
  gap: 8px;
`;
export const AdInfo = styled.p`
  font-size: 18px;
  margin-left: 20px;
  font-weight: bold;
  @media (max-width: 1440px) {
    margin-left: 40px;
  }
  @media (max-width: 378px) {
    text-align: center;
  }
`;
export const InfoList = styled.ul`
  display: flex;
  gap: 20px;
  padding-left: 20px;

  @media (max-width: 1440px) {
    padding-left: 40px;
  }
  @media (max-width: 378px) {
    justify-content: center;
  }
`;
export const InfoItem = styled.li`
  list-style-type: none;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px;
  background-color: #c2fbd7;
`;
export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 860px;
  margin-left: 20px;
  margin-right: 20px;
`;
export const Movie = styled.div`
  display: flex;
  @media (max-width: 430px) {
    flex-direction: column;
  }
`;
