
import { display } from "@mui/system";
import { useEffect, useState } from "react";
import { Category } from "./Category";
import "./Home.css";
import { Navbar } from "./Navbar";
import { Popup } from "./Popup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
export const Home = () => {
  
const [trigger, setTrigger] = useState(true)
const [searchTerm, setSearchTerm] = useState("")
   const [data, setData] = useState([])
  const [styling, setStyling] = useState("show")
  const RemoveChrome = ()=>{
    setStyling("noshow")
  }
  useEffect(()=>{
    fetchOffers()
  }, [])
const [Onedata, setonedata] = useState({})
    const fetchOffers = async () => {
      let d = []
      const baseURL = "https://offerinfo.herokuapp.com/shops";
      await fetch(baseURL)
        .then((resp) => resp.json())
        .then((dataa) => setData(dataa));
    };
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const handleBtnpress = (item)=>{
  setonedata(item)
  handleOpen()
}
console.log(data)

const filtercatergor = async (filtercatgory) =>{
    let letter =filtercatgory.toLowerCase();
     if (letter === "all"){
       const baseURL = "https://offerinfo.herokuapp.com/shops";
       await fetch(baseURL)
         .then((resp) => resp.json())
         .then((dataa) =>
           setData(dataa)
         );
     } else if (letter !="jwellery"){
        const baseURL = "https://offerinfo.herokuapp.com/shops";
        await fetch(baseURL)
          .then((resp) => resp.json())
          .then((dataa) =>
            setData(dataa.filter((item) => item.category === letter))
          );
    
    }else {
         const baseURL = "https://offerinfo.herokuapp.com/shops";
         await fetch(baseURL)
           .then((resp) => resp.json())
           .then((dataa) =>
             setData(dataa.filter((item) => item.category === "jewelery"))
           );
    }

}
const discountsort = async (discountt) =>{
  if (discountt == "<50"){
        const baseURL = "https://offerinfo.herokuapp.com/shops";
        await fetch(baseURL)
          .then((resp) => resp.json())
          .then((dataa) =>
            setData(dataa.filter((item) => item.discount < 50))
          );
  }else {
      const baseURL = "https://offerinfo.herokuapp.com/shops";
      await fetch(baseURL)
        .then((resp) => resp.json())
        .then((dataa) => setData(dataa.filter((item) => item.discount >= 50)));
  }
}
  return (
    <div>
      {<Navbar />}

      <div id="paras">
        <h1 id="deals">All deals and coupons</h1>
        <p id="dealpara">
          The best online deals and coupons, including Klarna exclusives,
          updated daily.
        </p>
        <div className={styling}>
          <p id="finalpara">
            Pay in 4 anywhere with the Chrome extension.
            <span id="chromeadd">
              <b> Add to Chrome</b>
            </span>
          </p>
          <p id="chromeremove" onClick={RemoveChrome}>
            <b>X</b>
          </p>
        </div>
      </div>
      <div id="mainpart">
        {<Category filtercatergor={filtercatergor} fetchOffers={fetchOffers} discountsort={discountsort}/>}

        <div id="searchpart">
          <input onChange={(e)=>{
            setSearchTerm(e.target.value)
          }} type="text" id="inputsearch" placeholder="Search" />
        </div>

  
        <div id="dataset">
          {data.filter((val)=>{
            if (searchTerm == ""){
              return val
            }else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          }).map((item) => (
            <div>
              <div
                className="imageutl"
                onClick={()=>{
                  handleBtnpress(item)}}
                style={{
                  backgroundImage: `url(${item.image})`,
                  height: "30vh",
                  width: "30vh",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "30px",
                  border: "1px solid black",
                  cursor: "pointer",
                }}
                key={item.id}
              >
                <h1 className="tagline">{item.tag_line}</h1>
                <div className="prodinfo">
                  <p className="titlepage">{item.title}</p>
                  <p className="titlepage1">{item.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Popup open={open} handleClose={handleClose} handleOpen={handleOpen} Onedata={Onedata}></Popup>
    </div>
  );
};
