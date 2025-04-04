"use strict";
const calculateInvestment = (data) => {
    const { initalAmount, annualContribution, expectedReturn, duration } = data;
    if (initalAmount < 0) {
        return `Initial investment amount must be at least zero.`;
    }
    if (duration <= 0) {
        return `Duration No valid amount of years provided.`;
    }
    if (expectedReturn < 0) {
        return `Expected return must be at least zero.`;
    }
    let total = initalAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;
    let annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContribution - initalAmount;
        totalContribution = totalContribution + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalContribution,
            totalInterestEarned,
        });
    }
    return annualResults;
};
const printResults = (results) => {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(`Year: ${yearEndResult.year}`);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contribution: ${yearEndResult.totalContribution.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log(`----------------------------`);
    }
};
const investmentData = {
    initalAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
};
const results = calculateInvestment(investmentData);
printResults(results);
