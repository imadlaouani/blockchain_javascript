const SHA256 = require('crypto-js/sha256');


class Block {

    constructor(timestamp, lastHash,hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
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
        return new Block("today","0000","00001","Genesis block")
    }
    static hash(timestamp, lastHash,data) {
        return SHA256(timestamp, lastHash, data).toString()
    }

    static mineBlock(lastblock,data) {
        return new Block(Date.now(),lastblock.hash,Block.hash(Date.now(),lastblock,data),data)
    }

}


module.exports = Block