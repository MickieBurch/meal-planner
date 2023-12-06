import React from "react";

export default function Manual () {
    return (
      <section>
        <div>
            <h1>Manual Recipie</h1>
        </div>
        <form>
            <div>
                <label className="Card title" id="Manual-card-title">Recipie Name</label>
                <input className='Text-box' type="text"></input>
            </div>
            <div>
                <label>Category</label>
                <input type="dropdown"></input>
            </div>
            <div>
                <label>Description</label>
               <input type="text" ></input>
            </div>
            <div>
                <label>Ingredients</label>
                <input type="text"></input>
            </div>
            <div>
            <button className="btn" id="Manual-btn-save">Save</button>
            <button className="btn" id="Manual-btn-cancel">cancel</button>
            </div>

        </form>
        </section>
      
    );
  }
  
 
  