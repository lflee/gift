
var clickCount = 0;

var color = [];
color[0] = {colorHex:'#F0F8FF', colorName:'AliceBlue'};
color[1] = {colorHex:'#FAEBD7', colorName:'AntiqueWhite'};
color[2] = {colorHex:'#00FFFF', colorName:'Aqua'};
color[3] = {colorHex:'#7FFFD4', colorName:'Aquamarine'};
color[4] = {colorHex:'#F0FFFF', colorName:'Azure'};
color[5] = {colorHex:'#F5F5DC', colorName:'Beige'};
color[6] = {colorHex:'#FFE4C4', colorName:'Bisque'};
color[7] = {colorHex:'#000000', colorName:'Black'};
color[8] = {colorHex:'#FFEBCD', colorName:'BlanchedAlmond'};
color[9] = {colorHex:'#0000FF', colorName:'Blue'};
color[10] = {colorHex:'#8A2BE2', colorName:'BlueViolet'};
color[11] = {colorHex:'#A52A2A', colorName:'Brown'};
color[12] = {colorHex:'#DEB887', colorName:'BurlyWood'};
color[13] = {colorHex:'#5F9EA0', colorName:'CadetBlue'};
color[14] = {colorHex:'#7FFF00', colorName:'Chartreuse'};
color[15] = {colorHex:'#D2691E', colorName:'Chocolate'};
color[16] = {colorHex:'#FF7F50', colorName:'Coral'};
color[17] = {colorHex:'#6495ED', colorName:'CornflowerBlue'};
color[18] = {colorHex:'#FFF8DC', colorName:'Cornsilk'};
color[19] = {colorHex:'#DC143C', colorName:'Crimson'};
color[20] = {colorHex:'#00FFFF', colorName:'Cyan'};
color[21] = {colorHex:'#00008B', colorName:'DarkBlue'};
color[22] = {colorHex:'#008B8B', colorName:'DarkCyan'};
color[23] = {colorHex:'#B8860B', colorName:'DarkGoldenRod'};
color[24] = {colorHex:'#A9A9A9', colorName:'DarkGray'};
color[25] = {colorHex:'#006400', colorName:'DarkGreen'};
color[26] = {colorHex:'#BDB76B', colorName:'DarkKhaki'};
color[27] = {colorHex:'#8B008B', colorName:'DarkMagenta'};
color[28] = {colorHex:'#556B2F', colorName:'DarkOliveGreen'};
color[29] = {colorHex:'#FF8C00', colorName:'DarkOrange'};
color[30] = {colorHex:'#9932CC', colorName:'DarkOrchid'};
color[31] = {colorHex:'#8B0000', colorName:'DarkRed'};
color[32] = {colorHex:'#E9967A', colorName:'DarkSalmon'};
color[33] = {colorHex:'#8FBC8F', colorName:'DarkSeaGreen'};
color[34] = {colorHex:'#483D8B', colorName:'DarkSlateBlue'};
color[35] = {colorHex:'#2F4F4F', colorName:'DarkSlateGray'};
color[36] = {colorHex:'#00CED1', colorName:'DarkTurquoise'};
color[37] = {colorHex:'#9400D3', colorName:'DarkViolet'};
color[38] = {colorHex:'#FF1493', colorName:'DeepPink'};
color[39] = {colorHex:'#00BFFF', colorName:'DeepSkyBlue'};
color[40] = {colorHex:'#696969', colorName:'DimGray'};
color[41] = {colorHex:'#1E90FF', colorName:'DodgerBlue'};
color[42] = {colorHex:'#B22222', colorName:'FireBrick'};
color[43] = {colorHex:'#FFFAF0', colorName:'FloralWhite'};
color[44] = {colorHex:'#228B22', colorName:'ForestGreen'};
color[45] = {colorHex:'#FF00FF', colorName:'Fuchsia'};
color[46] = {colorHex:'#DCDCDC', colorName:'Gainsboro'};
color[47] = {colorHex:'#F8F8FF', colorName:'GhostWhite'};
color[48] = {colorHex:'#FFD700', colorName:'Gold'};
color[49] = {colorHex:'#DAA520', colorName:'GoldenRod'};
color[50] = {colorHex:'#808080', colorName:'Gray'};
color[51] = {colorHex:'#008000', colorName:'Green'};
color[52] = {colorHex:'#ADFF2F', colorName:'GreenYellow'};
color[53] = {colorHex:'#F0FFF0', colorName:'HoneyDew'};
color[54] = {colorHex:'#FF69B4', colorName:'HotPink'};
color[55] = {colorHex:'#CD5C5C', colorName:'IndianRed'};
color[56] = {colorHex:'#4B0082', colorName:'Indigo'};
color[57] = {colorHex:'#FFFFF0', colorName:'Ivory'};
color[58] = {colorHex:'#F0E68C', colorName:'Khaki'};
color[59] = {colorHex:'#E6E6FA', colorName:'Lavender'};
color[60] = {colorHex:'#FFF0F5', colorName:'LavenderBlush'};
color[61] = {colorHex:'#7CFC00', colorName:'LawnGreen'};
color[62] = {colorHex:'#FFFACD', colorName:'LemonChiffon'};
color[63] = {colorHex:'#ADD8E6', colorName:'LightBlue'};
color[64] = {colorHex:'#F08080', colorName:'LightCoral'};
color[65] = {colorHex:'#E0FFFF', colorName:'LightCyan'};
color[66] = {colorHex:'#FAFAD2', colorName:'LightGoldenRodYellow'};
color[67] = {colorHex:'#D3D3D3', colorName:'LightGray'};
color[68] = {colorHex:'#90EE90', colorName:'LightGreen'};
color[69] = {colorHex:'#FFB6C1', colorName:'LightPink'};
color[70] = {colorHex:'#FFA07A', colorName:'LightSalmon'};
color[71] = {colorHex:'#20B2AA', colorName:'LightSeaGreen'};
color[72] = {colorHex:'#87CEFA', colorName:'LightSkyBlue'};
color[73] = {colorHex:'#778899', colorName:'LightSlateGray'};
color[74] = {colorHex:'#B0C4DE', colorName:'LightSteelBlue'};
color[75] = {colorHex:'#FFFFE0', colorName:'LightYellow'};
color[76] = {colorHex:'#00FF00', colorName:'Lime'};
color[77] = {colorHex:'#32CD32', colorName:'LimeGreen'};
color[78] = {colorHex:'#FAF0E6', colorName:'Linen'};
color[79] = {colorHex:'#FF00FF', colorName:'Magenta'};
color[80] = {colorHex:'#800000', colorName:'Maroon'};
color[81] = {colorHex:'#66CDAA', colorName:'MediumAquaMarine'};
color[82] = {colorHex:'#0000CD', colorName:'MediumBlue'};
color[83] = {colorHex:'#BA55D3', colorName:'MediumOrchid'};
color[84] = {colorHex:'#9370DB', colorName:'MediumPurple'};
color[85] = {colorHex:'#3CB371', colorName:'MediumSeaGreen'};
color[86] = {colorHex:'#7B68EE', colorName:'MediumSlateBlue'};
color[87] = {colorHex:'#00FA9A', colorName:'MediumSpringGreen'};
color[88] = {colorHex:'#48D1CC', colorName:'MediumTurquoise'};
color[89] = {colorHex:'#C71585', colorName:'MediumVioletRed'};
color[90] = {colorHex:'#191970', colorName:'MidnightBlue'};
color[91] = {colorHex:'#F5FFFA', colorName:'MintCream'};
color[92] = {colorHex:'#FFE4E1', colorName:'MistyRose'};
color[93] = {colorHex:'#FFE4B5', colorName:'Moccasin'};
color[94] = {colorHex:'#FFDEAD', colorName:'NavajoWhite'};
color[95] = {colorHex:'#000080', colorName:'Navy'};
color[96] = {colorHex:'#FDF5E6', colorName:'OldLace'};
color[97] = {colorHex:'#808000', colorName:'Olive'};
color[98] = {colorHex:'#6B8E23', colorName:'OliveDrab'};
color[99] = {colorHex:'#FFA500', colorName:'Orange'};
color[100] = {colorHex:'#FF4500', colorName:'OrangeRed'};
color[101] = {colorHex:'#DA70D6', colorName:'Orchid'};
color[102] = {colorHex:'#EEE8AA', colorName:'PaleGoldenRod'};
color[103] = {colorHex:'#98FB98', colorName:'PaleGreen'};
color[104] = {colorHex:'#AFEEEE', colorName:'PaleTurquoise'};
color[105] = {colorHex:'#DB7093', colorName:'PaleVioletRed'};
color[106] = {colorHex:'#FFEFD5', colorName:'PapayaWhip'};
color[107] = {colorHex:'#FFDAB9', colorName:'PeachPuff'};
color[108] = {colorHex:'#CD853F', colorName:'Peru'};
color[109] = {colorHex:'#FFC0CB', colorName:'Pink'};
color[110] = {colorHex:'#DDA0DD', colorName:'Plum'};
color[111] = {colorHex:'#B0E0E6', colorName:'PowderBlue'};
color[112] = {colorHex:'#800080', colorName:'Purple'};
color[113] = {colorHex:'#663399', colorName:'RebeccaPurple'};
color[114] = {colorHex:'#FF0000', colorName:'Red'};
color[115] = {colorHex:'#BC8F8F', colorName:'RosyBrown'};
color[116] = {colorHex:'#4169E1', colorName:'RoyalBlue'};
color[117] = {colorHex:'#8B4513', colorName:'SaddleBrown'};
color[118] = {colorHex:'#FA8072', colorName:'Salmon'};
color[119] = {colorHex:'#F4A460', colorName:'SandyBrown'};
color[120] = {colorHex:'#2E8B57', colorName:'SeaGreen'};
color[121] = {colorHex:'#FFF5EE', colorName:'SeaShell'};
color[122] = {colorHex:'#A0522D', colorName:'Sienna'};
color[123] = {colorHex:'#C0C0C0', colorName:'Silver'};
color[124] = {colorHex:'#87CEEB', colorName:'SkyBlue'};
color[125] = {colorHex:'#6A5ACD', colorName:'SlateBlue'};
color[126] = {colorHex:'#708090', colorName:'SlateGray'};
color[127] = {colorHex:'#FFFAFA', colorName:'Snow'};
color[128] = {colorHex:'#00FF7F', colorName:'SpringGreen'};
color[129] = {colorHex:'#4682B4', colorName:'SteelBlue'};
color[130] = {colorHex:'#D2B48C', colorName:'Tan'};
color[131] = {colorHex:'#008080', colorName:'Teal'};
color[132] = {colorHex:'#D8BFD8', colorName:'Thistle'};
color[133] = {colorHex:'#FF6347', colorName:'Tomato'};
color[134] = {colorHex:'#40E0D0', colorName:'Turquoise'};
color[135] = {colorHex:'#EE82EE', colorName:'Violet'};
color[136] = {colorHex:'#F5DEB3', colorName:'Wheat'};
color[137] = {colorHex:'#FFFFFF', colorName:'White'};
color[138] = {colorHex:'#F5F5F5', colorName:'WhiteSmoke'};
color[139] = {colorHex:'#FFFF00', colorName:'Yellow'};
color[140] = {colorHex:'#9ACD32', colorName:'YellowGreen'};

var animal = [];
animal[0] = {unicode:'&#x1F400;', animalName:'RAT'};
animal[1] = {unicode:'&#x1F401;', animalName:'MOUSE'};
animal[2] = {unicode:'&#x1F402;', animalName:'OX'};
animal[3] = {unicode:'&#x1F403;', animalName:'WATER BUFFALO'};
animal[4] = {unicode:'&#x1F404;', animalName:'COW'};
animal[5] = {unicode:'&#x1F405;', animalName:'TIGER'};
animal[6] = {unicode:'&#x1F406;', animalName:'LEOPARD'};
animal[7] = {unicode:'&#x1F407;', animalName:'RABBIT'};
animal[8] = {unicode:'&#x1F408;', animalName:'CAT'};
animal[9] = {unicode:'&#x1F409;', animalName:'DRAGON'};
animal[10] = {unicode:'&#x1F40A;', animalName:'CROCODILE'};
animal[11] = {unicode:'&#x1F40B;', animalName:'WHALE'};
animal[12] = {unicode:'&#x1F40C;', animalName:'SNAIL'};
animal[13] = {unicode:'&#x1F40D;', animalName:'SNAKE'};
animal[14] = {unicode:'&#x1F40E;', animalName:'HORSE'};
animal[15] = {unicode:'&#x1F40F;', animalName:'RAM'};
animal[16] = {unicode:'&#x1F410;', animalName:'GOAT'};
animal[17] = {unicode:'&#x1F411;', animalName:'SHEEP'};
animal[18] = {unicode:'&#x1F412;', animalName:'MONKEY'};
animal[19] = {unicode:'&#x1F413;', animalName:'ROOSTER'};
animal[20] = {unicode:'&#x1F414;', animalName:'CHICKEN'};
animal[21] = {unicode:'&#x1F415;', animalName:'DOG'};
animal[22] = {unicode:'&#x1F416;', animalName:'PIG'};
animal[23] = {unicode:'&#x1F417;', animalName:'BOAR'};
animal[24] = {unicode:'&#x1F418;', animalName:'ELEPHANT'};
animal[25] = {unicode:'&#x1F419;', animalName:'OCTOPUS'};
animal[26] = {unicode:'&#x1F41A;', animalName:'SPIRAL SHELL'};
animal[27] = {unicode:'&#x1F41B;', animalName:'BUG'};
animal[28] = {unicode:'&#x1F41C;', animalName:'ANT'};
animal[29] = {unicode:'&#x1F41D;', animalName:'HONEYBEE'};
animal[30] = {unicode:'&#x1F41E;', animalName:'LADY BEETLE'};
animal[31] = {unicode:'&#x1F41F;', animalName:'FISH'};
animal[32] = {unicode:'&#x1F420;', animalName:'TROPICAL FISH'};
animal[33] = {unicode:'&#x1F421;', animalName:'BLOWFISH'};
animal[34] = {unicode:'&#x1F422;', animalName:'TURTLE'};
animal[35] = {unicode:'&#x1F423;', animalName:'HATCHING CHICK'};
animal[36] = {unicode:'&#x1F424;', animalName:'BABY CHICK'};
animal[37] = {unicode:'&#x1F425;', animalName:'FRONT-FACING BABY CHICK'};
animal[38] = {unicode:'&#x1F426;', animalName:'BIRD'};
animal[39] = {unicode:'&#x1F427;', animalName:'PENGUIN'};
animal[40] = {unicode:'&#x1F428;', animalName:'KOALA'};
animal[41] = {unicode:'&#x1F429;', animalName:'POODLE'};
animal[42] = {unicode:'&#x1F42A;', animalName:'DROMEDARY CAMEL'};
animal[43] = {unicode:'&#x1F42B;', animalName:'BACTRIAN CAMEL'};
animal[44] = {unicode:'&#x1F42C;', animalName:'DOLPHIN'};
animal[45] = {unicode:'&#x1F42D;', animalName:'MOUSE FACE'};
animal[46] = {unicode:'&#x1F42E;', animalName:'COW FACE'};
animal[47] = {unicode:'&#x1F42F;', animalName:'TIGER FACE'};
animal[48] = {unicode:'&#x1F430;', animalName:'RABBIT FACE'};
animal[49] = {unicode:'&#x1F431;', animalName:'CAT FACE'};
animal[50] = {unicode:'&#x1F432;', animalName:'DRAGON FACE'};
animal[51] = {unicode:'&#x1F433;', animalName:'SPOUTING WHALE'};
animal[52] = {unicode:'&#x1F434;', animalName:'HORSE FACE'};
animal[53] = {unicode:'&#x1F435;', animalName:'MONKEY FACE'};
animal[54] = {unicode:'&#x1F436;', animalName:'DOG FACE'};
animal[55] = {unicode:'&#x1F437;', animalName:'PIG FACE'};
animal[56] = {unicode:'&#x1F438;', animalName:'FROG FACE'};
animal[57] = {unicode:'&#x1F439;', animalName:'HAMSTER FACE'};
animal[58] = {unicode:'&#x1F43A;', animalName:'WOLF FACE'};
animal[59] = {unicode:'&#x1F43B;', animalName:'BEAR FACE'};
animal[60] = {unicode:'&#x1F43C;', animalName:'PANDA FACE'};
animal[61] = {unicode:'&#x1F43D;', animalName:'PIG NOSE'};
animal[62] = {unicode:'&#x1F43E;', animalName:'PAW PRINTS'};
animal[63] = {unicode:'&#x1F43F;', animalName:'CHIPMUNK'};

var ranAnimal;
var ranNamedColor;

function appSelector(){
	clickCount += 1 ;
if(clickCount < 1)
	{
		document.getElementById("top-banner").style.fontSize  = "250%" ;
		document.getElementById("top-banner").innerHTML = "&#x1f4d6;<br>一齊嚟學動物、顏色、英文！" ;
		changeTextColor(); 
	}else
	{
		document.getElementById("top-banner").style.display = "none" ; 
		changeTextColor();
		showAnimals();
	}
}
	


function changeTextColor(){
//	 console.log("Inside changeTextColor(). You have clicked " + clickCount + " times.") ;
	 document.getElementById("top-banner").style.color =  color[Math.floor(Math.random() * 140)]["colorHex"] ;
}

function showAnimals(){

console.log("Inside showAnimals(). You have clicked " + clickCount + "times.") ;
	ranNamedColor = color[Math.floor(Math.random() * 140)] ;
	ranAnimal     = animal[Math.floor(Math.random() * 63)] ;

	document.getElementById("animal").style.color = ranNamedColor["colorHex"];
	document.getElementById("animal").innerHTML =  ranAnimal["unicode"] + "<br>" + ranAnimal["animalName"] ;



	document.getElementById("imageSearch").style.visibility = "visible";
	document.getElementById("imageSearch").innerHTML = "睇更多 " + ranAnimal["animalName"] + " 嘅圖片" ;

	document.getElementById("objectChineseTranslate").style.visibility = "visible";
	document.getElementById("objectChineseTranslate").innerHTML = ranAnimal["animalName"] + " 嘅中文" ;

	document.getElementById("colorChineseTranslate").style.visibility = "visible";
	document.getElementById("colorChineseTranslate").style.backgroundColor = ranNamedColor["colorHex"] ;
	document.getElementById("colorChineseTranslate").innerHTML = ranNamedColor["colorName"] + " 依隻顏色嘅中文" ;
}


function imageSearch(){
	url = "https://www.google.com/search?q=" + ranAnimal["animalName"] + "&newwindow=1&hl=en&biw=1280&bih=658&site=webhp&source=lnms&tbm=isch&sa=X&qscrl=1" ;
  var win = window.open(url, '_blank');
  win.focus();
}


function objectChineseTranslate(){
	url = "https://translate.google.com/#en/zh-TW/" + ranAnimal["animalName"].toLowerCase() ;
  var win = window.open(url, '_blank');
  win.focus();
}


function colorChineseTranslate(){
	url = "https://translate.google.com/#en/zh-TW/" + ranNamedColor["colorName"].toLowerCase() ;
  var win = window.open(url, '_blank');
  win.focus();
}