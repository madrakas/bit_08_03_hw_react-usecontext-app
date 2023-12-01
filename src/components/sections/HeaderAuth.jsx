import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import style from './HeaderAuth.module.css';

export function HeaderAuth(){
    const { updateLayout} = useContext(GlobalContext)
    
    
    function primaryBtn() {
        updateLayout('PubLayout');
    
    }
    
    return(
        <div className={style.header}>
            <Link className={style.menu} to="/" >Home</Link>
            <Link className={style.menu} to="/" onClick={primaryBtn} >Logout</Link>
            <Link className={style.menu} to="/account" >Account</Link>
        </div>
    );
}