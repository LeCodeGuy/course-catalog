/* todo:
    - Create a function named tutorWageCalculator
    - the function should accept 2 parameters
        -the first is a string for the timesheet
        -the second is for the level of the tutor
    - decalre a variable for the string to be split on "-" named hours
    - declare a variable for the totalHoursWorked and set it to 0
    - declare a variable for totalEarnings and set it to 0
    - use and if condition to check for invalid time sheets i.e. less than 5 records and more than 7 records.
    - add if condition to check if total hours exceeds 40 hours
    - use a for loop to loop through each item in the hours variable
    - add the value of the current item in the loop to the totalHoursWorked variable
        - NOTE: I will have to convert the value to an integer as the values in hours will be seen as string values
    - use if condition for each level
    - inside the relevant condition subtract the totalHoursWorked with 40 and then multiply the result with the hourly rate multiplies by the overtime rate for the level passed into the function
    
    - return the totalEarnings variable


 */ 

        // ? reference table
        /*
        | Level       |  Hourly rate  | Overtime rate(above 40 hours)|
        |:------------|:-------------:|-----------------------------:|
        | Level 1     | R75           | +7%                          |
        | Level 2     | R90           | +9%                          |
        | Level 3     | R105          | +12                          | 
        */

        function tutorOvertimeWageCalculator(timesheet,level){
            const hours = timesheet.split("-");
            let totalHoursWorked = 0;
            let totalEarnings = 0
            
            // does a check for valid time sheets
            if(hours.length >= 5 && hours.length <= 7){
                // loops through the hours in the time sheet and sums them
                for(let i = 0; i < hours.length; i++){
                    totalHoursWorked += Number(hours[i]);
                }
                console.log(totalHoursWorked)
                //checks the total hours worked is more than 40 hours
                if(totalHoursWorked > 40){
                    // checks the level passed and multiplies the hours worked with the relevant rate
                    if(level === 1){
                        totalEarnings = (totalHoursWorked-40) * (75 * 1.07);
                        console.log(totalEarnings);
                    }
                    else if(level === 2){
                        totalEarnings = (totalHoursWorked-40) * (90 * 1.09);
                    }
                    else if(level === 3){
                        totalEarnings = (totalHoursWorked-40) * (105 * 1.12);
                    }
                    
                    // returns the totalEarnings
                    return totalEarnings
                }
                
            }
            
            
        }