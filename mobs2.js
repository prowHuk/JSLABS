// ������� //
var numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert( numbers[1] ); // 1


var animal = {
  eats: true
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

for (var key in rabbit) {
  alert( key + " = " + rabbit[key] ); 
}

var numbers = "[0, 1, 2, 3]";{

numbers = JSON.parse(numbers);

alert( numbers[1] );} // 1

var o =new Object();
o.toString()

o =new Object();
MyVar = o.valueOf();

var event = {
  title: "�����������",
  date: "�������"
};

var str = JSON.stringify(event);
alert( str );

// �������� ��������������
event = JSON.parse(str);

var d = new Date()
alert(d.toLocaleString())