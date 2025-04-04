// ## data:
// ==> inital amount
// ==> annual contribution
// ==> expected return
// ==> duration

// ## functions:
// - calculateInvestment - return result[]
// - print results - return void

interface InvestmentData {
  initalAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
}

interface InvestmentResult {
  year: string;
  totalAmount: number;
  totalContribution: number;
  totalInterestEarned: number;
}

type calculationResult = InvestmentResult[] | string;

const calculateInvestment = (data: InvestmentData): calculationResult => {
  const { initalAmount, annualContribution, expectedReturn, duration } = data;

  // validation of data
  if (initalAmount < 0) {
    return `Initial investment amount must be at least zero.`;
  }
  if (duration <= 0) {
    return `Duration No valid amount of years provided.`;
  }
  if (expectedReturn < 0) {
    return `Expected return must be at least zero.`;
  }

  // Initial values
  let total = initalAmount;
  let totalContribution = 0;
  let totalInterestEarned = 0;
  let annualResults: InvestmentResult[] = [];

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

const printResults = (results: calculationResult): void => {
  if (typeof results === "string") {
    console.log(results);
    return;
  }

  for (const yearEndResult of results) {
    console.log(`Year: ${yearEndResult.year}`);
    console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
    console.log(
      `Total Contribution: ${yearEndResult.totalContribution.toFixed(0)}`
    );
    console.log(
      `Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`
    );
    console.log(`----------------------------`);
  }
};

const investmentData: InvestmentData = {
  initalAmount: 5000, // Initial investment
  annualContribution: 500, // Money added every year
  expectedReturn: 0.08, // 8% annual return
  duration: 10, // 10 years
};

const results = calculateInvestment(investmentData);
printResults(results);
