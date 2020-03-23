import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #001427;
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

// export const Logo = styled.img.attrs({
//   src: Logo1
// })`
//   width: 135px;
//   height: 26px;
// `;

export const AppTitle = styled.div`
  color: #f5f5f5;
  font-size: 32px;
  font-weight: bold;
`;

export const NavBar = styled.ul`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 200px;
`;
interface ItemProps {
  isActive: boolean;
}
export const Item = styled.li.attrs((props: ItemProps) => ({
  isActive: props.isActive || false
}))`
  font-size: 15px;
  color: #ddd;
  font-weight: ${props => (props.isActive ? 'bold' : 'regular')};
  margin: 0 15px;
  line-height: 20px;
  height: 30px;

  cursor: pointer;
  &:hover {
    color: ${darken(0.2, '#ddd')};
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  strong {
    font-size: 14px;
    color: #ddd;
  }
  span {
    margin-top: 5px;
    font-size: 14px;
    color: #de3b3b;
    &:hover {
      cursor: pointer;
    }
  }
`;
