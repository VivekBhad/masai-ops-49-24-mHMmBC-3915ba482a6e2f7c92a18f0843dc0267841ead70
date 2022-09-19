import { useContext, useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import { AppContext } from "../Context/AppContext";

const getData=({page=1})=>{
  return fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`)
  .then((res)=>{
  return res.json()
  })
}
function Dashboard() {
  const {logoutUser,token} = useContext(AppContext);
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)
  const [totalPages,setTotalPages] = useState()

  useEffect(()=>{
    getData({page})
    .then((res)=>{
     console.log(res.data)
     setData(res.data)
     setTotalPages(res.totalPages)
    
    })

  },[page])

  const handlePageChange=(page)=>{
    setPage(page)
  }
 const handleLogout=()=>{
  logoutUser()
 }
  
  
return (
    <div>
    {}
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={handleLogout}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <RestaurantTable data={data} />
        {}
      </div>
      <div data-testid="pagination-container">
      <Pagination  totalPages={totalPages} currentPage={page}
        handlePageChange={handlePageChange}
      />
      </div>
      
    </div>
  );
}

export default Dashboard;
