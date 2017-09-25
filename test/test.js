const assert = require('chai').assert,
      expect = require('chai').expect,
      pureTrim = require('../pure-trim');

describe('Pure Trim Test',function(){
   it('Function Should Return A String.',function(){
      assert.typeOf(pureTrim('   abvd '),'string'); 
   });
    
   it('Function Should Remove All Whitespace From The String',function(){
      assert.equal(pureTrim('   ab    cd   '),'ab cd'); 
   });
    
   it('Function Should return an Array where string value is not caontain whitespace',function(){
      assert.deepEqual(pureTrim(['    aaaa   aa ',2, '   xxx ssss  xxxx  ']),['aaaa aa',2,'xxx ssss xxxx']); 
   });
    
    it('Function Should Return An Object where string value is not caontain whitespace',function(){
      assert.deepEqual(pureTrim({
          a : 'xxx    xxxx   xxx   ',
          b : 5 ,
          c : 6 ,
          d : '    yyy    yyyy   yyyyy    '
      }),{
          a : 'xxx xxxx xxx',
          b : 5,
          c : 6,
          d : 'yyy yyyy yyyyy'
      }); 
   });
    it('Function Should return an Emty Striing',function(){
      assert.equal(pureTrim(),''); 
   });
});