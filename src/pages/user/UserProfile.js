import {useParams} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import UserSideBar from "./UserSideBar";
import AccountSettings from "./AccountSettings";
import "./UserProfile.css";
import ChangePassword from "./ChangePassword";
import Orders from "./Orders";
import EditUser from "./EditUser";


export default function UserProfile() {

    const{activepage} = useParams()


    // alert(activepage)
    return(
        <div className="userprofile">
            <Navbar/>
            <div className="userprofilein">
                <div className="left"><UserSideBar activepage={activepage}/></div>
                <div className="right">
                    {activepage === 'compte' && <AccountSettings/>}
                    {activepage === 'modifier' && <EditUser/>}
                    {activepage === 'modifierMotDePasse' && <ChangePassword/>}
                    {activepage === 'transactions' && <Orders/>}
                </div>
            </div>
            <Footer/>
        </div>
    );

}