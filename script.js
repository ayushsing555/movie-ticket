$(document).ready(function(){
      var b=document.getElementById("total-seat").innerHTML;
      b=parseInt(b);
      var gseat=0;
      var yseat=0;
      var nseat=0;
      $("i").on("click",(e)=>{
            var a=e.target.id;
            if(  document.getElementById(`${e.target.id}`).style.color!="red")
            {
            if((a>=1&&a<=15)||(a>=61&&a<=75))
              gseat++;
            else if((a>=16&&a<=30)||(a>=76&&a<=90))
              yseat++;
            else if((a>=31&&a<=60)||(a>=91&&a<=120))
              nseat++;
              b++;
            }
            else
            alert("already seat is booked");
            document.getElementById(`${e.target.id}`).style.color="red";
            document.getElementById("total-seat").innerHTML=b;
            document.getElementById("gseat").innerHTML=gseat;
            document.getElementById("yseat").innerHTML=yseat;
            document.getElementById("nseat").innerHTML=nseat;
      });
      $("#btn").on("click",()=>{
            let sum=0;
               var a=document.getElementById("movie").value;
               console.log(a);
               if(a==1)
                 fetch_bill(12);
               else if(a==2)
                  fetch_bill(8);
              else if(a==3)
                fetch_bill(9);
              else if(a==4)
                fetch_bill(10);
              else if(a==5)
               fetch_bill(11);
             function fetch_bill(item){
                 var z=(item+3)*gseat;
                 var x=(item+2)*yseat;
                 var y=(item+0)*nseat;
                  sum=x+y+z;
                 document.getElementById("amout").innerHTML=sum;
            }
      })
 });