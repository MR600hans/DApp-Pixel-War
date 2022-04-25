import { ethers } from "ethers";
import CANVAS from '../bin/canvas.json'


export default class SmartContract{
    constructor(ethereum) {
        this.contract_address = '0x7d774ed50f2d26719F5d9eb952f45cA965270C9d'
        this.provider =  new ethers.providers.Web3Provider(ethereum)
        this.signer = this.provider.getSigner()
        this.abi = CANVAS.abi
    }
    async draw(index, color){
        const connectedContract = new ethers.Contract(this.contract_address,this.abi,this.signer)
        try {
            const tx_response = await connectedContract.draw(index, color)
            console.log("tx_response",tx_response)
            const tx_receipt = await tx_response.wait()
            console.log("tx_receipt",tx_receipt)
            if(tx_receipt.status){
               return 'Draw success'
            }
            else {
                return 'the transaction was reverted'
            }
        } catch ({error}) {
            console.log(error.message)
            return error.message
        }
        
    }

    async getCanvas(){
        const connectedContract = new ethers.Contract(this.contract_address,this.abi,this.provider)
        const result = await connectedContract.getCanvas()
        return result
    }

}

// module.e SmartContract