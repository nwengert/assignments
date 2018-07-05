import React from 'react';

function Cards (props) {
    let vacationSpots = [  
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ]

      const names = vacationSpots.map(spot => spot.place);
      const cost = vacationSpots.map(spot => spot.price);
      const dollars = [];

      for(let i = 0; i < 5; i++){
          if(cost[i] < 500){
            dollars.push('$')
          }else if(cost[i] < 1000) {
            dollars.push('$$');
          }else{
            dollars.push('$$$')
          }
        var dun = dun + (`<div>\n\t<h4>${names[i]}</h4>\n\t<h6>${cost[i]}</h6>\n\t<h6>${dollars[i]}</h6>\n</div>`)
    //so what the hell is going on here?
    //I was able to get a whole html sequence written out and saved to 'dun', but the syntax won't translate 
    }
    // return(dun)
    return(
        <div>
            <div className='spotDiv'>
                    <h4>Meridian, Idaho</h4>
                    <h6>40</h6>
                    <h6>$</h6>
            </div>
            <div className='spotDiv'>
                    <h4>Cancun</h4>
                    <h6>900</h6>
                    <h6>$$</h6>
            </div>
            <div className='spotDiv'>
                    <h4>China</h4>
                    <h6>1200</h6>
                    <h6>$$$</h6>
            </div>
            <div className='spotDiv'>
                    <h4>Russia</h4>
                    <h6>1100</h6>
                    <h6>$$$</h6>
            </div>
            <div className='spotDiv'>
                    <h4>Lebanon</h4>
                    <h6>400</h6>
                    <h6>$</h6>
            </div>
        </div>
    
    )
}

export default Cards






{/* <div className='spotDiv'>
        <h4>Meridian, Idaho</h4>
        <h6>40</h6>
        <h6>$</h6>
</div>
<div className='spotDiv'>
        <h4>Cancun</h4>
        <h6>900</h6>
        <h6>$$</h6>
</div>
<div className='spotDiv'>
        <h4>China</h4>
        <h6>1200</h6>
        <h6>$$$</h6>
</div>
<div className='spotDiv'>
        <h4>Russia</h4>
        <h6>1100</h6>
        <h6>$$$</h6>
</div>
<div className='spotDiv'>
        <h4>Lebanon</h4>
        <h6>400</h6>
        <h6>$</h6>
</div> */}