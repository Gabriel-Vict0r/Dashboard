import React from "react";
import { Tittle, Content, Main, WrapperCard, WrapperTwo } from "./Dashboard.style";
import {
  Header,
  SearchBar,
  ContainerSearch,
  InfoProfile,
  ImageProfile,
  UserName,
} from "./Header.style";
import { Menu, List, Element } from "./Menu.style";
import Balance from "../../CardBalance";
import Earn from "../../CardEarn";
import Activity from "../../CardActivity";
import { Logo } from "../../../Global/GeneralComponents";
import LogoSvg from "../../../img/logo.svg";
import Login from "../Login/Login";
import { FiSearch } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdOutlineCurrencyExchange,
  MdOutlineContacts,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiWallet } from "react-icons/ci";
import { BsCalendar3Range, BsGraphUpArrow } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { RiListSettingsLine } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import TotalTransaction from "../../TotalTransaction";
import QuickTransfer from "../../QuickTransfer";
const Dashboard = () => {
  //Hook for management the color state from search Icon
  const [color, setColor] = useState(false);

  //List from menu links
  const menuLinks = [
    {
      content: "Dashboard",
      route: "/dashboard",
      icon: <MdOutlineDashboard />,
    },
    { content: "Profile", route: "/profile", icon: <CgProfile /> },
    {
      content: "My Wallet",
      submenus: [
        { content: "Asset & balance", route: "/assetBalance" },
        { content: "Card management", route: "/cardManagement" },
      ],
      icon: <CiWallet />,
    },
    { content: "Calendar", route: "/calendar", icon: <BsCalendar3Range /> },
    { content: "Transfer", route: "/transfer", icon: <BiTransfer /> },
    { content: "Transaction", route: "/transaction", icon: <BsGraphUpArrow /> },
    {
      content: "Exchange",
      route: "/exchange",
      icon: <MdOutlineCurrencyExchange />,
    },
    { content: "Contacts", route: "/contacts", icon: <MdOutlineContacts /> },
    { content: "Setting", route: "/setting", icon: <RiListSettingsLine /> },
  ];
  return (
    <Main>
      <Header>
        <Logo src={LogoSvg} $Header />
        <ContainerSearch $colorSvg={color}>
          <FiSearch />
          <SearchBar
            type="search"
            placeholder="Find Your Trensaction..."
            onFocus={() => setColor(true)}
            onBlur={() => setColor(false)}
          />
        </ContainerSearch>
        <InfoProfile></InfoProfile>
        <InfoProfile></InfoProfile>
        <InfoProfile>
          <IoIosNotifications />
          <ImageProfile src="https://avatars.githubusercontent.com/u/46754034?s=96&v=4" />
          <UserName>Gabriel Victor</UserName>
        </InfoProfile>
      </Header>
      <Menu>
        <List>
          {/* Mapping the const MenuLinks*/}
          {menuLinks.map((el) => (
            <Element to={el.route}>
              {el.icon}
              {el.content}
            </Element>
          ))}
        </List>
      </Menu>
      <Content>
        <Tittle>Dashboard</Tittle>
        <WrapperCard>
          <Balance subtitle="Current Balance" balance="$12,000.00" coin="USD" />
          <Earn
            subTitle="Earning"
            date="montly"
            earn="$5,000.00"
            percent="+35.5%"
          />
          <Activity subtitle="Weakly activity" />
        </WrapperCard>
        <WrapperTwo>
          <TotalTransaction />
          <QuickTransfer />
        </WrapperTwo>
      </Content>
    </Main>
  );
};

export default Dashboard;