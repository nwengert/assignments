var thisGuy = {
    name: 'Nate',
    age: 32,
    placesLived: [
        {
            country: 'Venezuela',
            months: 11,
            cities: [
                {
                    name: 'Moron, Carabobo',
                    months: 5,
                },
                {
                    name: 'Coro, Falcon',
                    months: 3,
                },
                {
                    name: 'Valencia, Valencia',
                    months: 4,
                },
            ]
        },
        {
            country: 'Chile',
            months: 12,
            cities: [
                {
                    name: 'Santiago, Sexta Region',
                    months: 6,
                },
                {
                    name: 'Rancagua, Sexta Region',
                    months: 6,
                }
            ]
        },
        {
            country: 'Spain',
            months: 4,
            cities: [
                {
                    name: 'Granada, Andalucia',
                    months: 4,
                }
            ]
        },
        {
            country: 'United States',
            months: 333,
            cities: ['St. Johns', 'Thatcher', 'Las Vegas', 'Tempe', 'Albuquerque', 'Denver', 'Odessa', 'San Antonio', 'Houston', 'Oklahoma City', 'SLC']
        }]
}

console.log(thisGuy.placesLived[3].months)