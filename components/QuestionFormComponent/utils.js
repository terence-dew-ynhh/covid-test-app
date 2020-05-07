function checkValue(str, max) {
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
    };
    return str;
  };

 export function blurFocus (e) {
    var input = e.target.value;
    var values = input.split('/').map(function(v, i) {
      return v.replace(/\D/g, '')
    });
   
    
    if (values.length == 3) {
      var year = values[2].length !== 4 ? parseInt(values[2]) + 2000 : parseInt(values[2]);
      var month = parseInt(values[0]) - 1;
      var day = parseInt(values[1]);
      var birthDate = new Date(year, month, day);
      var today = new Date();
         };
        
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

   if(age <= 18){
       return true;
    // setUnder18(true);
   }else{
       return false;
    //  setUnder18(false)
   }
    

  }

   export function dataInput (e) {
 
    e.target.type = 'text';
    var input = e.target.value;
    if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split('/').map(function(v) {
      return v.replace(/\D/g, '')
    });
    if (values[0]) values[0] = checkValue(values[0], 12);
    if (values[1]) values[1] = checkValue(values[1], 31);
    var output = values.map(function(v, i) {
      return v.length == 2 && i < 2 ? v + ' / ' : v;
    });
    e.target.value = output.join('').substr(0, 14);
  }