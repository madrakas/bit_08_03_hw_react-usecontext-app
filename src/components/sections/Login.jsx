import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import style from './Login.module.css';


export function Login(){

    const { updateLayout} = useContext(GlobalContext)

        function primaryBtn() {
        updateLayout('AuthLayout');
             
    }

    return(
        <div className={style.Login}>
            <Link className={style.button} to="/" onClick={primaryBtn}>Login</Link>
                        <div style={{"color": "black"}}></div>
        </div>
    );
}