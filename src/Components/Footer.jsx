import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <footer className="footer bg-light py-4 mt-4">
            <div className="container">
                <div className="row">
                    {/* Services Section */}
                    <div className="col-md-3">
                        <h5>Services</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="text-dark">
                                    <i className="bi bi-twitter"></i> Cottail Manetoring
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-dark">
                                    <i className="bi bi-mic"></i> Rottal Manetex
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services Cards Section */}
                    <div className="col-md-3">
                        <h5>SERVOGS CARDS</h5>
                        <ul className="list-unstyled">
                            <li>Mastertables</li>
                            <li>Seibenoffsong</li>
                            <li>Directxeros</li>
                            <li>Mivers-subslan</li>
                            <li>Witaxartroot</li>
                        </ul>
                    </div>

                    {/* Onited Cards Section */}
                    <div className="col-md-3">
                        <h5>ONITED CARDS</h5>
                        <ul className="list-unstyled">
                            <li>Modboards</li>
                            <li>Texexoffiong</li>
                            <li>XrefStreamx</li>
                            <li>H&TLent</li>
                            <li>Monwadlistel</li>
                        </ul>
                    </div>

                    {/* Buttons Section */}
                    <div className="col-md-3 text-center">
                        <button className="btn btn-outline-dark mb-2 w-100">BOCOMM DET</button>
                        <button className="btn btn-outline-dark mb-2 w-100">BET COTISTE</button>
                        <button className="btn btn-dark w-100">OACT IST</button>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <small className="text-muted">
                        <i className="bi bi-tools"></i> KODUMITENZFERYEBAGTE.COM
                    </small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
