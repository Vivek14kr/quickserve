import { useEffect, useState } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import "./Home.css"
import { useDispatch, useSelector } from "react-redux";
import { RegFav } from "../Redux/actions";

import { Link } from "react-router-dom";
export const Home = ()=>{
   let [track, setTrack] = useState(true)

const dispatch = useDispatch();

const { datas } = useSelector((state) => state.regState);

    let [data, setData] = useState([])


 
    useEffect(()=>{
        fetchdata()
    }, [])
const handleDelete = ({id}) => {
 

  let newdata = data.filter(item => item.id !== id)
  setData(newdata)
  // var newdata = [...data]
  // newdata.splice(rowId-1, 1);
  // setData(newdata)
  //1 YourCellName
};
    const fetchdata = async()=>{
        let d = []
         const baseURL = "https://thoudand.herokuapp.com/shops";
         await fetch(baseURL)
           .then((resp) => resp.json())
           .then((dataa) => {
               setData(dataa);
               setTrack(false)
            });
    }
    console.log(data, " data")

    const handleFav = (row)=>{
      dispatch(RegFav(row))
    }
    const columns = [
      {
        dataField: "email",
        text: "Email",
      },
      {
        dataField: "first_name",
        text: "First Name",
      },
      {
        dataField: "last_name",
        text: "Last Name",
      },
      {
        dataField: "gender",
        text: "Gender",
      },
      {
        dataField: "remove",
        text: "Delete",
        formatter: (cellContent, row) => {
          return (
            <button
              className="btn btn-danger btn-xs"
              onClick={() => handleDelete(row)}
            >
              Delete
            </button>
          );
        },
      },
      {
        dataField: "favourite",
        text: "Favourite",
        formatter: (cellContent, row) => {
          return (
            <button
              className="btn btn-danger btn-xs"
              onClick={() => handleFav(row)}
            >
              Favourite
            </button>
          );
        },
      },
    ];

    const selectRow = {
      mode: "checkbox",
      
    
      bgColor: (row, rowIndex) => (rowIndex >= 0 ? "blue" : ""),
    };

   
    return (
      <div>
        <Link to="/fav">
          <button>Go to favourite</button>
        </Link>
        {track ? (
          <h1>...loading</h1>
        ) : (
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            selectRow={selectRow}
          />
        )}
      </div>
    );
}