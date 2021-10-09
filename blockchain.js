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
        return SHA256(block.timestamp+block.lastHash+block.data).toString()

    }

    static isValidChain(chain){
        const blocks = [...chain];
        // genesis block should always stay the same
        if(blocks[0].timestamp !== "today" || blocks[0].data !== "Genesis block" ) {

            return false;
        }
        blocks.shift();
        const result = blocks.find((block,index) => block.hash !== Block.hash(block.timestamp,block.lastHash,block.data))
        return result === undefined

        
        

    }
    // The longer chain wins
    replaceChain(chain) {
        if(chain.length> this.chain.length) {
            this.chain = chain
        }

    }




}



module.exports = Blockchain