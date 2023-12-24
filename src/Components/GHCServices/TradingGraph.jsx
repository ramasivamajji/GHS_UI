// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import * as ghc from "react-bootstrap";

function TradingGraph() {
    const container = useRef();

    useEffect(
        () => {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "autosize": true,
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "in",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "support_host": "https://www.tradingview.com"
        }`;
            container.current.appendChild(script);
        },
        []
    );

    return (
        <ghc.Row className='my-5 '>
            <ghc.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1}></ghc.Col>
            <ghc.Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
                <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
                    <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
                    <div className="tradingview-widget-copyright"><a href="https://in.tradingview.com/" rel="noopener nofollow noreferrer" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
                </div>
            </ghc.Col>
            <ghc.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className=''>
                <h4 className='text-primary text-decoration-underline mt-2'>Golden Hills Trading View</h4>
                <h5 className='mt-3'>Apple Inc. (AAPL) Stock Information</h5>
                <ul className='list-group'>
                    <li className='list-group-item'>Current Price: $148.56</li>
                    <li className='list-group-item'>Previous Close: $145.32</li>
                    <li className='list-group-item'>Market Cap: $2.5 trillion</li>
                    <li className='list-group-item'>52-Week High: $150.23</li>
                    <li className='list-group-item'>52-Week Low: $107.32</li>
                    <li className='list-group-item'>Dividend Yield: 0.58%</li>
                    <li className='list-group-item'>P/E Ratio: 29.45</li>
                    <li className='list-group-item'>Current Price: $148.56</li>
                    <li className='list-group-item'>Previous Close: $145.32</li>
                    <li className='list-group-item'>Market Cap: $2.5 trillion</li>
                    <li className='list-group-item'>52-Week High: $150.23</li>
                    <li className='list-group-item'>52-Week Low: $107.32</li>
                    <li className='list-group-item'>Dividend Yield: 0.58%</li>
                    <li className='list-group-item'>P/E Ratio: 29.45</li>
                </ul>
            </ghc.Col>
            <ghc.Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1}></ghc.Col>
        </ghc.Row>
    );
}

export default memo(TradingGraph);
