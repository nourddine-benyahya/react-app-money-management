import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import * as ActionsCreators from '../redux/ActionsCreators'

import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export default function Editgoal() {
    const {id} = useParams()
    const goals = useSelector(state => state.goals);
    const goalss = goals.filter(item=> item.id === Number(id))
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const [name,setname] = useState(goalss[0].name)
    const [to,setto] = useState(goalss[0].to)
    const [paid,setpaid] = useState(goalss[0].paid)
    const [deadline,setdeadline] = useState(goalss[0].deadline)
    const handeledit = () =>{
        if (to==="" |  paid==="" | deadline==="" ){
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

        }else{
                if(Number(paid)>Number(to)){
                    toast.warn('amount paid bigger then total amount', {
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
                    if(dispatch(ActionsCreators.modifygoal(Number(id),name,deadline,to,paid))){

                            toast.success(' edited successfully ', {
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

            }


        



    }

    return (
        <form action="">
            <div className='me_forms_add'  >
                <h2>Edit Goal {name.toUpperCase()} </h2>
                <hr className="me-hr" />

                <div className='me_card_add' >

                    <div className='me_cart_input' >
                        <label htmlFor="total"> total Amount : </label>
                        <input type="number" placeholder='10 000 000 $' value={to} onChange={(e)=>setto(e.target.value)} required  />
                    </div>

                    <div className='me_cart_input' >
                        <label htmlFor="paid"> Amount Paid </label>
                        <input type="number" value={paid} placeholder="10 000$" onChange={(e)=>setpaid(e.target.value)} required  />
                    </div>


                    <div className='me_cart_input' >
                        <label htmlFor="DeadLine"> DeadLine</label>
                        <input type="date" value={deadline} placeholder="Until 5 May 2023" onChange={(e)=>setdeadline(e.target.value)} required  />
                    </div>

                    <div>
                        <input type="reset" onClick={() => { navigate('../Goals') }} className='cancel' value="Cancel" />
                        <input type="reset" onClick={handeledit} className='submit' value="Submit" />
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