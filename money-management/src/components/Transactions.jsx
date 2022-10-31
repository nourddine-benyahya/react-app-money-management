import React from "react";
import './style-tronsaction.css'
import { DollarSign, X, Edit, Trash2, Plus } from 'react-feather';
import { useNavigate } from "react-router-dom";
import {  useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Transactions(props) {
    const count = useSelector(state => state.counter);
    const allcat = useSelector(state => state.catt);
    const navigate = useNavigate();
    const sum_total=(count.reduce((a,v) =>  a = a + Number(v.amount) , 0 ))
    return (

        <div className="me-card-tron" >
            <h3>Tron<DollarSign width={18} className='me-ico-dolar' />action</h3>
            <hr className="me-hr" />
            <div className="form__field">
                <input className="me-input-filter-tron" id="min" value={props.minprix} onChange={props.getvaleus}  type="tel" placeholder="From" />
                <input className="me-input-filter-tron" id="max" value={props.maxprix} onChange={props.getvaleus} type="tel" placeholder="To" />
                <select className="me-input-filter-tron" id="cat" value={props.cat} onChange={props.getvaleus} >
                    <option value="all" >All Cattegoris</option>
                    {allcat.map(item=>(

                        <option value={item.cat}>{item.cat}</option>


                    ))}
                    

                </select>
                <input className="me-input-filter-tron" id="date" value={props.date} onChange={props.getvaleus} type="date"></input>
                <div className="me-clear" onClick={props.reset} ><X width={15} className='me-ico-dolar' /><span>Clear</span></div>
            </div>
            <hr className="me-hr" />
            
            <button className="me-add" onClick={()=>{ navigate('../Adds')}} > <Plus width={18} className='me-ico-dolar' /> Add tronsaction</button>
            <span className="me-total" > <div> Total : - {sum_total} <DollarSign width={18} className='me-ico-dolar' /></div> <div> Total Tronsaction : {count.length} </div></span>
            <div className="me-affich-tron" >

                <div>
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-1">Tron  Id</div>
                            <div className="col col-2">Cattegoris</div>
                            <div className="col col-3">Date</div>
                            <div className="col col-4">Amount</div>
                            <div className="col col-5">Payment Status</div>
                            <div className="col col-6">action</div>
                            {console.log()}
                        </li>
                        {props.listtron.map((item,index)=>
                            
                            
                            <li className="table-row" key={index}>
                            <div className="col col-1" data-label="Id">{item.id}</div>
                            <div className="col col-2" data-label="cat">{item.cat}</div>
                            <div className="col col-3" data-label="date">{item.date}</div>
                            <div className="col col-4" data-label="Amount">{item.amount}$</div>
                            <div className="col col-5" data-label="Payment Status">{item.status}</div>
                            <div className="col col-6" data-label="action"><Edit  className="me-edit-econ" onClick={(e)=>{navigate(`../Edits/${item.id}`)}} /><Trash2 id={item.id} onClick={props.deletes} className="me-delete-econ" /></div>

                        </li>

                            
                            )}
                        
                    </ul>
                </div>

            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />

        </div>
    )


}
export default Transactions