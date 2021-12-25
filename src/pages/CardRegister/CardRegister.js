import MainLayout from '../../components/MainLayout';
import Title from '../../components/Title/Title';
import './CardRegister.scss';
import React, { useEffect, useState } from 'react';

function CardRegister() {
    const [question, setQuestion] = useState("Security question"); 
    const [file, setFile] = useState();
    const [type, setType] = useState();

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    }

    const handleInputChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleRadioChange = (e) => {
        if(e.target.checked) {
            setType(e.target.value)
        }
    }

    useEffect(() => {
        console.log(type);
        console.log(file)
    })

    return (
        <MainLayout>
            <main className="cardregister-main">
                <Title link="/cardmanager" title="Card Register"/>
                <div className="card-info">
                    <div className="container">
                        <div className="cardinfo-inner">
                            <p className="cardinfo-text text-upper">Card product: <b>TUB Online Banking</b></p>
                            <p className="cardinfo-text">Link account: <b>12123123123</b></p>
                        </div>
                    </div>
                </div>
                <div className="card-wrap">
                    <div className="container">
                        <div className="cardwrap-inner">
                            <div className="card-security">
                                <div className="dropdown">
                                    <div className="dropdown-title">
                                        <p className="title-text">{question}</p><i className="fas fa-angle-down arrow" />
                                    </div>
                                    <div className="dropdown-content">
                                        <input type="button" className="content" onClick={handleQuestionChange} value={"Hello World"}></input>
                                        <input type="button" className="content" onClick={handleQuestionChange} value={"Hi Guy"}></input>
                                    </div>
                                </div>
                                <input className="answer-input" placeholder="Enter the answer" type="text"/>
                            </div>

                            <div className="card-type">
                                <form className="cardtype-form">
                                    <h3 className="title">Select card type:</h3>
                                    <input className="type-input" type="radio" value="debitcard" name="card" id="debitcard" onChange={handleRadioChange}/>
                                    <label className="type-label" htmlFor="debitcard">Debit Card</label><br/>
                                    <input className="type-input" type="radio" value="interdebitcard" name="card" id="interdebitcard"  onChange={handleRadioChange}/>
                                    <label className="type-label" htmlFor="interdebitcard">International Debit Card</label><br/>
                                    <input className="type-input" type="radio" value="creditcard" name="card" id="creditcard"  onChange={handleRadioChange}/>
                                    <label className="type-label" htmlFor="creditcard">Credit Card</label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                { type === "creditcard" &&
                    <div className="credit-image">
                        <div className="container">
                            <div className="creditimage-inner">
                                <h3 className="file-title">Please upload your image of your payroll</h3>
                                <form action="/" className="file-form">
                                    <label className="fileinput-custom">
                                        <input type="file" name="file" onChange={handleInputChange} />
                                        <p>{file !== undefined ? file.name : "Image Upload"}</p>
                                        <p>{file !== undefined && file.size}</p>
                                    </label>
                                    <button className="file-submit" type="submit">UPLOAD</button>
                                </form>
                            </div>
                        </div>
                    </div>
                }
                <div className="card-policy">
                    <div className="container">
                        <div className="cardpolicy-inner">
                            <div className="cardpolicy-up">
                                <input className="policy-input" type="checkbox" value="agreepolicy" name="policy"/>
                                <label className="policy-label" htmlFor="policy">I have read, understand and agree with <a href="/">TUB Bank's Policy</a></label>
                            </div>
                            <div className="cardpolicy-down">
                                <button className="policy-button" type="button">NEXT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}

export default CardRegister;