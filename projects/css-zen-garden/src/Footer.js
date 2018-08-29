import React from 'react';

function Footer(){
    return(
        <div className='bigFooterDiv'>
            <div className='footerDiv'>
                <div id='footerTextDiv'>
                    <p className='footerText'>By </p>
                    <a  className='footerText'href="http://www.mezzoblue.com/">Dave Shea</a>
                    <p className='footerText'>. Bandwidth graciously donated by </p>
                    <a  className='footerText'href="https://mediatemple.net/">mediatemple</a> 
                    <p className='footerText'>. Now available: </p>
                    <a  className='footerText' href="https://www.amazon.com/exec/obidos/ASIN/0321303474/mezzoblue-20/">Zen Garden, the book</a>
                    <p className='footerText'>.</p>
                </div>
            </div>
            <div id="bottomLinksDiv"></div>
        </div>
    )
}
export default Footer