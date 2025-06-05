let expenses = [{name: "lunch", amount: 10, date: "2025-06-05"}];

function addExpenses (name, amount, date){
    expenses.push({name: name, amount: amount, date: date});
}


function totalAmountSpent(){
    let total = expenses.reduce((a,b) => a + b.amount, 0)
    console.log(`The total amount is: £${total}`);
}

function removeExpenses(word){
  let initialValue = expenses.length;

   expenses = expenses.filter((ex) => ex.name !== word);

   if (initialValue>expenses.length){
    console.log(`${word} has been removed!`);
   }
   else{
    console.log(`Nothing to remove!`);
   }
}

function allExpenses(){
    console.log("Expense List:")
    expenses.forEach((expen) => console.log(`${expen.name} £${expen.amount}`));
}


function getExpensesByMonth(month, year) {
    let filteredExpenses = expenses.filter((expp) => {
        let [expenseYear, expenseMonth] = expp.date.split("-").map(Number);
        return expenseYear === year && expenseMonth === month;
    });

    if (filteredExpenses.length > 0) {
        console.log(`Expenses for ${month}/${year}:`);
        filteredExpenses.forEach(expp => console.log(`${expp.name}: £${expp.amount} (${expp.date})`));
    } else {
        console.log("No expenses this month!");
    }
}



addExpenses("Train", 10, "2025-06-01");
console.log(expenses);