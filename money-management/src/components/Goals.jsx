
import React from "react";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {  Edit, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import * as ActionsCreators from '../redux/ActionsCreators'

function Goals() {
    const navigate = useNavigate()
    const goals = useSelector(state => state.goals);
    const dispatch = useDispatch()
    const handeldelet = (e) => {

            if(dispatch(ActionsCreators.deletegoal(Number(e.target.id)))){
                toast.success(' deleted successfully ', {
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

        <div className="me_goals" >
            <h2>Saving Goals Review</h2>
            <hr className="me-hr" />
            <div className="me_active_goals" >
                <div className="me_active_goals_hd" >
                    <h3>Active Goals</h3>
                    <input type="button"  onClick={()=>(navigate(`../addgoal`))} className="btn_goal" value="Add Goal" />
                </div>
                <div className="goals_contaner" >

                    {goals.map((item, index) => (
                            
                        <div key={index} className="goals" >

                            <div>
                                <CircularProgressbar value={((item.paid/item.to)*100)} text={`${(
                                    
                                    
                                    ((item.paid/item.to)*100)
                                    
                                    
                                    )}%`} 
                                    styles={buildStyles({rotation: 1,})}
                                    
                                    />
                            </div>

                            <div className="infos_goals" >
                                <h1>{item.name.toUpperCase() }</h1>
                                <div> <span className="payed" > {item.paid} $ </span> of <span>  {item.to} $ </span> </div>
                                <span className="deadline" >Until  {item.deadline}</span>
                            </div>
 
                                <div className="tree_point"  >
                                <Edit onClick={()=>navigate(`../editgoal/${item.id}`)} color="green" />
                                <Trash2 id={item.id} onClick={handeldelet} color="red"/>
                                </div>
                        </div>







                    ))}

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
export default Goals