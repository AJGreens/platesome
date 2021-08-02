import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import BoardForm from './BoardForm'
import '../style/dashboard.css'
import MyNav from './MyNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot,faAppleAlt,faCheese } from '@fortawesome/free-solid-svg-icons'

function Dashboard(){
    
    const fruitObjects=[{"name":"Apple","serving":{"g":"140","Apples":"1"}},{"name":"Apricots","serving":{"g":"105","Apricots":"3"}},{"name":"Avocado","serving":{"g":"130","Avocados":"0.2"}},{"name":"Banana","serving":{"g":"140","Bananas":"1"}},{"name":"Barbados Cherry","serving":{"g":"5","Cherries":"1"}},{"name":"Blackberries","serving":{"cup":"1"}},{"name":"Blackcurrant","serving":{"g":"59","ml":"125"}},{"name":"Blueberries","serving":{"g":"80","cup":"0.5"}},{"name":"Breadfruit","serving":{"g":"96","Breadfruit":"0.25"}},{"name":"Cantaloupe","serving":{"g":"150","Cantaloupes":"0.25"}},{"name":"Carambola","serving":{"g":"89","Carambolas":"1"}},{"name":"Cherimoya","serving":{"g":"312","Cherimoya":"1"}},{"name":"Cherries","serving":{"g":"140","Cherries":"21","cup":"1"}},{"name":"Clementine","serving":{"g":"74","Clementines":"1"}},{"name":"Coconut Meat","serving":{"g":"100"}},{"name":"Cranberries","serving":{"cup":"1"}},{"name":"Custard-Apple","serving":{"g":"120","Custard-Apples":"0.5"}},{"name":"Date Fruit","serving":{"g":"94","mL":"125"}},{"name":"Durian","serving":{"g":"128","mL":"125"}},{"name":"Elderberries","serving":{"g":"77","ml":"125"}},{"name":"Feijoa","serving":{"g":"100","Feijoas":"2"}},{"name":"Figs","serving":{"g":"100","Figs":"2"}},{"name":"Gooseberries","serving":{"g":"79","ml":"125"}},{"name":"Grapefruit","serving":{"g":"140","Grapefruits":"0.5"}},{"name":"Grapes","serving":{"g":"140","Grapes":"21","cup":"1"}},{"name":"Guava","serving":{"g":"90","Guavas":"1"}},{"name":"Honeydew Melon","serving":{"g":"150","Honeydew Melons":"0.17"}},{"name":"Jackfruit","serving":{"g":"87","ml":"125"}},{"name":"Java-Plum","serving":{"g":"60","Java-Plum":"20"}},{"name":"Jujube","serving":{"g":"70","Jujubes":"5"}},{"name":"Kiwi","serving":{"g":"140","Kiwis":"2"}},{"name":"Kumquat","serving":{"g":"95","Kumquats":"5"}},{"name":"Lemon","serving":{"g":"55","fruit":"1"}},{"name":"Lime","serving":{"g":"55","Limes":"1"}},{"name":"Longan","serving":{"g":"64","Longans":"20"}},{"name":"Loquat","serving":{"g":"157","mL":"250"}},{"name":"Lychee","serving":{"g":"96","Lychees":"10"}},{"name":"Mandarin","serving":{"g":"88","Mandarins":"1"}},{"name":"Mango","serving":{"g":"140","Mangos":"0.5"}},{"name":"Mangosteen","serving":{"g":"83","mL":"100"}},{"name":"Mulberries","serving":{"g":"74","ml":"125"}},{"name":"Nectarine","serving":{"g":"140","Nectarines":"1"}},{"name":"Olives","serving":{"g":"57","mL":"100"}},{"name":"Orange","serving":{"g":"140","Oranges":"1"}},{"name":"Papaya","serving":{"g":"153","Papayas":"0.5"}},{"name":"Passion Fruit","serving":{"g":"36","Passion Fruits":"2"}},{"name":"Peaches","serving":{"g":"140","Peaches":"1"}},{"name":"Pear","serving":{"g":"140","Pear":"1"}},{"name":"Persimmon","serving":{"g":"168","Persimmon":"1"}},{"name":"Dragonfruit","serving":{"cups":"0.5","grams":"100"}},{"name":"Pineapple","serving":{"g":"140","slices":"2"}},{"name":"Pitanga","serving":{"g":"73","mL":"100"}},{"name":"Plantain","serving":{"g":"81","mL":"125"}},{"name":"Plums","serving":{"g":"140","Plums":"1"}},{"name":"Pomegranate","serving":{"g":"77","Pomegranate":"0.5"}},{"name":"Prickly Pear","serving":{"g":"103","Prickly Pears":"1"}},{"name":"Prunes","serving":{"g":"25","Prunes":"3"}},{"name":"Pummelo","serving":{"g":"100","mL":"125"}},{"name":"Quince","serving":{"g":"92","Quinces":"1"}},{"name":"Raspberries","serving":{"g":"80","cup":"0.5"}},{"name":"Rhubarb","serving":{"ml":"125","cup":"0.5"}},{"name":"Rose-Apple","serving":{"g":"100"}},{"name":"Sapodilla","serving":{"g":"85","Sapodilla":"0.5"}},{"name":"Mamey Sapote","serving":{"g":"113","Mamey Sapote":"0.5"}},{"name":"Soursop","serving":{"g":"119","mL":"125"}},{"name":"Strawberries","serving":{"g":"140","Strawberries":"7"}},{"name":"Sugar-Apple","serving":{"g":"106","mL":"100"}},{"name":"Tamarind","serving":{"g":"100"}},{"name":"Tangerine","serving":{"g":"140","Tangerines":"2"}},{"name":"Watermelon","serving":{"g":"150","Watermelons":"0.04","cups":"1"}}]
    const veggieObjects=[{"name":"Amaranth Leaves","serving":{"g":"30","mL":"250"}},{"name":"Arrowroot","serving":{"g":"63","mL":"125"}},{"name":"Artichoke","serving":{"g":"128","Artichokes":"1"}},{"name":"Arugula","serving":{"g":"21","mL":"250"}},{"name":"Asparagus","serving":{"g":"85","spears":"10"}},{"name":"Bamboo Shoots","serving":{"g":"80","mL":"125"}},{"name":"Beans (Green)","serving":{"g":"85","beans":"20"}},{"name":"Beets","serving":{"g":"72","mL":"125"}},{"name":"Belgian Endive","serving":{"g":"95","mL":"250"}},{"name":"Bitter Melon*","serving":{"g":"53","mL":"125"}},{"name":"Bok Choy","serving":{"g":"90","mL":"125"}},{"name":"Broadbeans (Fava Beans)","serving":{"g":"80","mL":"125"}},{"name":"Broccoli","serving":{"g":"85","stalks":"0.5"}},{"name":"Broccoli Rabe","serving":{"cups":"2","g":"80"}},{"name":"Brussel Sprouts","serving":{"g":"76","sprouts":"4"}},{"name":"Cabbage (Green)","serving":{"g":"85","Cabbages":"0.92"}},{"name":"Cabbage (Red)","serving":{"g":"37","mL":"125"}},{"name":"Carrot","serving":{"g":"85","Carrots":"1"}},{"name":"Cassava (Yuca Root)","serving":{"g":"109","mL":"125"}},{"name":"Cauliflower","serving":{"g":"85","Cauliflowers":"0.17"}},{"name":"Celeriac (Celery Root)","serving":{"g":"82","mL":"125"}},{"name":"Celery","serving":{"g":"85","stalk":"1"}},{"name":"Chayote*","serving":{"g":"70","mL":"125","cup":"0.5"}},{"name":"Chicory (Curly Endive)","serving":{"g":"30","mL":"250"}},{"name":"Collards","serving":{"g":"19","mL":"125"}},{"name":"Corn","serving":{"g":"85","Corns":"1"}},{"name":"Crookneck","serving":{"g":"69","mL":"125"}},{"name":"Cucumber","serving":{"g":"85","Cucumbers":"0.25"}},{"name":"Daikon","serving":{"g":"338","Daikons":"1"}},{"name":"Dandelion Greens","serving":{"g":"58","ml":"125"}},{"name":"Edamame (Soybeans)","serving":{"g":"135","mL":"125"}},{"name":"Eggplant","serving":{"g":"43","mL":"125"}},{"name":"Fennel","serving":{"g":"46","mL":"125"}},{"name":"Fiddleheads","serving":{"g":"61","mL":"125"}},{"name":"Ginger Root","serving":{"g":"41","cup":"0.5"}},{"name":"Horseradish","serving":{"g":"100"}},{"name":"Jicama","serving":{"g":"63","mL":"125"}},{"name":"Kale","serving":{"g":"71","mL":"250"}},{"name":"Kohlrabi","serving":{"g":"71","mL":"125"}},{"name":"Leeks","serving":{"g":"47","leeks":"0.5"}},{"name":"Lettuce (Iceberg)","serving":{"g":"85","cups":"2","head":"0.25"}},{"name":"Lettuce (Leaf)","serving":{"g":"85","cups":"2"}},{"name":"Lettuce (Romaine)","serving":{"g":"85","cups":"2"}},{"name":"Mushrooms","serving":{"g":"85","Mushrooms":"5"}},{"name":"Mustard Greens","serving":{"g":"59","mL":"250"}},{"name":"Okra","serving":{"g":"53","mL":"125"}},{"name":"Onion (Red)","serving":{"g":"85","Red Onions":"0.5"}},{"name":"Onions","serving":{"g":"85","Onions":"0.5"}},{"name":"Parsnip","serving":{"g":"70","mL":"125"}},{"name":"Peas (Green)","serving":{"g":"77","mL":"125"}},{"name":"Pepper (Green)","serving":{"g":"85","Green Peppers":"0.5"}},{"name":"Pepper (Sweet Red)","serving":{"g":"85","Sweet Red Peppers":"0.5"}},{"name":"Potato (Red)","serving":{"g":"79","mL":"125"}},{"name":"Potato (White)","serving":{"g":"110","White Potatos":"1"}},{"name":"Potato (Yellow)","serving":{"g":"167","Yellow Potatos":"1"}},{"name":"Pumpkin","serving":{"g":"61","mL":"125"}},{"name":"Radicchio","serving":{"g":"100"}},{"name":"Radishes","serving":{"g":"61","mL":"125"}},{"name":"Rutabaga","serving":{"g":"74","mL":"125"}},{"name":"Salsify (Oysterplant)","serving":{"g":"56","mL":"100"}},{"name":"Shallots","serving":{"g":"68","mL":"100"}},{"name":"Snow Peas","serving":{"g":"85","mL":"125"}},{"name":"Sorrel (Dock)","serving":{"g":"338","radish":"1"}},{"name":"Spaghetti Squash","serving":{"cup":"1"}},{"name":"Spinach","serving":{"g":"85","cups":"2"}},{"name":"Squash (Butternut)","serving":{"g":"85","Butternut Squashs":"0.084"}},{"name":"Sugar Snap Peas","serving":{"g":"100"}},{"name":"Sweet Potato","serving":{"g":"110","Sweet Potatos":"0.5"}},{"name":"Swiss Chard","serving":{"g":"93","mL":"125"}},{"name":"Tomatillo*","serving":{"g":"70","mL":"125"}},{"name":"Tomato*","serving":{"g":"85","Tomato*s":"0.34"}},{"name":"Turnip","serving":{"mL":"125","cup":"0.5"}},{"name":"Watercress","serving":{"g":"36","mL":"250"}},{"name":"Yam Root","serving":{"g":"72","mL":"125"}},{"name":"Zucchini","serving":{"g":"85","Zucchinis":"0.5"}}]
    const dairyObjects=[{"name":"Cheese","serving":{"oz":"1.5","slices":"1", "dice": "3.5"}}, {"name":"Milk","serving":{"cups":"1","oz":"8"}}, {"name":"Yogurt","serving":{"cups":".75","oz":"6"}}]



    return(
        <>
        {/* style = {{ padding: '8%',  maxWidth: '30vw'} */}
        <MyNav dActive={true} sActive={false}/>
        <Container fluid className="foodGroups text-center">
            <Row>
                <Col className="foodGroup veg">
                    <h4>Veggies <FontAwesomeIcon icon={faCarrot} /></h4>
                    <BoardForm list={veggieObjects} fireRef="veg"/>
                </Col>
                <Col className="foodGroup fruit" >
                    <h4>Fruits <FontAwesomeIcon icon={faAppleAlt} /></h4>
                    <BoardForm list={fruitObjects} fireRef="fruit"/>
                </Col>
                <Col className="foodGroup dairy">
                    <h4>Dairy <FontAwesomeIcon icon={faCheese} /></h4>
                    <BoardForm list={dairyObjects} fireRef="dairy"/>
                </Col>
            </Row>
       
            {/* <Row>
                <Col className="veg"></Col>
      
                <Col className="fruit"></Col>
            </Row> */}
      
                {/* <div className="foodGroup veg" >
                    <h4>Veggies</h4>
                    <BoardForm list={veggieObjects} fireRef="veg"/>
                </div>
                <div className="foodGroup fruit">
                    <h4>Fruits</h4>
                    <BoardForm list={fruitObjects} fireRef="fruit"/>
                </div>
                <div className="foodGroup dairy">
                    <h4>Dairy</h4>
                    <BoardForm list={dairyObjects} fireRef="dairy"/>
                </div> */}

        </Container>
            
        </>
    )
}
export default Dashboard