const Block = require('./block')
const SHA256 = require('crypto-js/sha256');



class Blockchain {
    constructor(){
        this.chain = []
        this.chain.push(Block.genesis())

    }
    getLastBlock(){
        return this.chain[this.chain.length - 1]
    }
    addBlock(data){
        const lastBlock = this.getLastBlock()
        this.chain.push(Block.mineBlock(lastBlock,data))
    }

    blockHash(block){
        return SHA256(block.timestamp, block.lastHash, block.data).toString()

    }

    static isValidChain(chain){

        chain.forEach((block, index)=> {

        })

    }
    // The longer chain wins
    replaceChain(chain) {

    }




}

module.exports = Blockchain