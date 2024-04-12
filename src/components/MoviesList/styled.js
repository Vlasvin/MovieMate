import styled from 'styled-components';

export const MovieOverlay = styled.div`
  bottom: 0;
  left: 0;
  min-height: 480px;
  background-color: rgba(117, 115, 115, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  justify-content: flex-start;
`;

export const MovieList = styled.ul`
  padding: 0;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;
export const MovieItem = styled.li`
  position: relative;
  width: 300px;
  list-style-type: none;
  font-size: 18px;
`;
export const MovieListImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
export const MovieName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  margin-top: 24px;
`;
