const assert = require('chai').assert,
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
    it('Function Should return Object/Array Inner Object/Array String Value as Trim String',function(){
        let obj1 = {
            firstVal : [{
                str1 : '    xxxxx           xx   x       xxxx     ',
                objIner1 : [
                    {objIner2 : [1,2,3,'    xxxxx  x x xxxxxx           xxxx    ',{
                        str2 : ' xxx                 xxxxxxxxxxxxxxxx                   xxxxxxxxxxxxxxx   '
                    }]}
                ]
            }]
        }
        let obj2 = {
            firstVal : [{
                str1 : 'xxxxx xx x xxxx',
                objIner1 : [
                    {objIner2 : [1,2,3,'xxxxx x x xxxxxx xxxx',{
                        str2 : 'xxx xxxxxxxxxxxxxxxx xxxxxxxxxxxxxxx'
                    }]}
                ]
            }]
        }
        assert.deepEqual(pureTrim(obj1),obj2); 
    });
});