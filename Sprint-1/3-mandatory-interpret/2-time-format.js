const movieLength = 8784; // length of movie in seconds

// Calculate remaining seconds after converting to minutes
const remainingSeconds = movieLength % 60;

// Total minutes (integer division)
const totalMinutes = (movieLength - remainingSeconds) / 60;

// Calculate remaining minutes after converting to hours
const remainingMinutes = totalMinutes % 60;

// Total hours (integer division)
const totalHours = (totalMinutes - remainingMinutes) / 60;

// Format the result as "hours:minutes:seconds"
const movieDuration = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

console.log(movieDuration);

//6 variable declaration and 1 function call done
