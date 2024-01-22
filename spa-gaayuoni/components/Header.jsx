import "./Header.css"

export function Header(){
  
  

    const MENU =[
        {
            title:'Home',
            link:'#',
            id:1
        },
        {
            title:'Life',
            link:'#',
            id:2
        },
        {
            title:'CV',
            link:'#',
            id:3
        },
        {
            title:'Contact',
            link:'#',
            id:4
        },
    ]

    return(<>
    <div className="logo"> CG</div>
    <ul className="header-container" >
       
        { MENU.map((menuItem)=>{
        return <li key='id'>{menuItem.title}</li>
     
       })}



    </ul>
    
    
    
    </>)
}