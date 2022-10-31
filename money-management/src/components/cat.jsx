import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionsCreators from '../redux/ActionsCreators'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Trash2 } from 'react-feather';

export default function Cat() {
    const [cnt, setcnt] = useState(0)
    const [name, setname] = useState("")
    const [amount, setamount] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const catt = useSelector(state => state.catt);
    const handeladd = () => {
        const gestion = catt.filter(item => (item.cat === name))
        if (name !== "") {
            if (gestion.length !== 0) {

                toast.warn('category already exist', {
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
                dispatch(ActionsCreators.addcat(Number(cnt), name))
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
        } else if (name === "") {
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
                <h2>Add Category</h2>
                <hr className="me-hr" />



                <div className='me_acc_add1' >


                    <div className='me_cart_input' >
                        <label htmlFor="date"> Name of category : </label>
                        <input type="text" value={name} onChange={(e) => setname(e.target.value.toUpperCase())} placeholder='category' required id='Name' />
                    </div>

                    <div>
                        <input type="reset" onClick={() => { setname("") }} className='cancel' value="Cancel" />
                        <input type="reset" onClick={handeladd} className='submit' value="Submit" />
                    </div>


                </div>
                <hr className="me-hr" />
                <h2>List category</h2>


                <div className="me-affich-tron" >


                    <div>
                        <ul className="responsive-table">
                            <li className="table-header">
                                <div className="col col-11">category  Id</div>
                                <div className="col col-22">name of category</div>

                                <div className="col col-44">action</div>
                            </li>

                            {catt.map((item, index) => (

                                <li key={index} className="table-row" >
                                    <div className="col col-11" data-label="Id">{item.id}</div>
                                    <div className="col col-22" data-label="acc">{item.cat}</div>
                                    <div className="col col-44" data-label="action"><Trash2 onClick={() => { dispatch(ActionsCreators.deletecat(item.id)) }} className="me-delete-econ" /></div>

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