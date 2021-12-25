import MainLayout from '../../components/MainLayout';
import './PaymentAccount.scss';
import React, { useState, useEffect } from 'react';
import Title from '../../components/Title/Title';
function PaymentAccount() {
    const [tab, setTab] = useState("payment-all");

    const [paymentin, setPaymentIn] = useState([
        {
            transactioncode: "01234",
            transactiontime: "24/5/2021",
            transactionvalue: 900000000,
        },
        {
            transactioncode: "01234",
            transactiontime: "24/5/2021",
            transactionvalue: 900000000,
        }
    ])

    const [paymentout, setPaymentOut] = useState([
        {
            transactioncode: "01234",
            transactiontime: "24/5/2021",
            transactionvalue: -900000000,
        },
    ])

    // eslint-disable-next-line
    useEffect(() => {
        setPaymentOut(paymentout);
        setPaymentIn(paymentin);
    })
    const paymentInContent = () => {
        const listItems = paymentin.map((payin, index) =>
        <div className="transaction" key={index}>
            <div className="transaction-above">
                <p className="transaction-time">{payin.transactiontime}</p>
                <p className="transaction-code">Trans code: {payin.transactioncode}</p>
            </div>
            <div className="transaction-below">
                <p className="transaction-status">PHI GIAO DICH</p>
                <p className="transaction-value">{payin.transactionvalue}</p>
            </div>
        </div>);
        return listItems;
    }

    const paymentOutContent = () => {
        const listItems = paymentout.map((payout, index) =>
        <div className="transaction" key={index}>
            <div className="transaction-above">
                <p className="transaction-time">{payout.transactiontime}</p>
                <p className="transaction-code">Trans code: {payout.transactioncode}</p>
            </div>
            <div className="transaction-below">
                <p className="transaction-status">PHI GIAO DICH</p>
                <p className="transaction-value">{payout.transactionvalue}</p>
            </div>
        </div>);
        return listItems;
    }

    return (
        <MainLayout>
            <main className="paymentaccount-main">
                <div className="func">
                    <Title title="Payment Account" link="/home" />
                    <div className="container">
                        <div className="func-inner">
                            <div className="payment">
                                <div className="payment-nav">
                                    <div className="payment-func">
                                        <button className={tab === "payment-all" ? "tablinks active" : "tablinks"} onClick={() => setTab("payment-all")}>All</button>
                                        <button className={tab === "payment-in" ? "tablinks active" : "tablinks"} onClick={() => setTab("payment-in")}>In</button>
                                        <button className={tab === "payment-out" ? "tablinks active" : "tablinks"} onClick={() => setTab("payment-out")}>Out</button>
                                    </div>
                                    <div className="payment-search">
                                        <form action="/paymentaccount" className="paymentsearch-inner">
                                            <button type="submit" className="search-button"><i className="fa fa-search search-icon"></i></button>
                                            <input type="text" placeholder="Search.." name="search" className="search-input" />
                                        </form>
                                    </div>
                                </div>
                                <hr className="payment-line"/>
                                <div className="payment-content">
                                    <div id="payment-in" className="tabcontent payment-in" style={tab==="payment-in" || tab==="payment-all" ? {display:"block"} : {display:"none"}}>
                                        {paymentInContent()}
                                    </div>

                                    <div id="payment-out" className="tabcontent payment-out" style={tab==="payment-out" || tab==="payment-all" ? {display:"block"} : {display:"none"}}>
                                        {paymentOutContent()}
                                    </div>
                                </div>
                            </div>
                            <div className="account">
                                <div className="account-header">
                                    <p className="account-text">1234567899999</p>
                                    <i className="fas fa-wallet account-icon"></i>
                                </div>
                                <div className="account-content">
                                    <div className="accountcontent-inner">
                                        <p className="account-label">Account name</p>
                                        <p className="account-value">TRAN HUU THANH</p>
                                    </div>
                                    <div className="accountcontent-inner">
                                        <p className="account-label">Account number</p>
                                        <p className="account-value">1234567899999</p>
                                    </div>
                                    <div className="accountcontent-inner">
                                        <p className="account-label">Account opening date</p>
                                        <p className="account-value">27/3/2020</p>
                                    </div>
                                    <div className="accountcontent-inner">
                                        <p className="account-label">Balance</p>
                                        <p className="account-value">99999999 VND</p>
                                    </div>
                                    <div className="accountcontent-inner">
                                        <p className="account-label">Available balance</p>
                                        <p className="account-value">99999999 VND</p>
                                    </div>
                                    <div className="accountcontent-inner">
                                        <p className="account-label">Currency</p>
                                        <p className="account-value">VND</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}

export default PaymentAccount;