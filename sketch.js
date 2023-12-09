
let farm

let catIdle
let catRun
let catJump
let cat
let cat2


let gameState = 1;

let floorY = 460

let ground

/*
0 : default 
1 : market
2 : shop 
3 : study 

*/


const TILESIZE = 16

let level1 = [
[888,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,889,890],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,5329,5329,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,5329,5329,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,5329,5329,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,5329,5329,5329,5329,593,593,593,593,593,593,593,593,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,5329,5329,5329,5329,593,593,593,593,593,593,593,593,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,5329,5329,5329,5329,593,593,593,593,593,593,593,593,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,5329,5329,5329,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,5329,5329,5329,5329,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,5329,5329,5329,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,5329,5329,5329,5329,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,5329,5329,5329,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,5329,5329,5329,5329,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,593,1037,1037,1038],
[1036,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1037,1038],
[1184,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1185,1186]

]


let level2 = [
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,9236,9237,9238,9239,9240,9241,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,9384,9385,9386,9387,9388,9389,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,9532,9533,9534,9535,9536,9537,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3855,3855,3855,3855,3855,3855,3855,3855,3855,3855,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,9680,9681,9682,9683,9684,9685,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3855,-1,-1,-1,351,352,4152,4152,4152,3855,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,9828,9829,9830,9831,9832,9833,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3855,-1,-1,498,499,500,501,4154,4154,3855,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3855,4153,4150,646,647,648,649,-1,-1,3855,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3855,4150,4150,794,795,796,797,-1,-1,3855,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3855,-1,-1,942,943,944,945,-1,-1,3855,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3855,-1,-1,-1,-1,-1,-1,-1,-1,3855,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3855,3855,3855,-1,-1,-1,-1,3855,3855,3855,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,4296,4297,4297,4297,4297,4297,4297,4297,4298,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,4444,1337,1337,1337,1337,1337,1337,1337,4446,-1,-1,-1,-1,-1,-1,-1,-1,-1,4741,4740,4740,4740,4740,4740,4740,4740,4741,4741,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,4444,1337,1337,1337,1337,1337,1337,1337,4446,-1,-1,-1,-1,-1,-1,-1,-1,-1,4888,-1,-1,5679,5680,5681,5682,5683,-1,4890,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,4444,1337,1337,1337,1337,1337,1337,1337,4446,-1,-1,-1,-1,-1,-1,-1,-1,-1,4888,-1,5826,5827,5828,5829,5830,5831,-1,4890,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,4444,1337,1337,1337,1337,1337,1337,1337,4446,-1,-1,-1,-1,-1,-1,-1,-1,-1,4888,-1,-1,5975,5976,5977,5978,5979,-1,4890,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,4444,1337,1337,1337,1337,1337,1337,1337,4446,-1,-1,-1,-1,-1,-1,-1,-1,-1,4888,-1,6122,6123,6124,6125,6126,6127,-1,4890,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,4444,1337,1337,1337,1337,1337,1337,1337,4446,-1,-1,-1,-1,-1,-1,-1,-1,-1,4888,-1,6270,6271,6272,6273,6274,6275,-1,4890,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,4444,1337,1337,1337,1337,1337,1337,1337,4446,-1,-1,-1,-1,-1,-1,-1,-1,-1,4888,-1,-1,-1,-1,-1,-1,-1,-1,4890,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,4592,4593,4593,-1,-1,-1,4593,4593,4594,-1,-1,-1,-1,-1,-1,-1,-1,-1,5039,5039,5039,-1,-1,-1,-1,5039,5039,5039,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]

]

let level_study = [
[1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,2083,2083,2083,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,2083,2083,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,2083,1936,1936,1936,1936,1936,1936,2083,2083,2083,2083,2083,2083,2083,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,1936,1936,1936,2083,2083,2083,1936,2083,2083,2083,2083,2083,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,1936,1936,1936,2083,2083,2083,1936,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,1936,1936,1936,2083,2083,2083,1936,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[2083,1936,1936,1936,1936,1936,2083,1936,1936,2083,2083,2083,2083,1936,1936,1936,1936,1936,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[2083,1936,1936,1936,1936,1936,2083,1936,1936,1936,2083,2083,1936,1936,1936,1936,2083,1936,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,2083,1936,1936,1950,1950,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[2083,1936,1936,1936,1936,1936,2083,1936,1936,1936,1936,1936,1936,2083,1936,1936,1936,1936,1790,1791,1791,1791,1791,1791,1791,1791,1791,1791,1791,1791,1791,1791,1791,1792,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1938,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1940,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[2083,1936,1936,1936,1936,1936,2083,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1938,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1926,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[2083,2083,1936,1936,1936,1936,1936,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1938,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1926,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1938,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1926,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044,1044],
[1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1938,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1926,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193,1193],
[2083,2083,1936,1936,1936,2083,2083,1936,1950,1936,1936,1936,1936,1936,1936,1936,1936,1936,1938,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1926,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[2083,2083,1936,1936,1936,2083,2083,1936,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1938,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1926,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,2083,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1938,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1926,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,2083,2083,1936,1936,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1938,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1926,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,1936,1936,1936,2083,1936,1936,1936,1936,1936,1936,1936,1936,1938,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1939,1926,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,2086,2087,2087,2087,2087,2087,2087,2087,2087,2087,2087,2087,2087,2087,2087,2074,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,1936,1936,1936,1936,1936,2083,1936,1936,2083,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],
[1936,1936,1936,2083,2083,1936,1936,1936,2083,2083,2083,2083,2083,2083,2083,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936,1936],

]

// 1044  1193 1938 1939 1926
// 


function preload(){

    farm = loadImage("/imgs/full version/global.png") 
    catIdle = loadImage("/imgs/catset_assets/catset_gifs/cat05_gifs/cat05_idle_blink_8fps.gif")
    catRun = loadImage("imgs/catset_assets/catset_gifs/cat05_gifs/cat05_run_12fps.gif")
    catJump = loadImage("imgs/catset_assets/catset_gifs/cat05_gifs/cat05_jump_12fps.gif")
    
}


function setup(){

    createCanvas(800,480)
    
    cat = new Cat(320, 200,50,50)
    cat2 = new Cat(0,210,50,50)
    noStroke()
   

}

function draw(){
    background(128)
    if(gameState === 0){
        drawLevel(level1)
        drawLevel(level2)
        fill("white")
        ellipseMode(CENTER)
        //ellipse(cat.x + 25,cat.y + 30,30,30)
        cat.display()
        cat.move() 
        

        let room = transition(cat.middleX + 15, cat.sensorTop + 15, level2)
        if( room === "studyRoom" ){
            gameState = 1
        }


    }

    if(gameState === 1){
        drawLevel(level_study)
        
       
        cat2.display()
        cat2.move2()
        let isInFocusArea = cat2.isInStudyArea()
        
    
        

    }

    
}

function drawLevel(level){
    for(let x = 0; x < level.length; x ++ ){
        for (let y = 0; y < level[0].length; y++){
            drawTile(level[x][y], y * TILESIZE, x * TILESIZE )
        }
    }

}

function drawTile(tileID,screenX,screenY){
    let tilesPerRow = farm.width / TILESIZE
    let left = int(tileID % tilesPerRow) * TILESIZE
    let top = int(tileID / tilesPerRow) * TILESIZE

    image(farm,screenX,screenY,TILESIZE,TILESIZE,left,top,TILESIZE,TILESIZE)

}


//detecting collison
/* game state 0 */
function isEdge(id){
    
    if(id === 1036 || id  === 1185 || id === 1038 || id === 889){
        return true
    }
    return false
}

function isMarket(id){
    if(id === 9236 || id === 9237 || id === 9238 || id === 9239 
        || id === 9240 || id === 9241 || id === 9389 || id === 9537 
        || id === 9685 || id === 9833 ||id === 9832 || id === 9831
        || id === 9830 || id === 9829 || id === 9828 || id === 9680
        || id === 9532 || id === 9384 || id === 9236 ){
        return true
    }
    return false
}

function isStudyRoom(id){
    if(id === 3855 ){
        return true
    }
    return false
}

function isFarm(id){
    if(id === 4444 || id === 4297 || id === 4446 || id === 4593){
        return true
    }
    return false
}

function isAnimalShop(id){
    if(id === 4740 ||  id === 4890 || id === 4888 || id === 5039){
        return true
    }
    return false
}

function isStudyRoomDoor(id){
    if(id === 942 || id === 943 || id === 944 || id === 945){
        return true
    }
    return false
}

/* game state 3 Study */
function isWalkable(id){
    // 1044  1193 1938 1939 1926
    if( id === 1044 || id == 1193 || id == 1938 || id == 1939 || id == 1926 ){
        return true
    }
    return false
}

//study area
function isStudyArea(id){
    if(id === 1939){
        return true
    }
    return false

}




// given an x and y position, determine what tile is here
// do this by first converting x & y position into array positions
// then peek into the array at that position to identify the tile ID
function getTile(x,y,level) {
    x = int(x/TILESIZE);
    y = int(y/TILESIZE);
    console.log("tile at ", x, y, "is", level[y][x]);
    return level[y][x];
}

function transition(x,y,level){
    //let id2 = getTile(cat.middleX + 15, cat.sensorTop + 15, level2)
    let id2 = getTile(x,y,level)
    if(isStudyRoomDoor(id2)){
        return "studyRoom"
    }
    return "invalid"

}








