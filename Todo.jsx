import React, { Fragment, useState } from 'react'
// import './TTODO.css'

const Todo = () => {
    let [inputValue,setinputVlaue]=useState("");
    let [listItems,setListItems]=useState([]);
    let [editIndex,setEditiIndex]=useState(null)

    let handleChange=(e)=>{
        setinputVlaue(e.target.value);
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(inputValue);
    }
    let handleAdd=()=>{
        if(inputValue!=""){
            if(editIndex!==null){
                listItems[editIndex]=inputValue;
                setEditiIndex(null)
            }
            else
            {
                setListItems([...listItems,inputValue])
            }
            setinputVlaue("")
        
        }
    }
    let handleDelete=(id)=>{
        let newList=listItems.filter((val,index)=>{
            return index!==id;
        })
        setListItems(newList)
    }
    let handleEdit=(id)=>{
       setinputVlaue(listItems[id]);
       setEditiIndex(id);

        
    }




  return (
    <>
    <h1>To-Do-App</h1>  
    <form onSubmit={handleSubmit} autoComplete='off'>
        <input type="text" name="inputvalue" id="inputvalue" value={inputValue} onChange={handleChange}/>
        <button onClick={handleAdd}>{editIndex!==null?"Update Items":"Add Items"}</button>
    </form>
    <section className='ListContainer'>
        {listItems.map((val,index)=>{
        return (
            <article key ={index}>
                <span>{val}</span>
            <Fragment key={index}>
                <h3>{val}</h3>
                <button className='edit' onClick={()=>handleEdit(index)}>Edit</button>
                <button className='delete' onClick={()=>handleDelete(index)}>Delete</button>
            </Fragment>
            </article>
        )})}
    </section>
    <button className="clearAll" onClick={()=>setListItems([])}>Clear All</button>
    </>
  )
}

export default Todo