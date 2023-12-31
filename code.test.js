const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

dm = [[]];
console.log("Empty");
console.time("Held-Karp");
hk = tsp_hk(dm)
console.timeEnd("Held-Karp")
console.time("Local Search");
ls = tsp_ls(dm)
console.timeEnd("Local Search")

console.log("Held-Karp: "+hk+"\nLocal Search: "+ ls)
assert(hk <= ls);

dm = [[0]];
console.log("1");
console.time("Held-Karp");
hk = tsp_hk(dm)
console.timeEnd("Held-Karp")
console.time("Local Search");
ls = tsp_ls(dm)
console.timeEnd("Local Search")

console.log("Held-Karp: "+hk+"\nLocal Search: "+ ls)
assert(hk <= ls);

dm = [[0,2],
    [2,0]];
    console.log("2");
console.time("Held-Karp");
hk = tsp_hk(dm)
console.timeEnd("Held-Karp")
console.time("Local Search");
ls = tsp_ls(dm)
console.timeEnd("Local Search")

console.log("Held-Karp: "+hk+"\nLocal Search: "+ ls)
assert(hk <= ls);

dm = [[0,0,0],
      [0,0,0],
      [0,0,0]];
      console.log("3")
      console.time("Held-Karp");
      hk = tsp_hk(dm)
      console.timeEnd("Held-Karp")
      console.time("Local Search");
      ls = tsp_ls(dm)
      console.timeEnd("Local Search")
      
      console.log("Held-Karp: "+hk+"\nLocal Search: "+ ls)
      assert(hk <= ls);

dm = [[0,1,2],
      [1,0,2],
      [2,2,0]];
      console.log("3");
      console.time("Held-Karp");
      hk = tsp_hk(dm)
      console.timeEnd("Held-Karp")
      console.time("Local Search");
      ls = tsp_ls(dm)
      console.timeEnd("Local Search")
      
      console.log("Held-Karp: "+hk+"\nLocal Search: "+ ls)
      assert(hk <= ls);

dm = [[0,1,9,4],
      [1,0,4,4],
      [9,4,0,9],
      [4,4,9,0]];
      console.log("4");
      console.time("Held-Karp");
      hk = tsp_hk(dm)
      console.timeEnd("Held-Karp")
      console.time("Local Search");
      ls = tsp_ls(dm)
      console.timeEnd("Local Search")
      
      console.log("Held-Karp: "+hk+"\nLocal Search: "+ ls)
      assert(hk <= ls);

// https://people.sc.fsu.edu/~jburkardt/datasets/tsp/tsp.html
dm = [[0,3,4,2,7],
      [3,0,4,6,3],
      [4,4,0,5,8],
      [2,6,5,0,6],
      [7,3,8,6,0]];
      console.log("5");
      console.time("Held-Karp");
      hk = tsp_hk(dm)
      console.timeEnd("Held-Karp")
      console.time("Local Search");
      ls = tsp_ls(dm)
      console.timeEnd("Local Search")
      
      console.log("Held-Karp: "+hk+"\nLocal Search: "+ ls)
      assert(hk <= ls);

dm = [[0,3,4,8,7,1],
      [3,0,12,10,2,2],
      [4,12,0,1,12,4],
      [8,10,1,0,7,3],
      [7,2,12,7,0,12],
      [1,2,4,3,12,0]];
      console.log("6");
    console.time("Held-Karp");
    hk = tsp_hk(dm)
    console.timeEnd("Held-Karp")
    console.time("Local Search");
    ls = tsp_ls(dm)
    console.timeEnd("Local Search")
    
    console.log("Held-Karp: "+hk+"\nLocal Search: "+ ls)
    assert(hk <= ls);

dm = [[0,10,1,1,9,1,5],
      [10,0,1,9,12,5,8],
      [1,1,0,10,9,3,5],
      [1,9,10,0,9,6,10],
      [9,12,9,9,0,9,3],
      [1,5,3,6,9,0,10],
      [5,8,5,10,3,10,0]];
      console.log("7");
    console.time("Held-Karp");
      hk = tsp_hk(dm)
      console.timeEnd("Held-Karp")
      console.time("Local Search");
      ls = tsp_ls(dm)
      console.timeEnd("Local Search")
      
      console.log("Held-Karp: "+hk+"\nLocal Search: "+ ls)
      assert(hk <= ls);

dm = [[0,3,6,7,6,3,6,9],
[3,0,7,12,3,4,12,5],
[6,7,0,3,2,5,2,1],
[7,12,3,0,11,3,2,11],
[6,3,2,11,0,1,5,11],
[3,4,5,3,1,0,3,12],
[6,12,2,2,5,3,0,6],
[9,5,1,11,11,12,6,0]];
console.log("8");
    console.time("Held-Karp");
      hk = tsp_hk(dm)
      console.timeEnd("Held-Karp")
      console.time("Local Search");
      ls = tsp_ls(dm)
      console.timeEnd("Local Search")
      
      console.log("Held-Karp: "+hk+"\nLocal Search: "+ ls)
      assert(hk <= ls);

dm = [[0,12,6,3,2,6,6,9,2],
[12,0,11,10,4,9,8,12,9],
[6,11,0,9,2,6,2,9,12],
[3,10,9,0,11,6,5,4,11],
[2,4,2,11,0,10,10,11,4],
[6,9,6,6,10,0,9,11,5],
[6,8,2,5,10,9,0,9,8],
[9,12,9,4,11,11,9,0,7],
[2,9,12,11,4,5,8,7,0]];
console.log("9");
    console.time("Held-Karp");
      hk = tsp_hk(dm)
      console.timeEnd("Held-Karp")
      console.time("Local Search");
      ls = tsp_ls(dm)
      console.timeEnd("Local Search")
      
      console.log("Held-Karp: "+hk+"\nLocal Search: "+ ls)
      assert(hk <= ls);    

dm = [[0,12,12,9,3,4,5,3,6,3],
[12,0,11,12,4,9,1,12,11,11],
[12,11,0,2,9,7,3,3,2,1],
[9,12,2,0,11,2,9,3,7,4],
[3,4,9,11,0,7,4,6,9,11],
[4,9,7,2,7,0,9,10,8,4],
[5,1,3,9,4,9,0,4,11,3],
[3,12,3,3,6,10,4,0,1,5],
[6,11,2,7,9,8,11,1,0,3],
[3,11,1,4,11,4,3,5,3,0]];
console.log("10");
    console.time("Held-Karp");
      hk = tsp_hk(dm)
      console.timeEnd("Held-Karp")
      console.time("Local Search");
      ls = tsp_ls(dm)
      console.timeEnd("Local Search")
      
      console.log("Held-Karp: "+hk+"\nLocal Search: "+ ls)
      assert(hk <= ls);

dm = [[0,9,5,1,3,6,12,11,12,4,7],
    [9,0,5,1,10,12,11,12,8,5,8],
    [5,5,0,3,11,6,12,7,2,4,3],
    [1,1,3,0,2,11,4,4,10,1,11],
    [3,10,11,2,0,2,3,11,3,4,1],
    [6,12,6,11,2,0,10,11,7,10,3],
    [12,11,12,4,3,10,0,2,6,8,8],
    [11,12,7,4,11,11,2,0,9,6,12],
    [12,8,2,10,3,7,6,9,0,3,8],
    [4,5,4,1,4,10,8,6,3,0,2],
    [7,8,3,11,1,3,8,12,8,2,0]];
console.log("11");
    console.time("Held-Karp");
      hk = tsp_hk(dm)
      console.timeEnd("Held-Karp")
      console.time("Local Search");
      ls = tsp_ls(dm)
      console.timeEnd("Local Search")
      
      console.log("Held-Karp: "+hk+"\nLocal Search: "+ ls)
      assert(hk <= ls);


//Data:

/*

Run 1: 
Empty
Held-Karp: 0.128ms
Local Search: 0.245ms
Held-Karp: 0
Local Search: 0
1
Held-Karp: 0.005ms
Local Search: 0.013ms
Held-Karp: 0
Local Search: 0
2
Held-Karp: 0.251ms
Local Search: 0.143ms
Held-Karp: 2
Local Search: 2
3
Held-Karp: 0.426ms
Local Search: 0.169ms
Held-Karp: 0
Local Search: 0
3
Held-Karp: 0.311ms
Local Search: 0.117ms
Held-Karp: 3
Local Search: 3
4
Held-Karp: 1.108ms
Local Search: 0.088ms
Held-Karp: 9
Local Search: 9
5
Held-Karp: 10.412ms
Local Search: 0.09ms
Held-Karp: 13
Local Search: 13
6
Held-Karp: 51.186ms
Local Search: 0.13ms
Held-Karp: 13
Local Search: 15
7
Held-Karp: 330.458ms
Local Search: 0.165ms
Held-Karp: 20
Local Search: 21
8
Held-Karp: 3.015s
Local Search: 0.194ms
Held-Karp: 15
Local Search: 22
9
Held-Karp: 29.337s
Local Search: 0.199ms
Held-Karp: 30
Local Search: 44
10
Held-Karp: 5:02.784 (m:ss.mmm)
Local Search: 0.787ms
Held-Karp: 21
Local Search: 30
11

Held-Karp: 1:00:55.105 (h:mm:ss.mmm)
Local Search: 0.748ms
Held-Karp: 29
Local Search: 47
12

Run 2:

*/