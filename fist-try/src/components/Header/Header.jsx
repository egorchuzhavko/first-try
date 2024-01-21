import logo from "/vite.svg";
import { useEffect, useState } from "react";
import "./Header.css";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

const now = new Date();
const altt = "logo vite";

function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval);
      console.log("cleaning...");
    };
  }, []);

  return (
    <HeaderContainer>
      {/* <h3>Result</h3> */}
      <img src={logo} alt={altt} />
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
export default Header;
