/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let count = 0;
    const pairs = {
        '(':')',
        '{':'}',
        '[':']',
    };
    for(let i = 0; i< s.length; i++){
        if(pairs[i]){
            count++;
        }else if(pairs[pairs[i]] === i){
            count--;
            if(count<0){
                return false;
            }
        }else{
            return false;
        }
    }
    return count === 0;
};

module.exports = { isValid };


