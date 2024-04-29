function chkfirstname(){
    var name=document.getElementById("firstname").value;
          if(name==null || name=="")
          {
              document.getElementById("error1").innerHTML="Name Field Cannot empty";
              return false;
          }
          if(chkname(name)==false)
          {
              alert("Name content only alpha value");
              return false;
          }
          return true;
        }

        function chkname(name){
          for(i=0; i<name.length; i++)
          {
              var ch=name.charAt(i);
              if(ch>='A' && ch<='Z')
                  continue;
              if(ch>='a' && ch<='z')
                  continue;
              if(ch==' ')
                  continue;
              else
                  return false;
          }
          return true;
      }

      function chklastname(){
        var name=document.getElementById("lastname").value;
              if(name==null || name=="")
              {
                  document.getElementById("error1").innerHTML="Name Field Cannot empty";
                  return false;
              }
              if(chkname(name)==false)
              {
                  alert("Name content only alpha value");
                  return false;
              }
              return true;
            }
    
            function chkname(name){
              for(i=0; i<name.length; i++)
              {
                  var ch=name.charAt(i);
                  if(ch>='A' && ch<='Z')
                      continue;
                  if(ch>='a' && ch<='z')
                      continue;
                  if(ch==' ')
                      continue;
                  else
                      return false;
              }
              return true;
          }
    