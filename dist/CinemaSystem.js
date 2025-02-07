"use strict";
// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.
var MovieGenre;
(function (MovieGenre) {
    MovieGenre[MovieGenre["Action"] = 0] = "Action";
    // add 4 more
    MovieGenre[MovieGenre["Drama"] = 1] = "Drama";
    MovieGenre[MovieGenre["Comic"] = 2] = "Comic";
    MovieGenre[MovieGenre["Horror"] = 3] = "Horror";
    MovieGenre[MovieGenre["Family"] = 4] = "Family";
    MovieGenre[MovieGenre["Animation"] = 5] = "Animation";
})(MovieGenre || (MovieGenre = {}));
var movies = [];
function addMovie(movieId, title, genre, availableSeats) {
    var release = {
        movieId: movieId,
        title: title,
        genre: genre,
        availableSeats: availableSeats
    };
    movies.push(release);
    return release;
}
function bookSeat(movieId, rowLetter, seatNumber) {
    var checkSeat = movies.filter(function (movie) { return movie.movieId === movieId; })[0];
    // checkSeat.availableSeats.push()
    var seatPostion = "";
    var seatIndex = 0;
    checkSeat.availableSeats.forEach(function (seats, index) {
        if (seats[0] === rowLetter) {
            if (seats[1] === seatNumber) {
                seatPostion = "".concat(seats[0]).concat(seats[1]);
                seatIndex = index;
            }
        }
    });
    checkSeat.availableSeats.splice(seatIndex, 1);
    return "Seat ".concat(seatPostion, " booked successfully");
}
function checkSeatAvailability(movieId, rowLetter, seatNumber) {
    var checkSeat = movies.filter(function (movie) { return movie.movieId === movieId; })[0];
    var isAvailable = false;
    checkSeat.availableSeats.forEach(function (seats) { return seats[0] === rowLetter ? seats[1] === seatNumber ? isAvailable = true : isAvailable = false : isAvailable = false; });
    return isAvailable;
}
// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [["A", 1], ["A", 2]])); // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(addMovie(2, "Moana", MovieGenre.Animation, [["A", 1], ["A", 2], ["C", 5], ["D", 2]]));
console.log(bookSeat(1, "A", 1)); // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)); // false
console.log(checkSeatAvailability(1, "A", 2)); // true
console.log(bookSeat(2, "C", 5)); // "Seat A1 booked successfully"
console.log(checkSeatAvailability(2, "D", 2)); // true
console.log(checkSeatAvailability(2, "D", 1)); // false
console.log(checkSeatAvailability(2, "C", 5)); // false
