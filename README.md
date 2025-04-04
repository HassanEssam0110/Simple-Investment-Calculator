# Investment Calculator (TypeScript)

This is a simple investment calculator written in TypeScript. It calculates the total amount, total contribution, and total interest earned over a set number of years based on the initial investment amount, annual contribution, and expected annual return. The results are displayed for each year of the investment duration.

## Project Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/HassanEssam0110/Simple-Investment-Calculator.git
   cd Simple-Investment-Calculator
   ```

2. **Install dependencies**:

   Ensure you have **Node.js** installed, and then install TypeScript.

   ```bash
   npm install
   ```

3. **Compile and run**:

   You can compile and run the project using the following npm script:

   ```bash
   npm start
   ```

   This will compile the TypeScript code and then run the generated JavaScript.

---

## Data

The investment calculator requires the following data:

- **initialAmount**: The initial amount of money invested.
- **annualContribution**: The money added to the investment each year.
- **expectedReturn**: The expected annual return rate (as a decimal, e.g., 8% as `0.08`).
- **duration**: The number of years the investment will be held.

Example:

```ts
const investmentData: InvestmentData = {
  initialAmount: 5000, // Initial investment
  annualContribution: 500, // Money added every year
  expectedReturn: 0.08, // 8% annual return
  duration: 10, // 10 years
};
```

---

## Functions

### `calculateInvestment(data: InvestmentData): calculationResult`

This function takes in investment data and returns either a string (error message) or an array of `InvestmentResult` objects. It calculates the investment for each year based on the provided data.

- **Parameters**: `data` (InvestmentData) - Contains the initial amount, annual contribution, expected return, and duration.
- **Returns**: An array of `InvestmentResult` objects or an error message string.

### `printResults(results: calculationResult): void`

This function prints the results to the console. If the calculation returns a string (error message), it logs that. Otherwise, it logs the results for each year of the investment.

- **Parameters**: `results` (calculationResult) - The result returned by `calculateInvestment`.
- **Returns**: Nothing (void). It just logs the results.

---

## Example

### Example Input:

```ts
const investmentData: InvestmentData = {
  initialAmount: 5000, // Initial investment
  annualContribution: 500, // Money added every year
  expectedReturn: 0.08, // 8% annual return
  duration: 10, // 10 years
};
```

### Example Output:

For the above example, the output would look something like this:

```
Year: Year 1
Total: 5400
Total Contribution: 500
Total Interest Earned: 400
----------------------------
Year: Year 2
Total: 5880
Total Contribution: 1000
Total Interest Earned: 880
----------------------------
...
```

---

## License

This project is licensed under the **ISC** License - see the [LICENSE](LICENSE) file for details.
