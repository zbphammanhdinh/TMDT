import './Header.scss';
import logo from '../../assets/images/logo.png'

function Header(props) {
    let nonlogin = props.nonlogin;
    let username = sessionStorage.getItem('token');

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setTimeout(() => {
            window.location.reload();
        }, 500)
    }

    let button;
    if (nonlogin) {
        button = <a href="/login" className="login">LOGIN <i className='fas fa-user-circle login-icon'></i></a>
    } else {
        button = <div className="user">
            <div className="user-inner">
                <p className="user-text">Welcome</p>
                <p className="user-name">{username}</p>
            </div>
            <span className="user-logout" onClick={handleLogout}><i className="fa fa-sign-out logout-icon"></i></span>
        </div>
    }
    return (
        <header className="header">
            <div className="nav">
                <div className="container">
                    <div className="nav-inner">
                        <figure className="logo img">
                            <img src={logo} alt="" className=""></img>
                        </figure>
                        {button}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
