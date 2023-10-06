//?chapter 26 to 30
q1
        // function calculateValues() {
        //     // Get the user input
        //     const userInput = document.getElementById("userInput").value;

        //     // Check if the input is a positive integer
        //     if (Number.isInteger(parseFloat(userInput)) && parseInt(userInput) > 0) {
        //         // Convert the input to a number
        //         const number = parseFloat(userInput);

        //         // Calculate and display the requested values
        //         document.getElementById("number").textContent = number;
        //         document.getElementById("roundOff").textContent = Math.round(number);
        //         document.getElementById("floorValue").textContent = Math.floor(number);
        //         document.getElementById("ceilValue").textContent = Math.ceil(number);
        //     } else {
        //         // Display an error message if the input is not valid
        //         alert("Please enter a valid positive integer.");
        //     }
        // }
        q2
        // function calculateValues() {
        //     // Get the user input
        //     const userInput = document.getElementById("userInput").value;

        //     // Check if the input is a valid negative floating-point number
        //     if (!isNaN(userInput) && parseFloat(userInput) < 0) {
        //         // Convert the input to a number
        //         const number = parseFloat(userInput);

        //         // Calculate and display the requested values
        //         document.getElementById("number").textContent = number;
        //         document.getElementById("roundOff").textContent = Math.round(number);
        //         document.getElementById("floorValue").textContent = Math.floor(number);
        //         document.getElementById("ceilValue").textContent = Math.ceil(number);
        //     } else {
        //         // Display an error message if the input is not valid
        //         alert("Please enter a valid negative floating-point number.");
        //     }
        // }
q3
        // function calculateAbsoluteValue() {
        //     // Get the user input
        //     const userInput = document.getElementById("userInput").value;

        //     // Check if the input is a valid number
        //     if (!isNaN(userInput)) {
        //         // Calculate the absolute value
        //         const absoluteValue = Math.abs(parseFloat(userInput));

        //         // Display the absolute value in the browser
        //         document.getElementById("absoluteValue").textContent = absoluteValue;
        //     } else {
        //         // Display an error message if the input is not valid
        //         alert("Please enter a valid number.");
        //     }
        // }
        q4
        // function rollDice() {
        //     // Generate a random number between 1 and 6 to simulate a dice roll
        //     const diceRoll = Math.floor(Math.random() * 6) + 1;

        //     // Display the dice value in the browser
        //     document.getElementById("diceValue").textContent = diceRoll;
        // }

        // function tossCoin() {
        //     // Generate a random number between 0 and 1
        //     const randomNumber = Math.random();

        //     // Use the random number to determine the result (heads or tails)
        //     const coinResult = randomNumber < 0.5 ? "Heads" : "Tails";

        //     // Display the coin result in the browser
        //     document.getElementById("coinResult").textContent = coinResult;
        // }
        q5
        // function generateRandomNumber() {
        //     // Generate a random number between 1 and 100
        //     const randomNumber = Math.floor(Math.random() * 100) + 1;

        //     // Display the random number in the browser
        //     document.getElementById("randomNumber").textContent = randomNumber;
        // }
        q6
        // function parseWeight() {
        //     // Get the user input
        //     const userInput = document.getElementById("userInput").value;

        //     // Use regular expressions to extract the weight value
        //     const weightRegex = /(\d+(\.\d+)?)\s*(kgs?|kilograms?)?/i;
        //     const match = userInput.match(weightRegex);

        //     if (match) {
        //         // Extract the weight value from the matched groups
        //         const weightValue = parseFloat(match[1]);
        //         const unit = match[3] || "kgs"; // Default to "kgs" if no unit is provided

        //         // Display the parsed weight in the browser
        //         document.getElementById("parsedWeight").textContent = weightValue + " " + unit;
        //     } else {
        //         // Display an error message if the input format is not recognized
        //         alert("Please enter a valid weight (e.g., 50, 50kgs, 50.2kgs, or 50.2kilograms).");
        //     }
        // }
        q7
        //  // Generate a random secret number between 1 and 10
        //  const secretNumber = Math.floor(Math.random() * 10) + 1;

        //  function checkGuess() {
        //      // Get the user's guess
        //      const userGuess = parseInt(document.getElementById("userInput").value);
 
        //      if (userGuess >= 1 && userGuess <= 10) {
        //          // Check if the user's guess equals the secret number
        //          if (userGuess === secretNumber) {
        //              document.getElementById("result").textContent = "Congratulations! You guessed the correct number.";
        //          } else {
        //              document.getElementById("result").textContent = "Sorry, your guess is incorrect. Try again!";
        //          }
        //      } else {
        //          document.getElementById("result").textContent = "Please enter a number between 1 and 10.";
        //      }
        //  }

        //? Assignment # 31-34
        q1
        // // Function to update the date and time every second
        // function updateTime() {
        //     const now = new Date();
        //     const datetimeElement = document.getElementById("datetime");
            
        //     // Format the date and time as a string
        //     const formattedDatetime = now.toLocaleString();
            
        //     // Update the content of the 'datetime' element
        //     datetimeElement.textContent = "Current Date and Time: " + formattedDatetime;
        // }
        
        // // Call updateTime() to display the initial date and time
        // updateTime();
        
        // // Set an interval to update the date and time every second
        // setInterval(updateTime, 1000);
        q2
        // function getCurrentMonth() {
        //     // Array of month names
        //     const monthNames = [
        //         "January", "February", "March", "April",
        //         "May", "June", "July", "August",
        //         "September", "October", "November", "December"
        //     ];

        //     // Get the current date
        //     const currentDate = new Date();

        //     // Get the current month (0-indexed) and convert it to the corresponding month name
        //     const currentMonth = monthNames[currentDate.getMonth()];

        //     // Display the current month using an alert
        //     alert("The current month is: " + currentMonth);
        // }
        q3
        // function getFirstThreeLettersOfDay() {
        //     // Array of day names
        //     const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        //     // Get the current date
        //     const currentDate = new Date();

        //     // Get the current day of the week (0-indexed) and convert it to the corresponding day name
        //     const currentDay = dayNames[currentDate.getDay()];

        //     // Display the first 3 letters of the current day using an alert
        //     alert("The first 3 letters of the current day are: " + currentDay);
        // }

q4
// function checkFunDay() {
//     // Get the current date
//     const currentDate = new Date();

//     // Get the current day of the week (0-indexed)
//     const currentDay = currentDate.getDay();

//     // Check if it's Saturday (6) or Sunday (0)
//     if (currentDay === 6 || currentDay === 0) {
//         alert("It's Fun day!");
//     } else {
//         alert("It's not a Fun day. Enjoy your day!");
//     }
// }
q5
// function checkMonthDay() {
//     // Get the current date
//     const currentDate = new Date();

//     // Get the current day of the month
//     const currentDay = currentDate.getDate();

//     // Check if the current day is less than 16
//     if (currentDay < 16) {
//         alert("First fifteen days of the month");
//     } else {
//         alert("Last days of the month");
//     }
// }
q6
// // Assign the current timestamp in milliseconds to a variable
// var currentTimeMillis = Date.now();

// // Convert milliseconds to minutes (1 minute = 60,000 milliseconds)
// var minutesSinceEpoch = Math.floor(currentTimeMillis / 60000);

// // Display the minutes since midnight, Jan. 1, 1970
// console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch);
q7
// function checkAMorPM() {
//     // Get the current date
//     const currentDate = new Date();

//     // Get the current hour (0-23)
//     const currentHour = currentDate.getHours();

//     // Check if the current hour is before noon (AM)
//     if (currentHour < 12) {
//         alert("It's AM");
//     } else {
//         alert("It's PM");
//     }
// }
q8
// Create a Date object for December 31, 2020
// var lastDayOfDecember2020 = new Date(2020, 11, 31); // Month is zero-based (11 for December)

// // Assign it to the variable laterDate
// var laterDate = lastDayOfDecember2020;

// console.log(laterDate); // You can log it to the console to verify
q9
// Create a Date object for the start date of Ramadan (June 18, 2015)
// var startDateOfRamadan = new Date(2015, 5, 18); // Month is zero-based (5 for June)

// // Get the current date
// var currentDate = new Date();

// // Calculate the time difference in milliseconds between the current date and the start date of Ramadan
// var timeDifference = currentDate - startDateOfRamadan;

// // Convert the time difference from milliseconds to days
// var daysPassedSinceRamadan = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// // Display the number of days that have passed since 1st Ramadan
// alert("Number of days passed since 1st Ramadan (June 18, 2015): " + daysPassedSinceRamadan);

q10
// function calculateElapsedSeconds() {
//     // Define a reference date (e.g., January 1, 2000)
//     const referenceDate = new Date("January 1, 2000");

//     // Define the start date (beginning of 2015)
//     const startDate = new Date("January 1, 2015");

//     // Calculate the time difference in milliseconds between the start date and the reference date
//     const timeDifferenceMillis = startDate - referenceDate;

//     // Convert the time difference from milliseconds to seconds
//     const elapsedSeconds = Math.floor(timeDifferenceMillis / 1000);

//     // Display the elapsed seconds in the browser
//     alert("Seconds elapsed between the reference date and the beginning of 2015: " + elapsedSeconds);
// }

// q11
// function manipulateDate() {
//     // Create a Date object for the current date and time
//     var currentDate = new Date();

//     // Extract the hours from the current date
//     var currentHours = currentDate.getHours();

//     // Reset the date object an hour ahead
//     currentDate.setHours(currentHours + 1);

//     // Display the modified date object in the browser
//     document.getElementById("result").textContent = "Modified Date: " + currentDate;
// }
q12
// function resetDate() {
//     // Create a Date object for the current date and time
//     var currentDate = new Date();

//     // Reset the date object 100 years back
//     currentDate.setFullYear(currentDate.getFullYear() - 100);

//     // Display the modified date in an alert box
//     alert("Date reset to 100 years back: " + currentDate.toDateString());
// }

q13
// function calculateBirthYear() {
//     // Get the user's age
//     const userAge = parseInt(document.getElementById("userAge").value);

//     // Calculate the birth year
//     const currentYear = new Date().getFullYear();
//     const birthYear = currentYear - userAge;

//     // Display the birth year in the browser
//     document.getElementById("birthYear").textContent = birthYear;
// }
q14
// function generateBill() {
//     // Get input values from the form
//     const customerName = document.getElementById("customerName").value;
//     const currentMonth = document.getElementById("currentMonth").value;
//     const numberOfUnits = parseFloat(document.getElementById("numberOfUnits").value);
//     const chargesPerUnit = parseFloat(document.getElementById("chargesPerUnit").value);

//     // Calculate the net amount payable within due date
//     const netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);

//     // Calculate late payment surcharge (assumed as 5% of net amount)
//     const latePaymentSurcharge = (netAmount * 0.05).toFixed(2);

//     // Calculate gross amount payable after due date
//     const grossAmount = (parseFloat(netAmount) + parseFloat(latePaymentSurcharge)).toFixed(2);

//     // Display the calculated values in the browser
//     document.getElementById("netAmount").textContent = netAmount;
//     document.getElementById("latePaymentSurcharge").textContent = latePaymentSurcharge;
//     document.getElementById("grossAmount").textContent = grossAmount;
// }