import { Link } from 'react-router-dom';
import style from './Header.module.css';

export function Header(){

    return(
        <div className={style.header}>
            <Link className={style.menu} to='/'>Home</Link>
            <Link className={style.menu} to='/login'>Login</Link>
        </div>
    );
}