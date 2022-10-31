import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionsCreators from '../redux/ActionsCreators'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Trash2 } from 'react-feather';

export default function Acc() {
    const [cnt, setcnt] = useState(0)
    const [name, setname] = useState("")
    const [amount, setamount] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const acct = useSelector(state => state.acct);
    const handeladd = () => {
        const gestion = acct.filter(item => (item.acc === name))
        if (name !== "" | amount !== "") {
            if (gestion.length !== 0) {

                toast.warn('Account already exist', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });


            } else {
                setcnt(cnt + 1)
                dispatch(ActionsCreators.addacc(Number(cnt), name, Number(amount)))
                toast.success(' Added successfully ', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setamount("")
                setname("")
            }
        } else if (name === "" | amount === "") {
            toast.error(' Please enter all entries ', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }



    }



    return (
        <form action="">
            <div className='me_forms_add'  >
                <h2>Add Account</h2>
                <hr className="me-hr" />



                <div className='me_acc_add' >


                    <div className='me_cart_input' >
                        <label htmlFor="date"> Name of Account : </label>
                        <input type="text" value={name} onChange={(e) => setname(e.target.value.toUpperCase())} placeholder='BMCE' required id='Name' />
                    </div>

                    <div className='me_cart_input' >
                        <label htmlFor="Amount"> AMOUNT OF Account : </label>
                        <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} placeholder='0000 $' required id='Amount' />
                    </div>



                    <div>
                        <input type="reset" onClick={()=>{setname("") ; setamount("")}} className='cancel' value="Cancel" />
                        <input type="reset" onClick={handeladd} className='submit' value="Submit" />
                    </div>


                </div>
                <hr className="me-hr" />
                <h2>List Account</h2>


                <div className="me-affich-tron" >


                    <div>
                        <ul className="responsive-table">
                            <li className="table-header">
                                <div className="col col-11">Account  Id</div>
                                <div className="col col-22">name of Account</div>
                                <div className="col col-33">AMOUNT OF Account</div>
                                <div className="col col-44">action</div>
                            </li>

                            {acct.map((item, index) => (

                                <li key={index} className="table-row" >
                                    <div className="col col-11" data-label="Id">{item.id}</div>
                                    <div className="col col-22" data-label="acc">{item.acc}</div>
                                    <div className="col col-33" data-label="amount">{item.amount} $ </div>
                                    <div className="col col-44"  data-label="action"><Trash2 onClick={()=>{dispatch(ActionsCreators.deleteacc(item.id))}} className="me-delete-econ" /></div>

                                </li>






                            ))}





                        </ul>
                    </div>




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
        </form>
    )

}