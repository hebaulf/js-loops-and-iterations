const peopleArray = [
    {
      id: 1,
      name: "Lannie Schohier",
      birthdate: "2/13/1989",
      children: 3,
      country: "Norway",
      can_program: false
    },
    {
      id: 2,
      name: "Emilee Leon",
      birthdate: "5/27/1998",
      children: 2,
      country: "Philippines",
      can_program: true
    },
    {
      id: 3,
      name: "Carola Copper",
      birthdate: "9/26/1966",
      children: 3,
      country: "China",
      can_program: true
    },
    {
      id: 4,
      name: "Sim Gillino",
      birthdate: "11/19/1982",
      children: 0,
      country: "Indonesia",
      can_program: false
    },
    {
      id: 5,
      name: "Mordecai Skivington",
      birthdate: "8/15/1978",
      children: 5,
      country: "Myanmar",
      can_program: true
    },
    {
      id: 6,
      name: "Emalee Guillou",
      birthdate: "8/10/2004",
      children: 5,
      country: "Sweden",
      can_program: true
    },
    {
      id: 7,
      name: "Ambrosius Faust",
      birthdate: "1/1/1978",
      children: 3,
      country: "Nigeria",
      can_program: false
    },
    {
      id: 8,
      name: "Brana Fullman",
      birthdate: "10/30/1975",
      children: 3,
      country: "Ukraine",
      can_program: false
    },
    {
      id: 9,
      name: "Tanitansy Anthoine",
      birthdate: "3/4/1980",
      children: 3,
      country: "Bosnia and Herzegovina",
      can_program: false
    },
    {
      id: 10,
      name: "Gratiana Mollison",
      birthdate: "6/13/1994",
      children: 0,
      country: "French Polynesia",
      can_program: true
    }
  ]
  
  console.log(`----- NAME OF PEOPLE IN ARRAY AND HOW MANY CHILDREN THEY HAVE -----`);
  
  // Output for how many children all people have, in total 
  // (Ex.: Bia has 2 kids, Paul has 3, so the total 5)
  // Use for-of loop
  let sumOfKids = 0;
  for (const person of peopleArray) {
    // Get person name
    const name = person.name; 
  
    // Get how many children person has
    const children = person.children; 
  
    // Iterating number of children for each person in array
    sumOfKids += children; 
  
    // Log name and age of each person in array
    console.log(`${name} has ${children} kids.`);
  }
  // Log Total of kids for all people in array
  console.log(`So the total of all kids is ${sumOfKids}`)
  
  
  console.log(`                       `);
  console.log(`----- END OF LOOP -----`);
  console.log(`                       `);
  
  
  console.log(`----- NAME AND AGE OF PEOPLE IN ARRAY -----`);
  // Output one string per person formatted as such: <Name>: <Age>
  // Use traditional for loop
  let age = "";
  for (let i = 0; i < peopleArray.length; i++) {
    // get person name
    const name = peopleArray[i].name; 
    // Convert date to difference from birthdate to date now
    const monthDiff = Date.now() - new Date(peopleArray[i].birthdate).getTime();
  
    // Get age of person by calculating from Js 0 point date year(1970)
    const persAge = Math.abs((new Date(monthDiff).getUTCFullYear()) - 1970);  
  
    // Log <Name>: <Age>
    console.log(`${name}: ${persAge}`);
  }
  
  
  console.log(`                       `);
  console.log(`----- END OF LOOP -----`);
  console.log(`                       `);
  
  
  console.log(`----- ALL PROPERTIES OF ALL PEOPLE  -----`);
  // Output all properties of all people using for...in
  // Start by using while loop then use for-in loop to get properties
  let i = 0;
  while (i < peopleArray.length) {
    
    // Use for-in loop to get all objects in array
    for (let property in peopleArray[i]) {
      
      // Log all properties and names of objects in array
      console.log(`${property}: ${peopleArray[i][property]}`);  
    }
    i++;
    console.log(`-----------`);
  }
  
  console.log(`                       `);
  console.log(`----- END OF LOOP -----`);