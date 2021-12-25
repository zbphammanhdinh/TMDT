import MainLayout from '../../components/MainLayout';
import './CardManager.scss';
import React, { useEffect, useState } from 'react';
import debitcardImg from '../../assets/images/DebitCard.png';
import interdebitcardImg from '../../assets/images/InterDebitCard.png';
import creditcardImg from '../../assets/images/CreditCard.png';
import Title from '../../components/Title/Title';

function CardManager() {
    const [tab, setTab] = useState();

    const [debit, setDebit] = useState(
        {
            cardnumber: '92345234534',
            carduser: 'Tran Huu Thanh',
            issuedate: '20/12/2021',
            linkaccount: '124134234234234'
        }
    );

    const [interDebit, setInterdebit] = useState(
        {
            cardnumber: '92345234534',
            carduser: 'Tran Huu Thanh',
            issuedate: '20/12/2021',
            linkaccount: '124134234234234'
        }
    );

    const [credit, setCredit] = useState(
        {
            cardnumber: '',
            carduser: '',
            issuedate: '',
            linkaccount: ''
        }
    );

    // eslint-disable-next-line
    useEffect(() => {
        setDebit(debit);
        setInterdebit(interDebit);
        setCredit(credit);
    })

    const debitContent = () => {
        const Item = 
        debit.cardnumber === '' ? <a href='/' className="register-link">Register Online</a>
        : <div className="card-info">
            <div className="cardinfo-above">
                <figure className="card img">
                    <img src={debitcardImg} alt="" className="" />
                </figure>
                <div className="card-text">
                    <h3 className="card-high">{debit.cardnumber}</h3>
                    <h3 className="card-high name">{debit.carduser}</h3>
                    <p className="card-normal">TUB Credit Card</p>
                    <p className="card-normal">Date of issue: {debit.issuedate}</p>
                </div>
            </div>
            <div className="cardinfo-below">
                <h3 className="cardinfo-header">Card Information</h3>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Card type</p>
                    <p className="cardinfo-text">None-physical card</p>
                </div>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Linked account</p>
                    <p className="cardinfo-text">{debit.linkaccount}</p>
                </div>
            </div>
        </div>;
        return Item;
    }

    const interDebitContent = () => {
        const Item = 
        interDebit.cardnumber === '' ? <a href='/' className="register-link">Register Online</a>
        : <div className="card-info">
            <div className="cardinfo-above">
                <figure className="card img">
                    <img src={interdebitcardImg} alt="" className="" />
                </figure>
                <div className="card-text">
                    <h3 className="card-high">{interDebit.cardnumber}</h3>
                    <h3 className="card-high name">{interDebit.carduser}</h3>
                    <p className="card-normal">TUB Credit Card</p>
                    <p className="card-normal">Date of issue: {interDebit.issuedate}</p>
                </div>
            </div>
            <div className="cardinfo-below">
                <h3 className="cardinfo-header">Card Information</h3>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Card type</p>
                    <p className="cardinfo-text">None-physical card</p>
                </div>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Linked account</p>
                    <p className="cardinfo-text">{interDebit.linkaccount}</p>
                </div>
            </div>
        </div>;
        return Item;
    }

    const creditContent = () => {
        const Item = 
        credit.cardnumber === '' ? <a href='/' className="register-link">Register Online</a>
        : <div className="card-info">
            <div className="cardinfo-above">
                <figure className="card img">
                    <img src={creditcardImg} alt="" className="" />
                </figure>
                <div className="card-text">
                    <h3 className="card-high">{credit.cardnumber}</h3>
                    <h3 className="card-high name">{credit.carduser}</h3>
                    <p className="card-normal">TUB Credit Card</p>
                    <p className="card-normal">Date of issue: {credit.issuedate}</p>
                </div>
            </div>
            <div className="cardinfo-below">
                <h3 className="cardinfo-header">Card Information</h3>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Card type</p>
                    <p className="cardinfo-text">None-physical card</p>
                </div>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Linked account</p>
                    <p className="cardinfo-text">{credit.linkaccount}</p>
                </div>
            </div>
        </div>;
        return Item;
    }

    return (
        <MainLayout>
            <main className="cardmanager-main">
                <Title title="Card Manager" link="/home" />
                <div className="cardview">
                    <div className="container">
                        <div className="cardview-func">
                            <button className={tab === "debit" ? "tablinks active" : "tablinks"} onClick={() => setTab("debit")}>
                                <i className="fa fa-credit-card card-icon"></i>
                                <p className="card-type">Debit Card</p>
                            </button>
                            <button className={tab === "inter-debit" ? "tablinks active" : "tablinks"} onClick={() => setTab("inter-debit")}>
                                <i className="fa fa-credit-card card-icon"></i>
                                <p className="card-type">Inter-Debit<br />Cards</p>
                            </button>
                            <button className={tab === "credit" ? "tablinks active" : "tablinks"} onClick={() => setTab("credit")}>
                                <i className="fa fa-credit-card card-icon"></i>
                                <p className="card-type">Credit Cards</p>
                            </button>
                        </div>
                        <div className="cardview-content">
                            <div id="debit" className="tabcontent" style={tab==="debit" ? {display:"block"} : {display:"none"}}>
                                {debitContent()}
                            </div>

                            <div id="inter-debit" className="tabcontent"  style={tab==="inter-debit" ? {display:"block"} : {display:"none"}}>
                                {interDebitContent()}
                            </div>

                            <div id="credit" className="tabcontent"  style={tab==="credit" ? {display:"block"} : {display:"none"}}>
                                {creditContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}

export default CardManager;