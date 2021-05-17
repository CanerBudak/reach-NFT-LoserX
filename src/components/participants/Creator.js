import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";
import { Context } from "../../Context";
import CreatorViews from "./CreatorViews"
export class Creator extends Component {
        static contextType = Context;
        
        constructor(props) {
            super(props);
            this.state = {
                appState:" ",
                args: [],
                resGetParams: null, 
            };
            //bind functions 
            this.getParamsExt = this.getParamsExt.bind(this);
}
    componentDidMount(){
        const [, , , , , , ctc, ,] = this.context;
        this.interval = setInterval(async () => await this.UpdateBalance(), 50000)


        //olsaydı kontrat argümanları burada olacaktı. (ctcArgs)

        //Reache bağlan 
        Backend.Creator(ctc[0], this);
    
}

    async UpdateBalance(){
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance); 

        

    }
    // get params
    async getParams() {
        const params = await new Promise(res => {
            this.setState({
                appState: "getParams",
                resGetParams: res
            })
        });
        this.UpdateBalance();
        return params;
    }

    getParamsExt(params){
        this.state.resGetParams(params);
    }
    render() {
        return <CreatorViews
            appState={this.state.appState}
            args = {this.state.args}
            //resolves
            getParamsReady={this.state.resGetParams !== null}
            getParams={this.getParamsExt}/>
    }

}

