var n=prompt("enter the number to be sum up");
var sum=0;
//if we enter the input as 1000 then 1+2+#.....+1000=500500
for(i=1; i <= n; ++i)
   {
	var sum =sum+i;
   }
document.write("<br> total sum up is "+sum);
