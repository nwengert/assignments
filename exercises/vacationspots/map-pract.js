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

//I really went down a rabbit hole with this

  const names = vacationSpots.map(spot => spot.place);
  const cost = vacationSpots.map(spot => spot.price);
  const dollars = [];

  for(let i = 0; i < 5; i++){
    // console.log(`<div>\n\t<h4>${names[i]}</h4>\n\t<h6>${cost[i]}</h6>`);
      if(cost[i] < 500){
        dollars.push('$')
      }else if(cost[i] < 1000) {
        dollars.push('$$');
      }else{
        dollars.push('$$$')
      }
    // console.log(`\t<h6>${dollars[i]}</h6>\n</div>`);
    var dun = dun + (`\n<div className='spotDiv'>\n\t<h4>${names[i]}</h4>\n\t<h6>${cost[i]}</h6>\n\t<h6>${dollars[i]}</h6>\n</div>`)
  }
  console.log(dun);

