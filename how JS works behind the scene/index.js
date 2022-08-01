"use strict";
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //creating new variable with the same name as outer scope's variable
      //   const firstName = "John"; this will be the name given and not nate as javascript will first look for the variable name in the block and once it is found it will stop looking hence makes the scope chain loose its value

      // reassigning outer scope's variable
      output = "NEW OUTPUT";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); this will not work because str is not defined outside the block as const and let are block scoped and they will only work inside the block they were created in
    console.log(millenial); // this one works as the var variable is function scoped hence it will ignore the block and work as long as it is inside the function it was defined in
    //add(2, 3); this wont work as the function is not defined outside the block it was created in, functions are block based hence only work when inside the block they were created in but this is only true for strict mode
    console.log(output); // NEW OUTPUT will be dsplayed as what happedn was that an existing variable was manipulated, the variable was accessed from the parent scope and the value was changed in the child scope
  }
  printAge();

  return age;
}
const firstName = "Nate";
calcAge(1995);
