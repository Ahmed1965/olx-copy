import React, { Fragment } from "react";
import logo from "../img/olxlogo.png";
import hero from '../img/hero.jpg'
import adgoogle from '../img/adgoogle.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCoffee,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import "../props.css";
import { Link } from "react-router-dom";

function Header() {
  //sub header nav
  const nav = [
    { ID: 1, label: "Mobile Phones" },
    { ID: 2, label: "Cars" },
    { ID: 3, label: "Motorcycles" },
    { ID: 4, label: "Houses" },
    { ID: 5, label: "TV Video" },
    { ID: 6, label: "Tablets" },
    { ID: 7, label: "Land and Plots" },
  ];

  return (
    <React.Fragment>
      <div className="header flex fixed aic">
        <div className="logo">
          <img src={logo}></img>
        </div>

        <div className="location rel flex aic">
          <div className="s24 font">
            <i class="fa fa-search ico"></i>
          </div>

          <input
            className="labl s15 font"
            placeholder="Your loaction"
            value="Pakistan">
          </input>
          <div className="s24 font">
            <i class="fa fa-chevron-down fa-1x arrow "></i>
          </div>
        </div>

        <div className="search flex aic">
          <input type="text"placeholder="Find cars Mobil Phpnes and more..."className="query s15 font"></input>
          <div className="s24 font"><i class="fa fa-search "></i></div>
        </div>
        <div className="action flex aic">
          <Link to="/account/login " className="color fontb s18 nouhnoul">
            Login
          </Link>
          <button className="color sell flex aic">
            <div><i class="fa fa-plus ico"></i></div>
            <h2 className="s15 fontl"> Sell</h2></button>
        </div>
      </div>

      //starting sub header of olx

      <div className="hnav fixed flex aic">
        <button className="view-cates flex aic">
          <h2 className="s15 font"> All Categories</h2>

          <div><i class="fa fa-chevron-down fa-1x arrow "></i></div>
        </button>
        {nav.map((item) => {
          return (
            <Link to={"/browser/" + item.ID}> {item.label}</Link> //className ="noul noulh color font s15"
          );
        })}
        

        <div className='hclr' />
      
      </div>
      <div className="image abs ">
        <img src={hero} />

        <div className="image  ">
        <img className='ad' src={adgoogle} />

        </div>
        <div className='hclr' />
      </div>
      
    </React.Fragment>

  );
}
export default Header;
