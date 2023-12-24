import React from "react";
import * as ghc from "react-bootstrap";
import { GoLinkExternal, GoPulse, GoGraph } from "react-icons/go";


export default function StockData() {

    const stockData = [
        {
            "stockName": "AAPL",
            "description": "Apple Inc. - Technology giant known for its iPhones and other consumer electronics.",
            "url": "https://finance.yahoo.com/quote/AAPL"
        },
        {
            "stockName": "GOOGL",
            "description": "Alphabet Inc. (Google) - Internet services and technology conglomerate.",
            "url": "https://finance.yahoo.com/quote/GOOGL"
        },
        {
            "stockName": "AMZN",
            "description": "Amazon.com Inc. - E-commerce and cloud computing company.",
            "url": "https://finance.yahoo.com/quote/AMZN"
        },
        {
            "stockName": "MSFT",
            "description": "Microsoft Corporation - Leading software and technology company.",
            "url": "https://finance.yahoo.com/quote/MSFT"
        },
        {
            "stockName": "TSLA",
            "description": "Tesla, Inc. - Electric vehicle and clean energy company.",
            "url": "https://finance.yahoo.com/quote/TSLA"
        },
        {
            "stockName": "FB",
            "description": "Meta Platforms, Inc. (Facebook) - Social media and technology company.",
            "url": "https://finance.yahoo.com/quote/FB"
        },
        {
            "stockName": "NVDA",
            "description": "NVIDIA Corporation - Graphics processing unit (GPU) manufacturer.",
            "url": "https://finance.yahoo.com/quote/NVDA"
        },
        {
            "stockName": "NFLX",
            "description": "Netflix, Inc. - Streaming entertainment service.",
            "url": "https://finance.yahoo.com/quote/NFLX"
        },
        {
            "stockName": "PYPL",
            "description": "PayPal Holdings, Inc. - Online payments and financial technology company.",
            "url": "https://finance.yahoo.com/quote/PYPL"
        },
        {
            "stockName": "V",
            "description": "Visa Inc. - Global payments technology company.",
            "url": "https://finance.yahoo.com/quote/V"
        },
        {
            "stockName": "DIS",
            "description": "The Walt Disney Company - Entertainment and media conglomerate.",
            "url": "https://finance.yahoo.com/quote/DIS"
        },
        {
            "stockName": "BA",
            "description": "The Boeing Company - Aerospace and defense company.",
            "url": "https://finance.yahoo.com/quote/BA"
        }
    ]



    function getRandomColor() {
        const array = [
            "primary",
            "success",
            "danger",
            "warning"
        ];
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    const getRandomIcon = () => {
        const array = [<GoPulse />, <GoGraph />]
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    function openUrl(url) {
        window.open(url);
    }

    return (
        <>
            <ghc.Row className="my-5">
                <ghc.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></ghc.Col>
                <ghc.Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                    <span className="text-primary h3 text-decoration-underline">Golden Hills - Stock Data</span>
                </ghc.Col>
                <ghc.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></ghc.Col>
            </ghc.Row>
            <ghc.Row>
                <ghc.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></ghc.Col>
                <ghc.Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                    <ghc.Row className="">
                        {stockData.map((data, i) => (
                            <React.Fragment key={i}>
                                <ghc.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="">
                                    <div className="form-control p-3 mb-4 nav-link-animated">
                                        {getRandomIcon()} &nbsp;
                                        <span className={`fw-bold text-${getRandomColor()}`}>{data.stockName}</span>
                                        <GoLinkExternal
                                            className="text-primary float-end"
                                            size={20}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                                openUrl(data.url);
                                            }}
                                        />
                                        <p className="mt-2 small text-muted">{data.description}</p>
                                    </div>
                                </ghc.Col>
                            </React.Fragment>
                        ))}
                    </ghc.Row>
                </ghc.Col>
                <ghc.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></ghc.Col>
            </ghc.Row>
        </>
    );
}