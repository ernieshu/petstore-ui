npm install
bower install

grunt test

if [ $? -eq 0 ] 
   then
      grunt serve
else
   echo "Test failed, not running application!!!"
fi
