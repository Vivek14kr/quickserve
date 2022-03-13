import "./navbar.css"
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Button from "@mui/material/Button";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

export const Navbar = ()=>{
    
    console.log(PopupState, " fdfdf" ,bindTrigger, bindPopover)
    return (
      
        <div id="navbar">
          <div id="title">
            <b>Klarna.</b>

            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div id="content">
                  <p id="shop" variant="contained" {...bindTrigger(popupState)}>
                    Shop
                  </p>
                  <Popover
                    id="Popover"
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    style={{ maxHeight: "300px" , maxWidth:"2000px",marginTop:"45px"}}
                  >
                    <Typography sx={{ p: 2 }}>
                      <div id="listcontent">
                        <div class="list-item">
                          <h4 class="title">Men's Fashion</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                          <h4 class="title">Beauty</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                        </div>
                        <div class="list-item">
                          <h4 class="title">Women's Fashion</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                          <h4 class="title">Furniture</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                        </div>
                        <div class="list-item">
                          <h4 class="title">Home, Kitchen</h4>
                          <ul>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                            <li>
                              <a href="#">Product List</a>
                            </li>
                          </ul>
                        </div>
                        <div class="list-item">
                          <img src="./img/shop1.jpg" alt="shop" />
                        </div>
                      </div>
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>

            <p>How it works</p>

            <p>Pay in 4</p>

            <p>The shopping app</p>

            <p>Help</p>
          </div>
          <div id="btns">
            <button id="loginbtn">Login</button>

            <button id="getappbtn">Get the app</button>
          </div>
          <hr />
        </div>
     
    );
}