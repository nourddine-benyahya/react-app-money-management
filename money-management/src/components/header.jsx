import React from "react";
import {Link} from 'react-router-dom'
import './style.components.css'
import {Home,User,Settings,Framer,Hexagon} from 'react-feather';



function Header(){





    return(
        <div className="me_header" >
               <div className="me_contan" >
                    <div>
                        <h2 className="me-he-head" >Money Manager</h2>
                    </div>

                    <div className="me_links" >
                        <Link to="/" ><Home className="me-ico-head" size={18} /> <span className="me_link_span" >OverView</span> </Link>
                        <Link to="/Acc" ><User className="me-ico-head" size={18} />  <span className="me_link_span" >Account</span> </Link>
                        <Link to="/Transactions" ><Framer className="me-ico-head" size={18} /> <span className="me_link_span" >Transactions</span></Link>
                        <Link to="/Goals" ><Hexagon className="me-ico-head" size={18} /> <span className="me_link_span" >Goals</span></Link>
                    </div>

                </div>

                <div className="me_links_settings" >
                    <Link to="/Settings" ><Settings className="me-ico-head" size={18} /> <span className="me_link_span" >Settings</span></Link>
                </div>
        </div>

    )


}
export default Header