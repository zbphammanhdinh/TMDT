import {useParams} from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import './CardRequest.scss';
import debitcard from '../../assets/images/DebitCard.png';
import interdebitcard from '../../assets/images/InterDebitCard.png';
import creditcard from '../../assets/images/CreditCard.png';
import Title from '../../components/Title/Title';
import { useState } from 'react';

function CardDetail() {
    let id = useParams().id;
    
    let date = new Date(2020, 9, 25);
    
    const formatDate = () => {
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let data = day+"/"+month+"/"+year;
        return data;
    }

    const [cardInfo, setCardInfo] = useState({
        requestid: 1,
        cardtype: 'debit',
        linkaccount: '124232345634',
        securityquestions: 'What is your university name?',
        securityanswer: 'HCMUTE',
        issuedate: formatDate(),
    })

    const cardInfoContent = () => {
        const item =
        <div className="card-info">
            <div className="cardinfo-above">
                <figure className="card img">
                    <img src={cardInfo.cardtype==="debitcard" ? debitcard : cardInfo.cardtype==="interdebitcard" ? interdebitcard : creditcard} alt="" className="" />
                </figure>
                <div className="card-text">
                    <h3 className="card-high">TRAN HUU THANH</h3>
                    <p className="card-normal">TUB Credit Card</p>
                    <p className="card-normal">05/05/2020</p>
                </div>
            </div>
            <div className="cardinfo-below">
                <h3 className="cardinfo-header">Request Information</h3>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Card type</p>
                    <p className="cardinfo-text">None-physical card</p>
                </div>
                <div className="cardinfo-inner margin-wrap">
                    <p className="cardinfo-text">Linked account</p>
                    <p className="cardinfo-text">{cardInfo.linkaccount}</p>
                </div>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Security question</p>
                    <p className="cardinfo-text">{cardInfo.securityquestions}</p>
                </div>
                <div className="cardinfo-inner margin-wrap">
                    <p className="cardinfo-text">Security answer</p>
                    <p className="cardinfo-text">{cardInfo.securityanswer}</p>
                </div>
                <div className="cardinfo-inner">
                    <p className="cardinfo-text">Date of issue</p>
                    <p className="cardinfo-text">{cardInfo.issuedate}</p>
                </div>
            </div>
        </div>;
        return item;
    }
    return (
        <MainLayout>
            <main className="cardrequest-main">
                <Title link="/admin" title={cardInfo.cardtype === 'debit' ? 'Debit Card request' : cardInfo.cardtype === 'interdebit' ? 'International Debit Card request' : 'Credit Card request'} /> 
                <div className="func">
                    <div className="container">
                        <div className="func-inner">
                            {cardInfoContent()}

                            <div className="card-func">
                                <a href="/carddetail" className="cardfunc-inner"><i className="fas fa-check-circle icon"></i> Approve</a>
                                <a href="/carddetail" className="cardfunc-inner lock"> <i className="fa fa-ban icon"></i>  Decline</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}

export default CardDetail;