import classes from "./Logo.module.scss";
const Logo = (props) => {
    return (
        <figure className={classes.Logo}>
            <img
                src="/imgs/logo192.png"
                alt="MTU logo"
                className={classes.Logo__Image}
                loading="lazy"
            />
        </figure>
    );
};

export default Logo;
