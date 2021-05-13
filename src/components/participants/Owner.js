import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";
import { Context } from "../../Context";
import OwnerViews from "./OwnerViews";

export class Owner extends Component {
    static contextType = Context;
    
    constructor(props) {
        super(props);
        this.state = {
            appState:"",
            args:[],
            resPurchase: null
            
        }
        //bind functions 
        this.PurchaseExt= this.PurchaseExt.bind(this);
}
componentDidMount(){
    const[, , , , , ctc ,  ctcArgs]= this.context;
    this.interval = setInterval(async () => await this.UpdateBalance(), 50000)
}

async UpdateBalance(){
    const [account, , , setBalance] = this.context;

    const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
    setBalance(balance); 


}
async  purchase(price){
    const response = await new Promise( res=> {
        this.setState({
            appState: "Purchase",
            args: [res],
            resPurchase: res
        });
    });
    return response;
}
PurchaseExt(response){
    this.state.resPurchase(response);
}

async revealId(id){
    this.setState({
        appState:"revealId",
        args: [id],
    })
} 

 
render() {
    return <OwnerViews
        appState={this.state.appState}
        args = {this.state.args}
        revealPurchase={this.state.resPurchaseId !== null}
        revealPurchaseExt={this.revealPurchaseExt} />
    }
}


