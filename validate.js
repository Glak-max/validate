function validate(data, rules) {

  var data = {
  name: 'Dean',
  age: 25,
  mail: 'qwerty@mail.ru',  
    };
var rules = {
  name: { required: true, minLength: 1, maxLength: 3, isString: true},
  age: { min: 16, max: 40, isNumber: true},
  mail: { isEmail: true,}
}
  validate(data, rules);// { result: true, errors: [] }
  data.age = 7;
validate(data, rules);// { result: false, errors: [{field: 'age', value: 25, error: 'max'}] }
  data.mail = qwerty;
validate(data, rules);// { result: false, errors: [{field: 'mail', value: qwerty, error: 'isEmail'}] }
  data.name = 1;
validate(data, rules);// { result: false, errors: [{field: 'name', value: 1, error: 'isString'}] }


}

module.exports = validate;