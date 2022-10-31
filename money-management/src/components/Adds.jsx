import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

export default function Adds(props) {
    const navigate = useNavigate()
    const count = useSelector(state => state.counter);
    const catt = useSelector(state => state.catt);
    const acct = useSelector(state => state.acct);
    return (
        <form action="">
            <div className='me_forms_add'  >
                <h2>Add Tronsaction</h2>
                <hr className="me-hr" />

                <div className='me_card_add' >
                    <div className='me_cart_input' >
                        <label htmlFor="Amount"> AMOUNT : </label>
                        <input type="number" placeholder='0000 $' onChange={props.getvaleus} required id='Amount' />
                    </div>

                    <div className='me_cart_input' >
                        <label htmlFor="date"> DATE : </label>
                        <input type="date" min='2022-12-12' onChange={props.getvaleus} required id='date' />
                    </div>



                    <div className='me_cart_input' >
                        <label htmlFor="cat"> CATTEGORIS : </label>
                        <select name="" onChange={props.getvaleus} required id="cat">
                            <option value="none" selected disabled>select Cattegoris</option>
                            {catt.map((item, index) => (

                                <option key={index} value={item.cat}>{item.cat}</option>

                            ))}
                        </select>
                    </div>


                    <div className='me_cart_input' >
                        <label htmlFor="pay">PAYMENT STATUS : </label>
                        <select name="" onChange={props.getvaleus} id="pay">
                            <option value="none" selected disabled>select method payment </option>
                            {acct.map((item, index) => (

                                <option key={index} value={item.acc}>{item.acc}</option>

                            ))}
                        </select>
                    </div>

                    <div>
                        <input type="reset" onClick={() => { navigate('../Transactions') }} className='cancel' value="Cancel" />
                        <input type="reset" onClick={props.adds} className='submit' value="Submit" />
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