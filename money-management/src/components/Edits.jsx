import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as ActionsCreators from '../redux/ActionsCreators'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';


export default function Edits() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter);
    const catt = useSelector(state => state.catt);
    const acct = useSelector(state => state.acct);


    const obj = count.filter(item => item.id === Number(id))
    const [maxprix, setmaxprix] = useState(obj[0].amount)
    const [pay, setpay] = useState(obj[0].status)
    const [date, setdate] = useState(obj[0].date)
    const [cat, setcat] = useState(obj[0].cat)

    const navigate = useNavigate()
    const handeledit = (e) => {
        if (maxprix!=="" && pay!=="" && date!=="none" && cat!=="none"){
            dispatch(ActionsCreators.modify(Number(id), maxprix, date, cat, pay))
            toast.success(' Edited successfully ', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }else{

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
                <h1>Edit Tronsaction {id}</h1>
                <hr className="me-hr" />

                <div className='me_card_add' >
                    <div className='me_cart_input' >
                        <label htmlFor="Amount"> AMOUNT : </label>
                        <input type="number" placeholder='0000 $' value={maxprix} onChange={(e) => setmaxprix(e.target.value)} required id='Amount' />
                    </div>

                    <div className='me_cart_input' >
                        <label htmlFor="date" > DATE : </label>
                        <input type="date" value={date} onChange={(e) => setdate(e.target.value)} required id='date' />
                    </div>



                    <div className='me_cart_input' >
                        <label htmlFor="cat"> CATTEGORIS : </label>
                        <select name="" value={cat} onChange={(e) => setcat(e.target.value)} required id="cat">
                            <option value="none" disabled>select Cattegoris</option>
                            {catt.map((item,index)=>(

                                    <option key={index} value={item.cat}>{item.cat}</option>

                            ))}

                        </select>
                    </div>


                    <div className='me_cart_input' >
                        <label htmlFor="pay">PAYMENT STATUS : </label>
                        <select name="" value={pay} onChange={(e) => setpay(e.target.value)} id="pay">
                            <option value="none" disabled>select method payment </option>
                            {acct.map((item,index)=>(

                                <option key={index} value={item.acc}>{item.acc}</option>

                            ))}
                          
                        </select>
                    </div>

                    <div>
                        <input type="reset" onClick={() => { navigate('../Transactions') }} className='cancel' value="Cancel" />
                        <input type="reset" id={id} onClick={handeledit} className='submit' value="Submit" />
                    </div>
                    <div className='link_cat_pay' >
                        <Link to="../Cat" className='link_cat' >your Category does not exist in the list ?</Link>
                        <Link to="../Acc" className='link_pay'>your Payment Status does not exist in the list ?</Link>


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