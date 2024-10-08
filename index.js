const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    const words = tutorial.split(' ');

    const inCaps = words.map(word => {
      if (word === "API") return "API";
      if (word === "NaN") return "NaN";
      if (word === "JSONP") return "JSONP";
      if (word === "OO") return "OO";

      if (word.toLowerCase() === "stoppropagation") return "StopPropagation";
      if (word.toLowerCase() === "preventdefault") return "PreventDefault";

      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return inCaps.join(' ');
  });
}

console.log(titleCased());

