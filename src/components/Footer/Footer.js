import classes from './footer.module.css';


const Footer = () => {
    // Traigo la fecha actual para que quede actualizada siempre
    let year = new Date().getFullYear()
    return (
        <div className={classes.footer}>
            <p className={classes.brand}>To Do App @ {year}</p>
        </div>
    )
}

export default Footer;