/**
 * Button functionality
 */
function handleConsoleLog() {
    console.log("Console log button clicked!");
}

function handleConsoleError() {
    console.error("Console error button clicked!");
}

function handleConsoleCount() {
    console.count("Console count button clicked!");
}

function handleConsoleWarn() {
    console.warn("Console warn button clicked!");
}

function handleConsoleAssert() {
    console.assert(false, "Console assert button clicked! This will fail.");
}

function handleConsoleClear() {
    console.clear();
}

function handleConsoleDir() {
    const obj = { name: "Example", type: "Object" };
    console.dir(obj);
}

function handleConsoleDirxml() {
    const xmlString = `<note><to>Wyatt</to><from>Mom</from><heading>Messages</heading><body>Don't forgot to eat your veggies!</body></note>`;
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");
    console.dirxml(xmlDoc);
}

function startConsoleGroup() {
    console.group("Console Group");
    console.log("This is a message inside the group.");
}

function endConsoleGroup() {
    console.groupEnd();
    console.log("Console group ended.");
}

function handleConsoleTable() {
    const data = [
        { name: "James", age: 40, city: "New York" },
        { name: "Alice", age: 30, city: "Los Angeles" },
        { name: "Bob", age: 25, city: "Chicago" }
    ];
    console.table(data);
}

function startTime() {
    console.time("Timer");
    console.log("Timer started.");
}

function endTime() {
    console.timeEnd("Timer");
    console.log("Timer ended.");
}

function forTrace() {
    
    function insideFunction1() {
        insideFunction2();
    }

    function insideFunction2() {
        console.trace();
    }

    insideFunction1();
}

/**
 * Custom Errors
 */
class CalculatorError extends Error {
  constructor(message) {
    super(message);
    this.name = "CalculatorError";
  }
}
/* With the typical try/catch/finally and throw */
function safeCalculate1(firstNum, operator, secondNum) {
        try {
            if (isNaN(firstNum) || isNaN(secondNum)) {
            throw new Error("Inputs must be numbers.");
            }
            if (operator === "/" && Number(secondNum) === 0) {
            throw new Error("Cannot divide by zero.");
            }
            let result = eval(`${firstNum} ${operator} ${secondNum}`);
            return result;
        } catch (err) {
            console.error("Calculation error:", err.message);
            return err.message;
        } finally {
            console.log("Calculation attempted.");
        }
    }

/* Using custom error type */
function safeCalculate2(firstNum, operator, secondNum) {
  try {
    if (isNaN(firstNum) || isNaN(secondNum)) {
      throw new CalculatorError("Inputs must be numbers.");
    }
    if (operator === "/" && Number(secondNum) === 0) {
      throw new CalculatorError("Cannot divide by zero.");
    }
    let result = eval(`${firstNum} ${operator} ${secondNum}`);
    return result;
  } catch (err) {
    if (err instanceof CalculatorError) {
      console.error(`[CalculatorError]: ${err.message}`);
      return err.message;
    } else {
      console.error("[Unknown Error]:", err);
      return "An unknown error occurred.";
    }
  } finally {
    console.log("Calculation attempted.");
  }
}


/**
 * Global Error Handling
 */
function triggerGlobalError() {
  notDefinedFunction();
}

window.onerror = function(message, source, lineno, colno, error) {
  console.log("Global error caught!");
  console.log("Message:", message);
  console.log("Source:", source);
  console.log("Line:", lineno, "Column:", colno);
  console.log("Error object:", error);
  return true; 
};