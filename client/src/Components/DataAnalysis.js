import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import WalletIcon from "@mui/icons-material/Wallet";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bar, Line, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


export const DataAnalysis = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [graphDataDB, setGraphData] = useState({});
 

  useEffect(() => {
    console.log(localStorage.getItem("email"));
    if (!localStorage.getItem("email")) {
      navigate("/login");
    } else {
      const email = localStorage.getItem("email");

      const getValues = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/getValues?email=${email}`
          );
          // console.log("data", response.data.values,response.data.userData);
          setValues(response.data.values);
          setGraphData(response.data.graphData);
        console.log(response.data.graphData);
       

        } catch (e) {
          window.alert(`${e.response.msg}`);
        }
      };

      getValues();
    }
  }, []);

  function graphGenerator(){
    return(
      <div className="graph-container m-4 rounded-lg min-w-full flex bg-white flex-col sm:flex-col md:flex-col  lg:flex-row items-center justify-center gap-10">
       <div className="bar-graph  bg-white p-10" > <Bar  data={{
    labels: ['Income', 'Assets', 'Liabilities','Expenses'],
    datasets: [
      {
        id: 1,
        label: 'Amount',
        data: [values.incomeSum, values.assetSum, values.liabilitySum,values.expenseSum],
      },
      
    ],
  }} /></div>
       <div className="bar-graph bg-white p-10" > <Pie  data={{
    labels: ['Assets', 'Liabilities','Expenses'],
    datasets: [
      {
        id: 1,
        label: 'Percentage',
        data: [(values.assetSum/values.incomeSum)*100, (values.liabilitySum/values.incomeSum)*100,(values.expenseSum/values.incomeSum)*100],
      },
      
    ],
  }} /></div>
      

      </div>
    )
  }

  return (
    <>
    <div className="flex flex-col justify-start items-center dashboard gap-12">
      <div className="grid gap-12 md:grid-cols-4 place-items-center grid-auto-flow:row mt-8 ">
        <div className=" bg-blue-400 px-8 py-4 md:py-8 md:px-12 text-center  rounded-lg analysis-item">
          <AttachMoneyIcon
            sx={{
              fontSize: 60,
            }}
          />

          <h1 className=" text-xl font-medium mt-2  md:text-3xl">Income</h1>
          <h1 className=" text-md  mt-2 md:text-xl">
            &#8377;{values.incomeSum}
          </h1>
        </div>

        <div className=" bg-orange-400 px-8 py-4 md:py-8 md:px-12 text-center rounded-lg analysis-item">
          <WebAssetIcon
            sx={{
              fontSize: 60,
            }}
          />

          <h1 className=" text-xl font-medium  mt-2   md:text-3xl">Assets</h1>
          <h1 className=" text-md  mt-2 md:text-xl">
            &#8377;{values.assetSum}
          </h1>
        </div>

        <div className=" bg-red-400 px-8 py-4 md:py-8 md:px-12 text-center  rounded-lg analysis-item">
          <LocalMallIcon
            sx={{
              fontSize: 60,
            }}
          />
          <h1 className=" text-xl font-medium mt-2  md:text-3xl">Expenses</h1>
          <h1 className=" text-md  mt-2 md:text-xl">
            &#8377;{values.expenseSum}
          </h1>
        </div>

        <div className=" bg-yellow-400  px-8 py-4 md:py-8 md:px-12 text-center rounded-lg analysis-item">
          <WalletIcon
            sx={{
              fontSize: 60,
            }}
          />
          <h1 className=" text-xl font-medium  mt-2    md:text-3xl">
            Liabilities
          </h1>
          <h1 className=" text-md  mt-2 md:text-xl">
            &#8377;{values.liabilitySum}
          </h1>
        </div>
      </div>


      {graphDataDB.length!=0  ? graphGenerator()   : ""}
     
    </div>
   
    </>
  );
};
