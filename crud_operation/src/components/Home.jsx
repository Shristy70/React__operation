import React from "react";
import Carousel from "react-bootstrap/Carousel";
import b1 from "../images/img1.jpg";
import b2 from "../images/img2.jpeg";
import b3 from "../images/img3.webp";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import airhost from "../images/airshost.webp";
import personal from "../images/personal.webp";
import logo from "../images/logo2.png";
import offer from "../images/offer.webp";
import Insert from "./insert";
import fift1 from "../images/fift.jpg";
import { GrDocumentTime } from "react-icons/gr";
import globe from "../images/globe.jpg";
import fift2 from "../images/fift2.avif";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { MdOutlineChair } from "react-icons/md";
import { CiAirportSign1 } from "react-icons/ci";
const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={b1} alt="" style={{ width: "100%", height: "450px" }} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={b2} alt="" style={{ width: "100%", height: "450px" }} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={b3} alt="" style={{ width: "100%", height: "450px" }} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="second">
        <div className="searchrow1">
          <h5>What will you get</h5>
          <h2>Private Jet Charters save your time and give more comfort</h2>
          <p>
            Ut non augue egestas, commodo velit eget, vestibulum tellus.
            Curabitur vulputate justo elit, at elementum orci pulvinar vel.
            Pellentesque habitant morbi tristique. Ut non augue egestas, commodo
            velit eget, vestibulum tellus. Curabitur vulputate justo elit, at
            elementum orci pulvinar vel.
          </p>
          <div className="order">
            <div className="order1">
              <h3>Call for book an order:-</h3>
              <p className="number">9399-941-707</p>
            </div>
            <div className="button">
              <h6>Call Now</h6>
            </div>
          </div>
        </div>
        <div className="searchrow2">
          <div className="images">
            <img src={personal}  style={{width:"400px"}} alt="" />
          </div>
        </div>
      </div>
      <div className="third">
        <h5>jet comfort</h5>
        <h2>discover charter benefits</h2>
        <p>
          Ut non augue egestas, commodo velit eget, vestibulum tellus. Curabitur
          vulputate justo elit,at elementum orci pulvinar vel. Pellentesque
          habitant morbi tristique. Ut non augue egestas, commodo velit eget,
          vestibulum tellus. Curabitur vulputate justo elit.
        </p>
        <div className="thirdrow">
          <div className="thirdrow1">
            <img src={airhost} alt="" />
          </div>
          <div className="thirdrow2">
            <div className="row1">
              <div className="div1">
                <div className="icon">
                  <MdOutlineChair />
                </div>
                <h4>luxury and comfort</h4>
                <p>
                  Pellentesque habitant morbi tristique. Ut non augue egestas,
                  commodo velit eget.
                </p>
              </div>
              <div className="div2">
                <div className="icon">
                  <FaBusinessTime />
                </div>
                <h4>luxury and comfort</h4>
                <p>
                  Pellentesque habitant morbi tristique. Ut non augue egestas,
                  commodo velit eget.
                </p>
              </div>
            </div>
            <div className="row2">
              <div className="div1">
                <div className="icon">
                  <GrDocumentTime />
                </div>
                <h4>luxury and comfort</h4>
                <p>
                  Pellentesque habitant morbi tristique. Ut non augue egestas,
                  commodo velit eget.
                </p>
              </div>
              <div className="div2">
                <div className="icon">
                  <CiAirportSign1 />
                </div>
                <h4>luxury and comfort</h4>

                <p>
                  Pellentesque habitant morbi tristique. Ut non augue egestas,
                  commodo velit eget.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="read">Read more</button>
      </div>
      <div className="fourth">
        <h6>Get your flight</h6>
        <h4>Online request for private flight</h4>
        <div className="fourth4">
          <div className="fourthdata">
            <div className="tablerow1">
              <Insert />
            </div>
            <div className="imgrow2">
              <img src={offer} alt="discont" style={{height:"400px" , width:"400px"}} />
            </div>
          </div>
        </div>
      </div>
      <div className="fifth">
        <h4>blog posts</h4>
        <h1>Recent Aviation News</h1>
        <div className="mainfifth">
          <div className="leftpost">
            <div className="div1">
              <h6>December 12, 2018 | 1 | 4 </h6>
              <p>
                In London , Chnage the term of Discount for Airlines to pay
                airport Tax
              </p>
              <p>
                Integer maximus accumsan nunc, sit amet tempor lectus facilisis
                eu. Cras vel elit felis. Vestibulum id a …
              </p>
            </div>
            <div className="div2">
              <h6>December 12, 2018 | 1 | 4 </h6>
              <p>
                In London , Chnage the term of Discount for Airlines to pay
                airport Tax
              </p>
              <p>
                Integer maximus accumsan nunc, sit amet tempor lectus facilisis
                eu. Cras vel elit felis…
              </p>
            </div>
          </div>
          <div className="right">
            <div className="divright1">
              <div className="card1">
                <div className="img">
                  <img
                    src={fift1}
                    alt=""
                    style={{
                      width: "250px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="content">
                  <h6>December 12, 2018 | 1 | 4 </h6>
                  <p>
                    In London , Chnage the term of for Airlines to pay airport
                    Tax
                  </p>
                  <p>
                    Integer maximus accumsan nunc, sit amet convallis ipsum id a
                    …
                  </p>
                </div>
              </div>
              <div className="card2">
                <div className="img">
                  <img
                    src={fift2}
                    alt=""
                    style={{ width: "250px", height: "200px" }}
                  />
                </div>
                <div className="content">
                  <h6>December 12, 2018 | 1 | 4 </h6>
                  <p>
                    In London , Chnage the term of for Airlines to pay airport
                    Tax
                  </p>
                  <p>
                    Integer maximus accumsan nunc, sit amet convallis ipsum id a
                    …
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="div">
            <h6>Want to know about our offers first?</h6>
            <h5>Subscribe our newsletter</h5>
          </div>
          <div className="input">
            <input type="email" placeholder="entr your emil" />
            <button>subscribe <BiSolidRightArrowAlt /></button>
          </div>
          <div className="logo">
          <img src={logo} alt="" />
        </div>
        </div>
       
        <div className="content">
        <p>Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</p>
        </div>
        <div className="icons">
<div className="face"><FaFacebookF /></div>
<div className="insta"><FaInstagram /></div>
<div className="email"><TfiEmail /></div>
<div className="twitter"><FaTwitter /></div>
<div className="google"><FaGooglePlusG /></div>
        </div>
        <div className="footer2">
          <div className="copy">
            <h6>Like-themes © All Rights Reserved - 2019 - Purchase</h6>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
