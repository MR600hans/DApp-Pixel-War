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
        let message = 'Draw success'
        /** ======= TODO 3-2 ======== */


        return message
    }

    async getCanvas(){
       /** TODO 2-1 */
       return []
    }
}

