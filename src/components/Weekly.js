// import React,{useEffect,useState,useContext} from 'react'
// import MyNav from './MyNav'
// import {app} from "./Firebase"
// import { AuthContext} from '../contexts/AuthContext'
// import {Bar} from 'react-chartjs-2'

// function Weekly(){
//     const {currUser}=useContext(AuthContext)

//     const [dateList,setDateList]= useState([])
//     const [servState,setServState]=useState()
//     const today = new Date();
//     const [show,setShow]=useState(false)
//     const todayString=today.getMonth()+1+"-"+today.getDate()+"-"+today.getFullYear();



//     useEffect(()=>{
//         const ref= app.database().ref(currUser.uid);

//         let pastSixDays=[]
//         let vfdArray = {veg:[],fruit:[],dairy:[]}
//         ref.on('value',snapshot=>{
//             const allDatesStored= snapshot.val()
//             for(let i=6;i>=0;i--){
//                 const d= new Date();
//                 d.setDate(d.getDate()-i)
//                 const dString=d.getMonth()+1+"-"+d.getDate()+"-"+d.getFullYear();
//                 pastSixDays.push(dString)

//                 if(allDatesStored[dString]){
//                     const storedVFD=allDatesStored[dString]["TotalServs"];
//                     for(let serv in storedVFD){
//                         vfdArray[serv].push(parseFloat(storedVFD[serv]))
//                     }
//                 }
//                 else{
//                     vfdArray["veg"].push(0)
//                     vfdArray["fruit"].push(0)
//                     vfdArray["dairy"].push(0)
//                 }
                
//             }
//             let allLabels=[]
//             const colors=["#f5be41","#CF3721","#31A9B8"]
//             let c=0;
//             for(let serv in vfdArray){
//                 allLabels.push({
//                     label: serv,
//                     backgroundColor: colors[c],
//                     borderColor: 'rgba(0,0,0,1)',
//                     borderWidth: 2,
//                     data: vfdArray[serv],
//                     plugins: {
//                     annotation: {
//                         annotations: [{
//                             type: 'line',
//                             mode: 'horizontal',
//                             scaleID: 'y-axis-0',
//                             value: '26',
//                             borderColor: 'tomato',
//                             borderWidth: 1
//                         }],
//                         drawTime: "afterDraw" // (default)
//                     }
//                 }
//                 })
//                 c++;
//             }
//             allLabels.push({
//                 type: 'line',
//                 label: 'Line Dataset',
//                 data: [5, 5, 5, 5, 5, 5, 5],
//                 pointRadius:0,
//                 borderColor:colors[0],
//                 borderDash:[25, 25],

//             })
            
//             setServState({
//                 labels: pastSixDays,
//                 datasets: allLabels
//             })

//         })


//     },[])

    


//     return(
//         <>
//             <MyNav dActive={false} sActive={true}/>
//             <Bar data={servState}/>
//         </>

//     )

// }


// export default Weekly