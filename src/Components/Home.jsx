import { useEffect, useState } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import "./Home.css"
import { useDispatch, useSelector } from "react-redux";
import { RegFav } from "../Redux/actions";
import { RemoveFav } from "../Redux/actions";
import Popup from "reactjs-popup";
import axios from "axios"
import { Link } from "react-router-dom";
export const Home = ()=>{
   let [track, setTrack] = useState(true)

const dispatch = useDispatch();

const { datas } = useSelector((state) => state.regState);
let [addpost, setaddpost] = useState("")
let [addbody, setaddbody] = useState("")
    let [data, setData] = useState([])
let [updatedata, SetUpdate] = useState({})
let [changedata, SetChange] = useState("")
let [title, setTitle] = useState("")
 
    useEffect(()=>{
        fetchdata()
    }, [])

    const fetchdata = async()=>{
        let d = []
         const baseURL = " https://jsonplaceholder.typicode.com/posts";
         await fetch(baseURL)
           .then((resp) => resp.json())
           .then((dataa) => {
             
            dispatch(RegFav(dataa))
            setData(dataa)
            });
    }
    console.log(data, " data")

    const handleUpdate = (id, userid) =>{
      
      for (let i = 0; i < data.length; i++){
        if (data[i].id == id){
          data[i].title = title;
          data[i].body = changedata;
        }
      }
    }
    const handleDelete = (id) =>{
      let k = data.filter((item) => item.id !== id)

      setData(k)
    }
    const handleAdd = ()=>{
      setData([...data, {"title":addpost ,"body":addbody}])
    }
    return (
      <div id="boxes">
        <div id="final">
          {data.map((item) => (
            <div className="tableformat">
              <h1>{item.title}</h1>
              <p>{item.body}</p>
              <div>
                <Popup trigger={<button>Edit</button>} position="right center">
                  <div className="box">
                    <p>Title</p>
                    <input
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      type="text"
                      placeholder="Title
                      "
                    />
                    <p>Body</p>
                    <input
                      onChange={(e) => {
                        SetChange(e.target.value);
                      }}
                      type="text"
                      placeholder="Body"
                    />
                    <button
                      onClick={() => {
                        handleUpdate(item.id, item.userId);
                      }}
                    >
                      Update
                    </button>
                  </div>
                </Popup>
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setaddpost(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Body"
            onChange={(e) => {
              setaddbody(e.target.value);
            }}
          />
          <br />
          <button onClick={handleAdd}>Add Post</button>
        </div>
      </div>
    );
}