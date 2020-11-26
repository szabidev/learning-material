// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

const getCard = () => {
    const values = ['2','3','4','5','6','7','8','9','J','Q','K','A'];
    const idx = Math.floor(Math.random() * values.length);
    const value = values[idx];
    const suits = ['clubs','spades','hearts','diamonds'];
    const suitIdx = Math.floor(Math.random() * suits.length);
    const suit = suits[suitIdx];
    return {value : value, suit: suit}
}


// Other solution, using a function that will generate randomly from values and suits array
function pick(arr) {
	//return random element from arr
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

function getCard() {
	const values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	return { value: pick(values), suit: pick(suits) };
}