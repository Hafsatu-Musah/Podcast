function NavItem(props) {
    return (
        <a href="#" className={props.classItem}>{props.text}</a>
    );
}
function CastData(props){
    return(
        <div className="pp">
            <img src= {props.image} alt="" className="pp>img"></img>
        <p className="p">{props.text}</p>
        </div> 
            
    );
}
function Podcast(props) {
    return(
        <div className="subdiv">
            <div className="image">
                <img src= {props.img} alt=""></img>
            </div>
            <div className="title">
                <div className="middiv">
                    <h2>{props.title}</h2>
                    <p>{props.author}{props.date}{props.time} </p>
                    <audio controls="controls" src={props.audio}></audio>
                </div>
            </div>
        </div>
    );
}

function App(){
    const [navData, setNavData] = React.useState([
    { id: 1, text: "Home", classItem:"home"},
    { id: 2, text: "Dropdown", classItem:"anch"},
    { id: 3, text: "About", classItem:"anch"},
    { id: 4, text: "Contact", classItem:"anch"},
    { id: 5, text: "Login/Register", classItem:"anch"}
]);


    const [astData, setAstData]= React.useState([
    {id:1, image:"./images/popcast.jpg", text:"Clara 32,420 podcasts"  },
    {id:2, image:"./images/Hafsa.jpg", text: "Hafsa    32,420 podcasts"  },
    {id:3, image:"./images/popcast.jpg", text: "Mathew   32,420 podcasts"  },
    {id:4, image:"./images/popcast.jpg", text: "Nicho    32,420 podcasts"  },
    {id:5, image:"./images/popcast.jpg", text: "Prilla   32,420 podcasts"  },
    {id:6, image:"./images/popcast.jpg", text: "Abigail  32,420 podcasts"  },
    {id:7, image:"./images/popcast.jpg", text: "Charles  32,420 podcasts"  },
    {id:8, image:"./images/popcast.jpg", text: "Abdul    32,420 podcasts"  },
]);
    const [podData, setPodData] = React.useState([
    {id:1,img:"./images/puffins-5223055_1920.jpg", title:"Episode 08: How To Create WebPage Using Bootstrap 4.",  author:"By Matthew Bansford", date: "/  9 August 2020", time:"/  5:10:20" ,audio:""},
    {id:2,img:"./images/animal-4917802_1920.jpg", title:"Episode 07: How To Create WebPage Using Bootstrap 4.", author:"By Hafsatu Musah", date:"/  10 August 2020", time:"/  3:20:30" ,audio:""},
    {id:3,img:"./images/butterfly-5363370_1920.jpg", title:"Episode 06: How To Create WebPage Using Bootstrap 4.", author:"By Priscilla Sasu", date:"/  12 August 2020", time:"/  1:10:20" ,audio:""},
    {id:4,img:"./images/mountain-5092625_1920.jpg", title:"Episode 05: How To Create WebPage Using Bootstrap 4.", author:"By Nicholas", date:"/  15 August 2020", time:"/  2:40:20" ,audio:""},
    {id:5,img:"./images/cat-5488070_1920.jpg", title:"Episode 04: How To Create WebPage Using Bootstrap 4.", author:"By Charles Afari", date:"/  20 August 2020", time:"/  4:40:20" ,audio:""},
]);

return (
    <React.Fragment>
        {/* {Navbar} */}
    <div className="navbar" >
        <div className="anchors" id="navbaranchors" >
            {navData.map(item => <NavItem key={item.id} text={item.text} classItem={item.classItem} />)}
        </div>
    </div>
    {/* {Popular podcasters} */}
        <div className="popular">
        <h4>POPULAR PODCASTER</h4>
        <div className="pp">
        {astData.map(item => <CastData key={item.id} image={item.image} text={item.text}  />)}
        </div> 
        </div>
        {/* {Audios} */}
    <div className="main">
    {podData.map(item => <Podcast key={item.id} img={item.img} title={item.title} author={item.author} date={item.date} time={item.time}  audio={item.audio} />)}
     <div className="nam">
        <a href=""><i className="fa fa-chevron-left fa-x" id="i"></i><span>1</span> 2 3 4 5<i className="fa fa-chevron-right fa-x" id="i2"></i></a>
    </div>
    </div> 
   
    
</React.Fragment>)
}
    

ReactDOM.render (
    <App/>,
    document.getElementById("root"));

