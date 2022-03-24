import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import { RemoveFav } from "../Redux/actions";

import { Link } from "react-router-dom";
export const Fav = () => {
      const dispatch = useDispatch()
    const { datas } = useSelector((state) => state.regState);
let [favdata, setfavdata] = useState([])
    useEffect(()=>{
        fetchdata()
    })

    const fetchdata = ()=>{
   setfavdata(datas)
    }
    const handleDelete = (row) => {
        console.log(row)
      let newdata = favdata.filter((item) => item.id !== row.id);
   setfavdata(newdata)
 
    };
      
 
 console.log(favdata, " datas")
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
   ];
       const selectRow = {
         mode: "checkbox",

         bgColor: (row, rowIndex) => (rowIndex >= 0 ? "blue" : ""),
       };

    return (
      <div>
          <Link to="/">Back to Home</Link>
          <h1>Favourite</h1>

        <BootstrapTable
          keyField="id"
          data={favdata}
          columns={columns}
          selectRow={selectRow}
        />
      </div>
    );
};
