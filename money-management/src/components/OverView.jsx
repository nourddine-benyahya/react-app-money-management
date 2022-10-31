import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Chartacc from "./chartacc";
import Chartcat from "./chartcat";
import Chartgoal from "./chartgoal";
import ApexChart from "./charttran";




export default function OverView() {
    const navigate = useNavigate()
    const trans = useSelector(state => state.counter);
    const allcat = useSelector(state => state.catt);
    const acc = useSelector(state => state.acct);
    const goals = useSelector(state => state.goals);
    const totaleto = goals.reduce((a,v) =>  a = a + Number(v.to) , 0 )
    const totalepaid = goals.reduce((a,v) =>  a = a + Number(v.paid) , 0 )
    const complet = goals.filter(item=>item.to===item.paid)
    const uncomplet = goals.filter(item=>item.to!==item.paid)

    
    
    const per = (totalepaid/totaleto)*100
    
    const cat = trans.map(item=>{ return item.cat})
    allcat.map(item=> cat.push(item.cat))
    const cattows = [...new Set(cat)];
    const statt=[
        cattows.map(item=>
            {
                return ( {name:item,data:
                    trans.map(cnt=> {if(cnt.cat===item){return {y:cnt.amount, x:cnt.date} }} ).filter(notUndefined => notUndefined !== undefined)
                } )
            }
            )


    ]


    const addDuplicates = (array) => {
        const newarr = []
        array.map(elem => {
            if (!newarr.some(val => val.x === elem.x)) {
                newarr.push(
                    {
                        y: array.filter(value => value.x === elem.x).map(y=>y.y).reduce((p,n)=>p+n,0),
                        x: elem.x
                    }
                )
            }
        })
        return newarr
    }
    
    const output = statt[0].map(elem=>({...elem,data:addDuplicates(elem.data)}))


    const circlchart=[
        cattows.map(item=>
            {
                return ( {id:item,label:item,value:
                    trans.map(cnt=> {if(cnt.cat===item){return {y:cnt.amount} }} ).filter(notUndefined => notUndefined !== undefined).reduce((a,v) =>  a = a + Number(v.y) , 0 ),color:`hsl(${Math.floor(Math.random() * (255 - 10 + 1)) + 10}, 70%, 50%)`
                } )
            }
            )


    ]


    const accn = acc.map(item => {return {id:item.id , value:item.amount , label:item.acc } })

    return (

        <div className="overview_contaner" >
            <div>
                <h2>Analyze OverView</h2>
                <hr className="me-hr" />
            </div>
          
            <div className="me_analyze" >

                <div className="transaction_overview" >
                    <div className="ob_hd" >
                        <h4>Analyze  transactions</h4>
                        <input type="button" onClick={()=>navigate('/Transactions')} className="ob_btn" value="transaction's" />
                    </div>
                    <div className="info_trons_chart" >
                        <p className="all_infos_chart" >Total : - {trans.reduce((a,v) =>  a = a + Number(v.amount) , 0 )} $ </p><p className="all_infos_chart" >Total Tronsaction : {trans.length}</p>
                    </div>
                    <div className="ob_chart1" >
                            <ApexChart series={output} />
                    </div>
                    


                </div>


                <div className="cat_overview" >
                    <div className="ob_hd" >
                        <h4>Analyze category's</h4>
                        <input  className="ob_btn" onClick={()=>navigate('/Cat')} type="button" value="categor's" />
                    </div>
                    <div className="info_cat_chart" >
                        <p className="all_infos_chart" >Total category  : {circlchart[0].length} </p>
                    </div>
                    <div className="ob_chart" >
                            <Chartcat data={circlchart} />
                    </div>
                    


                </div>
                <div className="acc_overview" >
                    <div className="ob_hd" >
                        <h4>Analyze account's</h4>
                        <input className="ob_btn" onClick={()=>navigate('/Acc')} type="button" value="Account's" />
                    </div>
                    <div className="info_acc_chart" >
                        <p className="all_infos_chart" > <span className="me_tit" >Total account's  :</span>  {acc.length} </p>
                        <p className="all_infos_chart" > <span className="me_tit" >Total Amount Of Account :</span>  {acc.reduce((a,v) =>  a = a + Number(v.amount) , 0 )} $</p>
                    </div>
                    <div className="ob_chart1" >
                            <Chartacc data={accn} />
                    </div>
                    



                </div>


                <div className="goals_overview" >
                    <div className="ob_hd" >
                        <h4>Analyze goal's</h4>
                        <input className="ob_btn" onClick={()=>navigate('/Goals')} type="button" value="Goals" />
                    </div>
                    <div className="info_cat_chart" >
                        <p className="all_infos_chart" >Total Goals  : {goals.length} </p>

                    </div>
                    <div className="ob_chart" >
                            <Chartgoal data={per} />
                    </div>
                    <div className="info_goal_chart" >
                        <p className="all_infos_chart" >Total amount goals  : {goals.reduce((a,v) =>  a = a + Number(v.to) , 0 )} $  </p>
                        <p className="all_infos_chart" >Total paid goals  : {goals.reduce((a,v) =>  a = a + Number(v.paid) , 0 )} $  </p>
                        <p className="all_infos_chart" >completed goals  : {complet.length} </p>
                        <p className="all_infos_chart" >Uncompleted goals  : {uncomplet.length} </p>
                    </div>


                 

                </div>

            </div>
            

        </div>



    );
};
