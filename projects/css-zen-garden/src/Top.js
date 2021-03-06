import React from 'react';

function Top(){
    return(
        <div className='topDiv'>
            <div className="topInnerDiv">
                <div id="CZG_TheBeauty">
                    <h1>CSS ZEN GARDEN</h1>
                    <h2>The Beauty of CSS Design</h2>
                </div>
                <div id="viewDesignsWrapper">
                    <div id="viewDesignsOuterDiv">
                        <div className='view' id="prev">.</div>
                        <div className='view' id="viewAllDesignsDiv">
                            <a id="viewAllDesigns">VIEW ALL DESIGNS</a>
                        </div>
                        <div className='view' id="next">></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Top