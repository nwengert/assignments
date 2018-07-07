import React from 'react';

function Cards (props) {
    const vacationSpots = [  
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

      const dollaSigns = (num) => {
        if(num < 500){
                return('$');
        }else if(num > 101 && num < 1000){
                return('$$');
        }else{
                return('$$$');
        }
       }

       const backgroundColors = (str) => {
                if(str === "Spring"){
                        return 'lightgreen';
                }else if(str === "Winter"){
                        return 'lightgray';
                }else if(str === 'Fall'){
                        return 'orange';
                }else{
                        return 'yellow';
                }
       }

      const locations = vacationSpots.map(spot => {
              const bColor = backgroundColors(spot.timeToGo)
              return(
                <div className='spotDiv' style={{backgroundColor: bColor}}>
                    <h4> { spot.place }</h4>
                    <h6> { spot.price }</h6>
                    <h6>{dollaSigns(spot.price)}</h6>
                </div>  
              )

        })
        return(
                <div>
                        { locations }
                </div>
        )
}

        export default Cards
        
        // {/* <div className='spotDiv' style={{backgroundColor:  backgroundColors(spot.timeToGo)}}> */}
      
      
      
      
      //       for(let i = 0; i < 5; i++){
      //           if(cost[i] < 500){
      //             dollars.push('$')
      //           }else if(cost[i] < 1000) {
      //             dollars.push('$$');
      //           }else{
      //             dollars.push('$$$')
      //           }
      //         var dun = dun + (`<div>\n\t<h4>${names[i]}</h4>\n\t<h6>${cost[i]}</h6>\n\t<h6>${dollars[i]}</h6>\n</div>`)
      //     //I was able to get a whole html sequence written out and saved to 'dun', but the syntax won't translate 
      //     }
      //     // return(dun)
      //     return(
      //         <div>
      //                 { locations }
      //         </div>
          
      //     )
      // }

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