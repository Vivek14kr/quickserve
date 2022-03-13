import "./Popup.css";

import ModalUnstyled from "@mui/base/ModalUnstyled";
import { styled } from "@mui/system";
import { useState } from "react";
import Box from "@mui/material/Box";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 520,
  height:645,
  bgcolor: "background.paper",

  p: 2,
  px: 4,
  pb: 3,
  pl:0,
  pr:0,
  overflow:'scroll'
  
};
export const Popup = ({open, handleClose, handleOpen, Onedata}) => {
     console.log(Onedata, " Onedata")
  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
    >
      <Box sx={style}>
        <h1 className="closingbtn" onClick={handleClose}>
          X
        </h1>
        <div
          className="newbox"
          style={{
            backgroundImage: `url(${Onedata.image})`,
            height: "60vh",
            width: "66vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

            cursor: "pointer",
          }}
          key={Onedata.id}
        >
          <h1 className="tagline1">{Onedata.tag_line}</h1>
          <div className="prodinfo">
           
            <p className="titlepage2">{Onedata.info}</p>

            <p className="desstyle">{Onedata.description}</p>
            
          </div>
          <button className="dealbtn">Show Deal</button>
        </div>
      </Box>
    </StyledModal>
  );
};
