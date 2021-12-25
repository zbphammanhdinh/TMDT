import MainLayout from '../../components/MainLayout';
import './AdminMain.scss';
import React, { useState, useEffect } from 'react';
import background from '../../assets/images/btcbg.jpg';

function Home() {
    const [tab, setTab] = useState("pendings");

    const [pendings, setPendings] = useState([
        {
            accountname: "Tran Van A",
            cardtype: "Credit Card"
        }
    ])

    const [accounts, setAccounts] = useState([
        {
            accountname: "Tran Van A",
            balance: "90000000"
        },
        {
            accountname: "Nguyen Van B",
            balance: "50000000"
        },
        {
            accountname: "Le Van C",
            balance: "60000000"
        }
    ])

    const [transactions, setTransactions] = useState([
        {
            paymentaccount: "Tran Van A",
            paymentvalue: '+' + 9000000000,
            paymentdate: "21/12/2019 09:30:13"
        },
        {
            paymentaccount: "Tran Van A",
            paymentvalue: -9000000000,
            paymentdate: "21/12/2019 09:30:13"
        }
    ])

    const pendingsContent = () => {
        const listItems = pendings.map((pending, index) =>
        <div className="grid-container" key={index}>
            <p className="grid-item name">{pending.accountname}</p>
            <p className="grid-item">{pending.cardtype}</p>
            <a className="grid-item final" href="/cardrequest/1">Details<i className="fas fa-angle-right arrow"></i></a>
            <hr className="table-line"/>
        </div>);
        return listItems;
    }

    const accountsContent = () => {
        const listItems = accounts.map((account, index) =>
        <div className="grid-container" key={index}>
            <p className="grid-item name">{account.accountname}</p>
            <p className="grid-item">{account.balance}</p>
            <a className="grid-item final" href="/">Details<i className="fas fa-angle-right arrow"></i></a>
            <hr className="table-line"/>
        </div>);
        return listItems;
    }

    const transactionsContent = () => {
        const listItems = transactions.map((transaction, index) =>
        <div className="grid-container" key={index}>
            <p className="grid-item">{transaction.paymentaccount}</p>
            <p className={transaction.paymentvalue>=0 ? "grid-item in" : "grid-item out"}>{transaction.paymentvalue}</p>
            <p className="grid-item final date">{transaction.paymentdate}</p>
            <hr className="table-line"/>
        </div>);
        return listItems;
    }

    return (
        <MainLayout>
            <main className="admin-main">
                <figure className="banner img">
                    <img src={background} alt="" className=""></img>
                </figure>
                <div className="main-inner">
                    <div className="func">
                        <div className="container">
                            <div className="func-inner">
                                <div className="admin-func">
                                    <button className={tab === "pendings" ? "tablinks active" : "tablinks"} onClick={() => setTab("pendings")}>Pendings</button>
                                    <button className={tab === "accounts" ? "tablinks active" : "tablinks"} onClick={() => setTab("accounts")}>Accounts</button>
                                    <button className={tab === "transactions" ? "tablinks active" : "tablinks"} onClick={() => setTab("transactions")}>Transactions</button>
                                </div>
                                <div className="pendings" style={tab==="pendings" ? {display:"block"} : {display:"none"}}>
                                    <div className="grid-header">
                                        <div className="grid-container">
                                            <h3 className="grid-item">Account's name</h3>
                                            <h3 className="grid-item">Card type</h3>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="grid-body">
                                        {pendingsContent()}
                                    </div>
                                </div>
                                <div className="accounts" style={tab==="accounts" ? {display:"block"} : {display:"none"}}>
                                    <div className="grid-header">
                                        <div className="grid-container">
                                            <h3 className="grid-item">Account's name</h3>
                                            <h3 className="grid-item">Balance</h3>
                                            <h3 className="grid-item final">Total accounts: {accounts.length}</h3>
                                        </div>
                                    </div>
                                    <div className="grid-body">
                                        {accountsContent()}
                                    </div>
                                </div>
                                <div className="transactions" style={tab==="transactions" ? {display:"block"} : {display:"none"}}>
                                    <div className="grid-header">
                                        <div className="grid-container">
                                            <h3 className="grid-item">Payment account</h3>
                                            <div></div>
                                            <h3 className="grid-item final">Date of payment</h3>
                                        </div>
                                    </div>
                                    <div className="grid-body">
                                        {transactionsContent()}
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

export default Home;
