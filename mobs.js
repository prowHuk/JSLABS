var per = [1, -1, 2, -2, 3];
var positiveArr = per.filter(function(number) {
  return number > 0;
});
alert( positiveArr );
//������ map//
var names = ['a', 's', 'd'];
var nameLengths = names.map(function(name) {
  return name.length;
});
alert( nameLengths );
//������ join//
  var a = ["�����","����","�����"];
  var myVar1 = a.join();
  var myVar2 = a.join(", ");  
  var myVar3 = a.join(" + "); 
alert(a);
//������ reverse//
res = [1,2,3]
a = res.reverse() 
for(var i=0; i<a.length; i++) {
  alert(a[i]) 
}
//������ Sort//
var recrut = [ 1, 2, 15 ];
recrut.sort();
alert( recrut );
//������ concat//
var str1 = "Hello ";
var str2 = "My!";
var str3 = "Friends";
var res = str1.concat(str2,str3); 
alert( res);
//������ splice//
var cobula = ["������", "�����", "����", "�����"];
cobula.splice(0, 3, "�����", "�������")
alert( cobula )
//������ clice//
var arr = ["������", "���������", "������", "!"];
alert( arr.slice(1) );
//������ forEach//
var flib = ["������", "��������", "�����"];
flib.forEach(function(item, i, arr) { 
  alert( i + ": " + item + " (������:" + flib + ")" );
});
///////////////////////////////////////////////////////
