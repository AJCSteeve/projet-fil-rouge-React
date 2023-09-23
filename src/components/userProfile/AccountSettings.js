import "./AccountSettings.css"


export default function AccountSettings(){

    return(
        <div className="orders">
            <h1 className="mainhead1">Informations utilisateur</h1>
           <div className='form'>
               <div className="form-group">
                   <label htmlFor="name">Nom <span>*</span></label>
                   <input type='text' name="name" id='name'/>
               </div>
               <div className="form-group">
                   <label htmlFor="phoneNumber">Téléphone <span>*</span></label>
                   <input type='text' name="phoneNumber" id='phoneNumber'/>
               </div>
               <div className="form-group">
                   <label htmlFor="email">Email <span>*</span></label>
                   <input type='text' name="email" id='email'/>
               </div>

           </div>
            <button className="mainbutton1">Modifier</button>
        </div>
    )
}