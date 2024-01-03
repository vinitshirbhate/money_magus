import { Button } from "@mui/material"


import { Outlet, useNavigate } from "react-router-dom"


export const Main = () => {

    const navigate = useNavigate();

    return (
        <div className="main-container">

            <div className="fixed-sidebar">
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <h1 style={{
                        marginTop: "20px",
                        backgroundColor: "black",
                        padding: "10px 5px",
                        borderRadius: "10px"
                    }}>Money Magus</h1>

                    <Button onClick={()=>{navigate("/dashboard")}} >Dashboard</Button>
                    <Button onClick={()=>{navigate("/financial")}}>Financial Overview</Button>

                    <Button onClick={()=>{navigate("/dataAnalysis")}}>Data Analysis</Button>
                </div>
                <Button variant="contained" style={{ marginBottom: "20px", backgroundColor: "white", color: "black" }}> Logout</Button>

            </div>


          <Outlet />

        </div>
    )








}