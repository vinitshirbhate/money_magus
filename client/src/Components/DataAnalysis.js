import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import WalletIcon from '@mui/icons-material/Wallet';



export const DataAnalysis = ()=>{

    return (
        <div className="flex flex-col justify-start items-center dashboard gap-12">


        <div className="grid gap-12 md:grid-cols-4 place-items-center grid-auto-flow:row mt-8 ">

          <div className=" bg-blue-400 px-8 py-4 md:py-8 md:px-12 text-center  rounded-lg analysis-item">
          <AttachMoneyIcon sx={{
              fontSize:60
          }}/>

          <h1 className=" text-xl font-medium mt-2  md:text-3xl" >Income</h1>
          <h1 className=" text-md  mt-2 md:text-xl" >&#8377;9874</h1>
          </div>


          <div className=" bg-orange-400 px-8 py-4 md:py-8 md:px-12 text-center rounded-lg analysis-item">
          <WebAssetIcon sx={{
              fontSize:60
          }}/>
          
          <h1 className=" text-xl font-medium  mt-2   md:text-3xl" >Assets</h1>
          <h1 className=" text-md  mt-2 md:text-xl" >&#8377;9874</h1>
          </div>

          <div className=" bg-red-400 px-8 py-4 md:py-8 md:px-12 text-center  rounded-lg analysis-item">
          <LocalMallIcon sx={{
              fontSize:60
          }}/>
          <h1 className=" text-xl font-medium mt-2  md:text-3xl" >Expenses</h1>
          <h1 className=" text-md  mt-2 md:text-xl" >&#8377;9874</h1>
          </div>
          

          <div className=" bg-yellow-400  px-8 py-4 md:py-8 md:px-12 text-center rounded-lg analysis-item">
        
        <WalletIcon sx={{
            fontSize:60
        }}/>
        <h1 className=" text-xl font-medium  mt-2    md:text-3xl" >Liabilities</h1>
        <h1 className=" text-md  mt-2 md:text-xl" >&#8377;9874</h1>
        </div>
        
        </div>



        
        </div>
    )
}