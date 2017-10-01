// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

for (r=2;r<1000;r+=2) {  
    //use r to iterate via Dickson's Method for finding ALL Pythagorean Triplets
    let rSquaredOverTwo = r*r/2;
    for (s = 1, t = r*r/2; s <= t; s++,t=r*r/2/s) {  
        //for each r, define Dickson's s and t
        if (rSquaredOverTwo%s==0) {  
            //for every s, if s is a factor

            if (r+s + r+t + r+s+t == 1000) {
                //check to see if r s and t then add up to a thousand
            a=r+s;  
            b=r+t;
            c=r+s+t;
            //a human readable output, perhaps overly verbose
            console.log('Project Euler Problem 9 answer = '+a*b*c);
            console.log ('r,s,t = '+r+' '+s+' '+t);
            console.log ('a,b,c = '+a+' '+b+' '+c);
            }
        }
    }
}

process.exit(); //for node.js environment