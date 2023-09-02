import React, {useState} from "react";

import Header from "./components/Header/Header";
import Form from "./components/userInput/Form";
import Table from "./components/results/ResultTable";

function App() {
  const[userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  };

  const yearlyData = [];


  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        id: Math.random().toString(),
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <Form onCalculate={calculateHandler}/>

      {!userInput && <p style={{textAlign: "center"}}>"No investement to show yet"</p>}
      {userInput && <Table data={yearlyData} initialInvestment={userInput["current-savings"]}/>}


    </div>
  );
}

export default App;
