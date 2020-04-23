class BisectionAlgorithm {

    constructor(initObject) {
        this.left = 0;
        this.right = initObject.frames - 1;
        this.mid = Math.round((this.left + this.right) / 2);
        this.numberFrames = initObject.frames;
    }

    reset(){
        this.left = 0;
        this.right = this.numberFrames - 1;
        this.mid = Math.round((this.left + this.right) / 2);
    }

    /**
    * Middle value of the bisection algorithm
    *
    * @return {Number} bisection middle value
    */
    getMid() { return this.mid; }

    /**
    * Do one step of the bisection algorithm
    *
    * @param  {Boolean} boolValue value answered by the user
    * @return {Object} bisection result
    */
    treatValue(test) {
        const result = this.bisectFunction(test);

        if (result) {
            return this.left;
        }
        else {
            return null;
        }
    }
    /**
    * Do one step of a dichotomic research
    * @param  {Boolean} tester test value, true if the value is bigger than middle value, else false
    * 
    * @return {Boolean} return true if the algorithm is finished, we have find the value
    */
    bisectFunction = (tester) => {
        if (this.left + 1 < this.right) {

            this.mid = Math.round((this.left + this.right) / 2);

            if (tester) {
                this.right = this.mid;
            }
            else {
                this.left = this.mid;
            }

            this.mid = Math.round((this.left + this.right) / 2);
            if (this.left + 1 >= this.right) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return true
        }
    }
}

module.exports = BisectionAlgorithm;