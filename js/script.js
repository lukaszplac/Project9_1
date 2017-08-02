function getTriangleArea(a, h) {
	if ((a > 0 ) && (h > 0)) {
	return a * h / 2;
	} else {
	return "Nieprawidlowe dane";
	}
}
var i = 1 ;
var triangleArea1 = getTriangleArea(10,6);
var triangleArea2 = getTriangleArea(10,0);
var triangleArea3 = getTriangleArea(0,6);
var triangleArea4 = getTriangleArea(-1,6);
var triangleArea5 = getTriangleArea(6,-1);
var triangleArea6 = getTriangleArea(-1,-1);
var triangleArea7 = getTriangleArea(4,6);
console.log((i++) + ": " + triangleArea1);
console.log((i++) + ": " + triangleArea2);
console.log((i++) + ": " + triangleArea3);
console.log((i++) + ": " + triangleArea4);
console.log((i++) + ": " + triangleArea5);
console.log((i++) + ": " + triangleArea6);
console.log((i++) + ": " + triangleArea7);

