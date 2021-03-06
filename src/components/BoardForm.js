import React,{useState,useEffect,useContext} from 'react'
import {Button,Form,Row,Col} from 'react-bootstrap'
import { AuthContext } from '../contexts/AuthContext'
import {app} from './Firebase'
import '../style/dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
 
function BoardForm(props){
    const {currUser}= useContext(AuthContext)

    const items=props.list
    const d=new Date();
    const dFormat=d.getMonth()+1+"-"+d.getDate()+"-"+d.getFullYear();

    const [dString] = useState(dFormat)
    
    const [quantity, setQuantity]=useState(0)
    const [unit, setUnit] = useState('')
    const [itemIndex,setItemIndex] = useState(0)
    const [userList,setUserList]=useState([])
    const [totalServs, setTotalServs] = useState("0.00")

    useEffect(()=>{
        setUnit(Object.keys(items[itemIndex].serving)[0])//sets intial unit after component mounts
        const ref= app.database().ref(currUser.uid+"/"+dString+"/Lists/"+props.fireRef)
        ref.on('value',snapshot=>{
            const userItems= snapshot.val()
            let allItems=[]
            for(let item in userItems){
                allItems.push({
                    id:item,
                    name:userItems[item].name,
                    quantity:userItems[item].quantity,
                    unit:userItems[item].unit,
                    serving:userItems[item].serving
                })
           
            }
            setUserList(allItems)
        }) 

    },[currUser.uid, dString, itemIndex, items,props.fireRef])


    useEffect(()=>{
        const myRef = app.database().ref(currUser.uid+ "/" + dString +"/TotalServs")
        myRef.once("value", snapshot=>{
            const items = snapshot.val()

            if(items===null){
                myRef.set({
                    veg: "0.00",
                    fruit: "0.00",
                    dairy: "0.00"
                })
            }

        })
    },[currUser.uid,dString])

    useEffect(()=>{

        const myRef = app.database().ref(currUser.uid+ "/" + dString +"/TotalServs")
        myRef.on("value", snapshot=>{
            const items = snapshot.val()

            for (let item in items){
                if (item === props.fireRef){
                    setTotalServs(items[item])
                }
            }
            
        })
    },[dString,currUser.uid, props.fireRef])


    
    function handleAdd(e){
        e.preventDefault()
        const ref= app.database().ref(currUser.uid+"/"+dString+"/Lists/"+props.fireRef)
        const currObject=items[itemIndex];
        const serving= Math.ceil(quantity/currObject.serving[unit]*100)/100
        makeTotalServs(serving)
        ref.push({name:currObject.name,quantity:quantity,unit:unit,serving:serving})
    }
    
    function handleRemove(item){
        const ref= app.database().ref(currUser.uid+"/"+dString+"/Lists/"+props.fireRef+"/"+item.id)
        console.log(-1*item.serving)
        makeTotalServs((-1*item.serving))
        ref.remove()
    }


    function makeTotalServs(addOn){
        const myRef = app.database().ref(currUser.uid+ "/" + dString +"/TotalServs")
        myRef.once("value", snapshot=>{
            const items = snapshot.val()
            const updatedTotalServs = (parseFloat(items[props.fireRef])+addOn).toFixed(2);
            myRef.update({[props.fireRef]: updatedTotalServs})
        })
    }




    return(
        <>
            <Form className="text-center mb-4 newForm">
                <Row className="mb-3">
             
                    <Form.Group as={Col}>
                        <select className="form-select" value={itemIndex} onChange={(e)=>{setItemIndex(e.target.value)}}>
                            {items.map((item,index)=>{
                                return <option value={index} key={index}>{item.name}</option>
                            })
                            }
                        </select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">

                    <Form.Group as={Col}>  
                        <Form.Control value={quantity} onChange={(e)=>setQuantity(e.target.value)} type="number" min="0" max="9999"/>
                    </Form.Group>  

                    <Form.Group as={Col}>  
                        <select className="form-select" value={unit} onChange={(e)=>setUnit(e.target.value)}>
                            {Object.keys(items[itemIndex].serving).map((name,index)=>{
                                return <option value={name} key={index}>{name}</option>
                            })
                            }
                        </select>
                    </Form.Group>
                </Row>
                {unit&&<Button className="w-25" id="addBtn" onClick = {handleAdd}>Add</Button>}
            </Form>
        <ul className={"itemList scroll "+props.fireRef+"List"}>
                {userList.map(item=>{
                    return (<li key={item.id}> 
                        <b>{item.name}</b>({item.quantity}{item.unit}): {item.serving} servings   <button className="deleteBtn" variant="danger" onClick={()=>handleRemove(item)}>
                        <FontAwesomeIcon icon={faTimes} /></button></li>
                        )
                })
            }
                
        </ul>
        <h6>{totalServs} / {props.idealserv} Ideal Daily Servings</h6>
        </>
    )

}
export default BoardForm