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
            appState: "",
            args: [],
            resPurchase: null

        }
        //bind functions 
        this.purchaseExt = this.purchaseExt.bind(this);
    }
    componentDidMount() {
        console.log(this.context);
        const [, , , , , , ctc, ,] = this.context;
        this.interval = setInterval(async () => await this.updateBalance(), 50000)

        //Reache bağlan
        Backend.Owner(ctc[0], this);
    }

    async updateBalance() {
        const [account, , , setBalance] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }
    async purchase(price) {
        const priceFmt = Reach.formatCurrency(price, 4);
        const response = await new Promise(res => {
            this.setState({
                appState: "purchase",
                args: [priceFmt],
                resPurchase: res
            });
        });
        return response;
    }
    purchaseExt(response) {
        this.state.resPurchase(response);
    }

    async seeOwner(addr) {
        const addrFmt = Reach.formatAddress(addr);
        this.setState({
            appState: "seeOwner",
            args: [addrFmt]
        });
    }

    async revealId(id) {
        const idFmt = Reach.bigNumberToNumber(id);
        this.setState({
            appState: "revealId",
            args: [idFmt],
        })
    }


    render() {
        return <OwnerViews
            appState={this.state.appState}
            args={this.state.args}
            purchaseReady={this.state.resPurchase !== null}
            purchase={this.purchaseExt} />
    }
}


