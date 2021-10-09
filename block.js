const SHA256 = require('crypto-js/sha256');


class Block {

    constructor(timestamp, lastHash,hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this._data = data;
    }
    set data(newData) {
        this._data = newData;
      }
      
    get data(){
        return this._data;
    }
    toString(){
        return `{
            timestamp : ${this.timestamp},
            lastHash : ${this.lastHash},
            hash : ${this.hash},
            data : ${this.data}
        }`
    }
    

    static genesis(){
        const hash = Block.hash("today","0000","Genesis block")
        return new Block("today","0000",hash,"Genesis block")
    }
    static hash(timestamp,lastHash,data) {
        return SHA256(timestamp+lastHash+data).toString()
    }

    static mineBlock(lastblock,data) {
        const timestamp = Date.now()
        const hash = Block.hash(timestamp,lastblock.hash,data)
        return new Block(timestamp,lastblock.hash,hash,data)
    }

}


module.exports = Block