

export default function ChangePassword(){
    return(
        <div className="changepassword">
            <h1 className="mainhead1">Informations utilisateur</h1>
            <div className='form'>
                <div className="form-group">
                    <label htmlFor="oldpassword">Ancien mot de passe <span>*</span></label>
                    <input type='password'/>
                </div>
                <div className="form-group">
                    <label htmlFor="newpassword">Nouveau mot de passe <span>*</span></label>
                    <input type='password'/>
                </div>

            </div>
            <button className="mainbutton1">Modifier</button>
        </div>
    )
}