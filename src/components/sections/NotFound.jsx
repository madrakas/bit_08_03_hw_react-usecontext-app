import style from './NotFound.module.css';

export function NotFound() {
return(
    <div className={style.notfound}>
        <h1>404</h1>
        <p>Resource not found</p>
    </div>
);
}