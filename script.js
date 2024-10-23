document.getElementById("dob").addEventListener("change", function() {
    var input = this.value;
    var dob = new Date(input);
    var curr=new Date();
    var ans=curr.getTime()-dob.getTime();
    var diff=Math.floor(ans/(1000*60*60*24));
    console.log(diff);
    if(diff<0){
        document.getElementById("age").value="**Invalid Date of Birth";
        document.getElementById("age").style.color="red";
    }
    else{
        var year=diff/365;
        diff%=365;
        var month=diff/30;
        diff%=30;
        var day=diff;
        document.getElementById("age").value=Math.floor(year)+" Year "+Math.floor(month)+" Month "+Math.floor(day)+" Day";
        document.getElementById("age").style.color="black";
    }
    
});