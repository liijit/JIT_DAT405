//The "let" scope is the preferable choice since it's more prone to error. In my past experiences I began using "var" scopes which become problematic with "undefined" errors.
//"let" has kept my scopes organised and I have found myself spending less time fixing these types of errors. 

//VARIBLES
//api account info
let userid;
let apiKey = "0d72f04d923d235a4adebea45fe18801";
let apiName = "Data Graph Visualiser";

//shapes
let squareSize;
//api values
//Last.FM limit the amount of artists you can list to 148
let limit = 148;
let country = "United Kingdom";

let imgArtists;
var imgArtistsArr;

function preload() {
    //The operations that are used further in the code require data prior to execute successfully.
    //It's necessary to use the preload function to avoid possible errors.
    //I've replaced parts of the URL with variable values that might be used multiple times, this keeps the code both clean and optimal.
    let topArtistsURL = "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=" + country + "&limit=" + limit + "&api_key=" + apiKey + "&format=json";
    //telling the browser to load a JSON file from the url above.
    //A timer has been set to avoid overloading the api server with requests. E.g. a user hitting the referesf
/*    setTimeout(function() {
        loadJSON(topArtistsURL);
    }, 5000);*/
    topArtists = loadJSON(topArtistsURL);

}

function onLoad() {
	srcArtists = loadImage(imgArtists);
}

function setup() {
    //console.log("Artist: " 
    //console.log(topArtists.topartists.artist["5"].name);
    //console.log(topArtists.topartists.artist["5"].image["4"]["#text"]);


	//Calculations that are relevent to the size of objects
    squareSize = 12;
    limit = squareSize * squareSize + 1;
    //canvas adjusts to height/width of the window
    canvas = createCanvas(windowWidth, windowHeight);
    //The scale variable manages squares according to the value of squares defined in "squareSize"
    scale = squareSize * 1;
    //Used to create squares in blocks of 4s.
    halfW = width / scale;
    halfH = height / scale;
}


function preloadImg(array) {
    if (!preloadImg.arr) {
        preloadiImg.arr = [];
    }
    let img = preloadImg.list;
}


function draw() {
	//features functions that are called to draw, this is to helpw ith organisation
    fetchData();
    incrementE();

    stroke(100);
    fill(30, 30, 30);
    drawSquare();

    noLoop();
}

function drawSquare() {
	//temporary place holder squares for the various images in the array
    for (let x = 0; x < squareSize; x++) {
        for (let y = 0; y < squareSize; y++) {
            rect(x * halfW, y * halfH, halfW, halfH);
        }
    }

}

function fetchData(imgArtistsArr) {
    for (let i = 0; i < limit - 1; i++) {
    	//Extracting the data needed to render the images into shapes for the background.
    	//Variables that hold specified json elements in this instance are only separated with ",". 
    	//This is due to how I want to collate the information. Depending on the amount of squares that are specified, it will determine how many elements to extract from the array.
    	//An array will need to be made so that each data has a relative identity to reference too. 
        imgArtists = (topArtists.topartists.artist[i].image["4"]["#text"]);
        //"concat" is used here to place the data back into a readable array so that the images can be loaded with "[]".
        imgArtistsArr = [i].concat(imgArtists);
        //console.log(i);
        //split = (imgArtists.split(","));
        //alert(imgArtists);
        //imgArtists[i] = loadImage()

         console.log(imgArtistsArr);
         return imgArtistsArr;
    }


}
 console.log(imgArtistsArr);
//counter increases each time "counter.incremE({})" is called, researching and testing purposes.
function incrementE(){
let counter = {
	length:0,

	incremE: function incremE(elem) {
		[].push.call(this,elem);
	}
};

counter.incremE({});
counter.incremE({});
counter.incremE({});
console.log(counter.length);
}