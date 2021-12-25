import MainLayout from '../../components/MainLayout';
import './Home.scss';
import React, { useEffect, useState } from 'react';
import background from '../../assets/images/btcbg.jpg';

function Home() {
    const [showing, setShowing] = useState(false)
    const [accountInfo, setAccountInfo] = useState({
        paymentaccount: '19110007',
        accountbalance: 9000000000,
    })
    // eslint-disable-next-line
    useEffect(() => {
        setAccountInfo(accountInfo);
        // setAccountInfo({
        //     paymentaccount: '19110007',
        //     accountbalance: 9000000000,
        // });
    })

    return (
        <MainLayout>
            <main className="home-main">
                <figure className="banner img">
                    <img src={background} alt="" className=""></img>
                </figure>
                <div className="main-inner">
                    <div className="fav">
                        <div className="container">
                            <div className="fav-inner">
                                <hr/>
                                <div className="fav-above">
                                    <div className="account-info number">
                                        <h3 className="account-label">Payment Account</h3>
                                        <p className="account-value">{accountInfo.paymentaccount}</p>
                                    </div>
                                    <div className="account-info balance">
                                        <h3 className="account-label">Account Balances</h3>
                                        <p className="account-value" id="account-balance">{showing ? accountInfo.accountbalance : "**********"}</p>
                                        {
                                            showing ? <i className="fas fa-eye" id="eye" onClick={() => setShowing(false)}></i> : showing===false && <i className="fas fa-eye-slash" id="eye" onClick={() => setShowing(true)}></i>
                                        }
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className="func">
                        <div className="container">
                            <div className="func-inner">
                                <a href="/cardmanager" className="service func">
                                    <div className="service-inner func-inner">
                                        <i className="fa fa-credit-card func-icon"></i>
                                        <p className="func-label">Card</p>
                                    </div>
                                </a>
                                <a href="/paymentaccount" className="account func">
                                    <div className="account-inner func-inner">
                                        <i className="fas fa-wallet func-icon"></i>
                                        <p className="func-label">Account</p>
                                    </div>
                                </a>
                                <a href="/home" className="transfer func">
                                    <div className="transfer-inner func-inner">
                                        <i className="fa fa-exchange func-icon"></i>
                                        <p className="func-label">Transfer</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
    </MainLayout>
    );
}

export default Home;
