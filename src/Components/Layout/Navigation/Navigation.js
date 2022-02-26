import styled from "styled-components";
import strings from "../../../localization";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
    height: 150px;
    background-color: #060505;
    color: white;
    display: flex;
    align-items: center;
`;

const Left = styled.div`
    padding-left: 200px;
    flex: 3;
`;

const Center = styled.div`
    flex: 5;
    padding-left: 200px;
    color: black;
`;

const Right = styled.div`
    flex: 1;
`;

const NavbarContainer = styled.div`

`;

const NavbarLink = styled(NavLink)`
    font-size: larger;
    text-decoration: none;
    color: white;
    margin: 10px;
    padding: 0 10px;
    cursor: pointer;
    &.active{
        color: #ff1a1a;
    }
`;

const ImgContainer = styled.div`
    display: flex;
    width: 40px;
    img {
        margin-left: 10px;
    }
    img:hover{
        transform: scale(1.5);
    }
`;

const MenuButton = styled.div`
    width: 40px;
    height: 50px;
    border: none;
    background: none;
    font-size: 40px;
    color: white;

    @media screen and (min-width: 700px) {
        display: none;
    }
`;

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleClick = () => {
        setMenuOpen((curr) => !curr);
    }

    return (
        <Container>
            <Left><a href="/"><img src='images/logo.png' style={{width: '250px'}} alt='logo'/></a></Left>
            <Center>
                <NavbarContainer>
                    <NavbarLink to="/">{strings.navigation.home}</NavbarLink>
                    <NavbarLink to="/services">{strings.navigation.services}</NavbarLink>
                    <NavbarLink to="/project">{strings.navigation.project}</NavbarLink>
                    <NavbarLink to="/about-us">{strings.navigation.referecnes}</NavbarLink>
                    <NavbarLink to="/contact">{strings.navigation.contact}</NavbarLink>
                </NavbarContainer>
            </Center>
            <Right>
                <ImgContainer>
                    <img className="iconFr"
                        alt="Netherlands"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg"/>
                    <img className="iconFr"
                        alt="France"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"/>
                    <img className="iconFr"
                        alt="English"
                        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"/>
                </ImgContainer>
                <MenuButton onClick={handleClick}>
                        {menuOpen ? <>&#10005;</> : <> &#8801;</>}
                    </MenuButton>
            </Right>
        </Container>
    )
}

export default Navigation;