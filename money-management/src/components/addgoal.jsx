import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import * as ActionsCreators from '../redux/ActionsCreators'

import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export default function Addgoal() {
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const goals = useSelector(state => state.goals);
    const [name,setname] = useState("")
    const [to,setto] = useState("")
    const [paid,setpaid] = useState("")
    const [deadline,setdeadline] = useState("")
    const [cnt,setcnt] = useState(0)
    const handeladd = () =>{
        if (name==="" | to==="" |  paid==="" | deadline==="" ){
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
            const check = goals.filter(item=>item.name.toUpperCase()===name)
            if(check.length!==0){
                toast.warn('Goal already exist', {
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
                    setcnt(cnt+1)
                    dispatch(ActionsCreators.addgoal(cnt,name,deadline,to,paid))
                    setdeadline("")
                    setto("")
                    setpaid("")
                    setname("")

                    toast.success(' added successfully ', {
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
                <h2>Add Goal</h2>
                <hr className="me-hr" />

                <div className='me_card_add' >
                    <div className='me_cart_input' >
                        <label htmlFor="name"> Name Of Goal : </label>
                        <input type="text" placeholder='NEW CAR' value={name} onChange={(e)=>setname(e.target.value.toUpperCase())} required  />
                    </div>

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
                        <input type="reset" onClick={handeladd} className='submit' value="Submit" />
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