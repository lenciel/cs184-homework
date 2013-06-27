#!/usr/bin/env node

function flushToFile(out_file, out_str) {
    var fs = require('fs');
    fs.writeFileSync(out_file, out_str+'\n');
}

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

function getPrimeList(max) {
    var primes = [];
    var num = 2;
    while (primes.length < max) {
        if(isPrime(num)) {
            primes.push(num);
            console.log('prime number ' + num + ' founded.');
        }
        ++num;
    }
    return primes;
}

var first_100_primes = getPrimeList(100);
flushToFile('prime.txt', first_100_primes.join(","));
