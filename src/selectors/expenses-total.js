const getExpensesTotal = (expenses) => {
    return expenses.map((expense) => {
        return expense.amount;
    }).reduce((acc, amount) => {
        return acc+amount;
    }, 0);
};

export default getExpensesTotal;