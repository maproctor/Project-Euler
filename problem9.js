
for (r=2;r<1000;r++) {
    let rSquaredOverTwo = (r*r)/2;
    for (s = 1, t = r*r/2; s <= t; s++,t=r*r/2/s) {
        if (rSquaredOverTwo%s==0) {  //if it's a factor

            //if it adds up to a thousand
            if (r+s + r+t + r+s+t == 1000) {console.log( (r+s)*(r+t)*(r+s+t) )
            }
        }
    }
}


console.log('test')
process.exit();