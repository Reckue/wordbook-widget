import styled from "styled-components";

export const LevelLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
  gap: 2px;
`;

interface LevelNumberProps {
    color: string;
}

export const LevelNumber = styled.div<LevelNumberProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 16px;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid ${({ color }: LevelNumberProps) => color};
  color: ${({ color }: LevelNumberProps) => color};
`;

export const LevelSlider = styled.div`
  height: 2px;
  border-radius: 2px;
  width: 8px;
  background: #D9D9D9;
`;
