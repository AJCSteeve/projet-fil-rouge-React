import "./orders.css"

// import axios from "axios";
// import {useNavigate} from "react-router-dom";
// // import axios from "axios";
// // import {useNavigate} from "react-router-dom";
// // import {useEffect, useState} from "react";
// //
// //
// // export default function Orders() {
// //
// //     const axiosInstance = axios.create({
// //         baseURL: 'http://localhost:8080/api',
// //         headers: {
// //             'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`, // Récupère le token JWT du stockage local
// //             'Content-Type': 'application/json'
// //         },
// //     });
// //
// //     let navigate=useNavigate()
// //
// //     const idAsString = localStorage.getItem('userId'); // Récupère l'userId du stockage local et converti en entier
// //     const idAsNumber = parseInt(idAsString, 10);
// //
// //     // Vérifier si la conversion a réussi (n'est pas NaN) et que l'ID est valide
// //     if (isNaN(idAsNumber) || idAsNumber <= 0) {
// //         console.error("L'ID n'est pas un nombre valide ou est manquant.");
// //         return null;
// //     }
// //
// //     // eslint-disable-next-line react-hooks/rules-of-hooks
// //     const [user,setUser]= useState({
// //         purchaseHistory:"",
// //         sellingHistory:""
// //     });
// //
// //     const{purchaseHistory,sellingHistory}=user;
// //
// //
// //     const onInputChange = (event) => {
// //         const { name, value } = event.target;
// //         setUser({ ...user, [name]: value });
// //     };
// //
// //     // eslint-disable-next-line react-hooks/rules-of-hooks
// //     useEffect(()=>{
// //         loadUser();
// //     },[]);
// //
// //     const onSubmit=async (ev)=>{
// //         ev.preventDefault();
// //         console.log("Formulaire soumis");
// //         await axiosInstance.put(`/users/${idAsNumber}`,user);
// //         navigate("/user:activepage");
// //     };
// //
// //     const loadUser = async ()=>{
// //         const result=await axiosInstance.get(`/users/${idAsNumber}`);
// //         setUser(result.data)
// //     };
// //
// //
// //     return (
// //         <div className="container">
// //             <div className="orders">
// //                 <h1 className="mainhead1">Vos transactions</h1>
// //                 <table className="table table-success table-striped">
// //                     <thead className="tablehead1">Achats</thead>
// //                     <body>
// //
// //                     </body>
// //                     {
// //                         tickets.map((user)=>(
// //                             <tr key={user.id}>
// //                                 <th scope="row">{user.id}</th>
// //                                 <td>{user.username}</td>
// //                             </tr>
// //                         ))
// //                     }
// //                     <tr>
// //                         <th>ID Ticket</th>
// //                         <th>Date</th>
// //                         <th>Evenement</th>
// //                         <th>Prix</th>
// //                         <th>Note</th>
// //                         <th>ID Transaction</th>
// //                         <th>Date Transaction</th>
// //                         <th>Vendeur</th>
// //
// //                     </tr>
// //                 </table>
// //             </div>
// //         </div>
// //     )
// // }
//
// import {useEffect, useState} from "react";
// import axios from "axios";
//
export default function Orders() {
//
//     //Todo trouver comment récupérer la list de transactions
//
//     const [transactions, setTransactions] = useState([]);
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         // Récupérer les transactions depuis l'API Spring
//         axios
//             .get("/api/transactions") // Remplacez par l'URL convenu
//             .then((response) => {
//                 setTransactions(response.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Erreur lors de la récupération des transactions :", error);
//                 setLoading(false);
//             });
//     }, []);
    return(

        <h2>Historique de transactions</h2>

    )
}
