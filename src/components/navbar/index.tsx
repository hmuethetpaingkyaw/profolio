import { FC, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import Bear from "../../assets/imgs/bear.png";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";

export interface Props {}

export const NavBar: FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState<string | boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="px-5">
      <Navbar expand={true} className="d-flex justify-content-around py-3">
        <Nav navbar>
          <NavItem>
            <NavLink href="/components/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              My work
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarBrand href="/">
          <div style={{borderBottom: "3px solid black"}}>
            <img src={Bear} width={30} height={25} className="rounded my-3" />
          </div>
        </NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink href="/components/">
              <div style={{ fontSize: "25px" }}>
                <RiFacebookCircleLine />
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              <div style={{ fontSize: "25px" }}>
                <RiInstagramLine />
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              <div style={{ fontSize: "25px" }}>
                <RiLinkedinBoxFill />
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              <div style={{ fontSize: "25px" }}>
                <RiGithubFill />
              </div>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
