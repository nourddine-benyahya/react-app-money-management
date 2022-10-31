import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Transactions from './components/Transactions';
import Goals from './components/Goals';
import Settings from './components/Settings';
import { useState } from 'react';
import * as ActionsCreators from './redux/ActionsCreators'
import { useDispatch, useSelector } from 'react-redux';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Edits from './components/Edits';
import Adds from './components/Adds';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Acc from './components/acc';
import Cat from './components/cat';
import Addgoal from './components/addgoal';
import Editgoal from './components/editsgoal';
import OverView from './components/OverView';

function App() {
  const listtron = useSelector(state => state.counter);
  const [alldata, setdata] = useState(listtron)

  const [minprix, setminprix] = useState("")
  const [maxprix, setmaxprix] = useState("")
  const [pay, setpay] = useState("")
  const [date, setdate] = useState("")
  const [cat, setcat] = useState("all")
  const [count,setcount]=useState(1)
 
  const data = listtron
  const  dispatch = useDispatch()
 

  const getvaleus = (e) => {
    const type = e.target.id
    if (type === 'min') {
      setminprix(e.target.value)
    }
    if (type === 'max') {
      setmaxprix(e.target.value)
    }
    if (type === 'Amount') {
      setmaxprix(e.target.value)
    }

    if (type === 'date') {
      setdate(e.target.value)
    }
    if (type === 'cat') {
      setcat(e.target.value)
    }
    if (type === 'pay') {
      setpay(e.target.value)
    }

  }
 


  useEffect(() => {

    if (minprix !== "" || maxprix !== "" || cat !== "all" || date !== "") {

      if (date !== "") {
                  if (cat === "all") {
                          if (minprix !== "" && maxprix !== "") {
                            const res = listtron.filter(item => { if (item.amount >= Number(minprix) && item.amount <= Number(maxprix) && item.date===date ) { return item } })
                            setdata(res)
                          } else if (minprix !== "") {
                            const res = listtron.filter(item => { if (item.amount >= Number(minprix) && item.date===date ) { return item } })
                            setdata(res)
                          } else if((maxprix !== "")) {
                            const res = listtron.filter(item => { if (item.amount <= Number(maxprix) && item.date===date ) { return item } })
                            setdata(res)
                          }else{
                            const res = listtron.filter(item => { if (item.date===date) { return item } })
                            setdata(res)
                          }
                  } else {
                          if (minprix !== "" && maxprix !== "") {
                            const res = listtron.filter(item => { if (item.amount >= Number(minprix) && item.amount <= Number(maxprix) && item.cat === cat && item.date===date ) { return item } })
                            setdata(res)
                          } else if (minprix !== "") {
                            const res = listtron.filter(item => { if (item.amount >= Number(minprix) && item.cat === cat && item.date===date ) { return item } })
                            setdata(res)
                          } else if (maxprix !== "") {
                            const res = listtron.filter(item => { if (item.amount <= Number(maxprix) && item.cat === cat && item.date===date ) { return item } })
                            setdata(res)
                          } else if((maxprix !== "")) {
                            const res = listtron.filter(item => { if (item.cat === cat) { return item } })
                            setdata(res)
                          }else{
                            const res = listtron.filter(item => { if (item.cat === cat && item.date===date) { return item } })
                            setdata(res)
                          }
                  }
      } else {
                    if (cat === "all") {
                              if (minprix !== "" && maxprix !== "") {
                                const res = listtron.filter(item => { if (item.amount >= Number(minprix) && item.amount <= Number(maxprix)) { return item } })
                                setdata(res)
                              } else if (minprix !== "") {
                                const res = listtron.filter(item => { if (item.amount >= Number(minprix)) { return item } })
                                setdata(res)
                              } else {
                                const res = listtron.filter(item => { if (item.amount <= Number(maxprix)) { return item } })
                                setdata(res)
                              }
                    } else {
                              if (minprix !== "" && maxprix !== "") {
                                const res = listtron.filter(item => { if (item.amount >= Number(minprix) && item.amount <= Number(maxprix) && item.cat === cat ) { return item } })
                                setdata(res)
                              } else if (minprix !== "") {
                                const res = listtron.filter(item => { if (item.amount >= Number(minprix) ) { return item } })
                                setdata(res)
                              } else if (maxprix !== "") {
                                const res = listtron.filter(item => { if (item.amount <= Number(maxprix)) { return item } })
                                setdata(res)
                              } else if (cat !== "") {
                                const res = listtron.filter(item => { if (item.cat === cat ) { return item } })
                                setdata(res)
                              } 
                    }




                  }



    } else {
      setdata(listtron)

    }




  }, [minprix, maxprix, cat, date,listtron])

const reset=(e)=>{
  setmaxprix("")
  setminprix("")
  setcat("all")
  setdate("")
  
}

const deletes = (e)=>{

  if(dispatch(ActionsCreators.deleteit(Number(e.target.id)))){

      toast.success(' Removed  successfully ', {
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
const handeladd =(e)=>{
  if( maxprix!=="" && cat!=="all" && date!=="" && pay!==""){
      dispatch(ActionsCreators.add(count,maxprix,date,cat,pay))
      setcount(count+1)
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
      setmaxprix("")
      setcat("all")
      setdate("")
      setpay("")
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
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>

      
          <Route path='/' element={<OverView/>} />
          <Route path='/Acc' element={<Acc />} />
          <Route path='/Transactions' element={<Transactions deletes={deletes} listtron={alldata} getvaleus={getvaleus} date={date} cat={cat} minprix={minprix} maxprix={maxprix} reset={reset} />} >
          
          </Route>
          <Route path='/Adds' element={<Adds adds={handeladd}
          getvaleus={getvaleus}
          />} />
          <Route path='/Edits/:id' element={<Edits />}  />
          

          <Route path='/Goals' element={<Goals />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/Cat' element={<Cat/>} />
          <Route path='/addgoal/' element={<Addgoal/>} />
          <Route path='/editgoal/:id' element={<Editgoal/>} />




    

          



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
