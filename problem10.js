//Using the solution from problem 7: nth Prime

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function produceAnswer (cap) {
    var primes = [2];
    var sumOfPrimes = 0;
    //run a for loop until the array is filled to the cap
    for (var numberToFactor = 3; numberToFactor<cap ;)
        {   
         //(percentile != (primes[primes.length-1]/cap*100).toString().substring(0,3)) {
        //check for subfactors from the list, if they exist then increase numberToFactor
        for (var possibleFactorIndex=0; possibleFactorIndex <= primes.length-1; ) {
            //two break conditions, either we find it has a factor
            if (numberToFactor%primes[possibleFactorIndex]==0) { // divisible
                numberToFactor+=2;break}  
            //or we find we've exhausted the search list
            if (possibleFactorIndex==primes.length-1) { // not in list
                primes.push(numberToFactor);
                numberToFactor+=2;
                
            console.log((numberToFactor*100/cap).toString().substring(0,3)+' percent complete');
            	break
            }
            else possibleFactorIndex++
        }
        
    }
    for (i=0;i<primes.length;i++) {
        sumOfPrimes+=primes[i];
    }
    return sumOfPrimes
}
console.log('the sum of primes below that number is '+produceAnswer(2000000));
process.exit();