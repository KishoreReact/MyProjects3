function myFunction(){
    let employees = [
        {
            name: "John Smith",
            id: 1001,
            age: 35,
            earnings: 5000,
            expenses: 1500
        },
        {
            name: "Mary Johnson",
            id: 1002,
            age: 28,
            earnings: 4500,
            expenses: 1200
        },
        {
            name: "David Lee",
            id: 1003,
            age: 40,
            earnings: 6000,
            expenses: 2000
        },
        {
            name: "Sarah Brown",
            id: 1004,
            age: 32,
            earnings: 5200,
            expenses: 1800
        },
        {
            name: "Michael Chen",
            id: 1005,
            age: 45,
            earnings: 7000,
            expenses: 2500
        }
    ];

    const profit = employees.map((a)=>{
        return a.earnings - a.expenses
    })

    profit.sort((a,b) => a - b)
    console.log(profit);

    // const seniors = employees.map((a)
    // )
    return employees
}

export default myFunction();