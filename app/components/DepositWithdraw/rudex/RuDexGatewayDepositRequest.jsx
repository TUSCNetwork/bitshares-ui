import React from "react";
import Translate from "react-translate-component";
import {ChainStore} from "tuscjs";
import ChainTypes from "components/Utility/ChainTypes";
import BindToChainState from "components/Utility/BindToChainState";
import DisableCopyText from "../DisableCopyText";
import RuDexWithdrawModal from "./RuDexWithdrawModal";
import AccountBalance from "../../Account/AccountBalance";
import RuDexDepositAddressCache from "common/RuDexDepositAddressCache";
import {requestDepositAddress} from "lib/common/RuDexMethods";
import AssetName from "components/Utility/AssetName";
import LinkToAccountById from "components/Utility/LinkToAccountById";
import utils from "common/utils";
import counterpart from "counterpart";
import PropTypes from "prop-types";
import CopyToClipboard from "react-copy-to-clipboard";
import {Modal} from "bitshares-ui-style-guide";
import {availableGateways} from "lib/common/gateways";

class RuDexGatewayDepositRequest extends React.Component {
    static propTypes = {
        gateway: PropTypes.string,
        deposit_coin_type: PropTypes.string,
        deposit_asset_name: PropTypes.string,
        deposit_account: PropTypes.string,
        receive_coin_type: PropTypes.string,
        account: ChainTypes.ChainAccount,
        issuer_account: ChainTypes.ChainAccount,
        deposit_asset: PropTypes.string,
        deposit_wallet_type: PropTypes.string,
        receive_asset: ChainTypes.ChainAsset,
        deprecated_in_favor_of: ChainTypes.ChainAsset,
        deprecated_message: PropTypes.string,
        action: PropTypes.string,
        supports_output_memos: PropTypes.bool.isRequired,
        supportsPublicKey: PropTypes.bool.isRequired,
        memoType: PropTypes.string,
        min_amount: PropTypes.number,
        gateFee: PropTypes.number,
        confirmations: PropTypes.object,
        asset_precision: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.deposit_address_cache = new RuDexDepositAddressCache();

        this.state = {
            isModalVisible: false,
            receive_address: null
        };

        this.addDepositAddress = this.addDepositAddress.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({
            isModalVisible: true
        });
    }

    hideModal() {
        this.setState({
            isModalVisible: false
        });
    }

    _getDepositObject() {
        return {
            inputCoinType: this.props.deposit_coin_type,
            outputCoinType: this.props.receive_coin_type,
            outputAddress: this.props.account.get("name"),
            stateCallback: this.addDepositAddress
        };
    }

    // componentWillMount() {
    //     let account_name = this.props.account.get("name");
    //     let receive_address = this.deposit_address_cache.getCachedInputAddress(this.props.gateway, account_name, this.props.deposit_coin_type, this.props.receive_coin_type);
    // }

    addDepositAddress(receive_address) {
        let account_name = this.props.account.get("name");
        this.deposit_address_cache.cacheInputAddress(
            this.props.gateway,
            account_name,
            this.props.deposit_coin_type,
            this.props.receive_coin_type,
            receive_address.address,
            receive_address.memo
        );
        this.setState({account_name});
        this.setState({receive_address});
    }

    getWithdrawModalId() {
        // console.log( "this.props.issuer: ", this.props.issuer_account.toJS() )
        // console.log( "this.receive_asset.issuer: ", this.props.receive_asset.toJS() )
        return (
            "withdraw_asset_" +
            this.props.issuer_account.get("name") +
            "_" +
            this.props.receive_asset.get("symbol")
        );
    }

    onWithdraw() {
        this.showModal();
    }

    render() {
        let emptyRow = <div style={{display: "none", minHeight: 150}} />;
        if (
            !this.props.account ||
            !this.props.issuer_account ||
            !this.props.receive_asset
        )
            return emptyRow;

        let account_balances_object = this.props.account.get("balances");

        // let balance = "0 " + this.props.receive_asset.get("symbol");
        if (this.props.deprecated_in_favor_of) {
            let has_nonzero_balance = false;
            let balance_object_id = account_balances_object.get(
                this.props.receive_asset.get("id")
            );
            if (balance_object_id) {
                let balance_object = ChainStore.getObject(balance_object_id);
                if (balance_object) {
                    let balance = balance_object.get("balance");
                    if (balance != 0) has_nonzero_balance = true;
                }
            }
            if (!has_nonzero_balance) return emptyRow;
        }

        // let account_balances = account_balances_object.toJS();
        // let asset_types = Object.keys(account_balances);
        // if (asset_types.length > 0) {
        //     let current_asset_id = this.props.receive_asset.get("id");
        //     if( current_asset_id )
        //     {
        //         balance = (<span><Translate component="span" content="transfer.available"/>: <BalanceComponent balance={account_balances[current_asset_id]}/></span>);
        //     }
        // }

        let receive_address = this.state.receive_address;
        if (!receive_address) {
            let account_name = this.props.account.get("name");
            receive_address = this.deposit_address_cache.getCachedInputAddress(
                this.props.gateway,
                account_name,
                this.props.deposit_coin_type,
                this.props.receive_coin_type
            );
        }

        let depositConfirmation = null;
        if (this.props.confirmations && this.props.confirmations.type) {
            if (this.props.confirmations.type === "irreversible") {
                depositConfirmation = (
                    <Translate content="gateway.gateway_deposit.confirmations.last_irreversible" />
                );
            } else if (
                this.props.confirmations.type === "blocks" &&
                this.props.confirmations.value
            ) {
                depositConfirmation = (
                    <Translate
                        content="gateway.gateway_deposit.confirmations.n_blocks"
                        blocks={this.props.confirmations.value}
                    />
                );
            }
        }

        let withdraw_modal_id = this.getWithdrawModalId();
        let deposit_address_fragment = null;
        let deposit_memo = null;
        // if (this.props.deprecated_in_favor_of)
        // {
        //     deposit_address_fragment = <span>please use {this.props.deprecated_in_favor_of.get("symbol")} instead. <span data-tip={this.props.deprecated_message} data-place="right" data-html={true}><Icon name="question-circle" title="icons.question_circle" /></span><ReactTooltip /></span>;
        // }
        // else
        // {
        let clipboardText = "";
        let memoText;
        let withdraw_memo_prefix;
        let currentGateway = "RUDEX";
        if (
            !!availableGateways[currentGateway].simpleAssetGateway &&
            this.props.deposit_account
        ) {
            deposit_address_fragment = (
                <span>{this.props.deposit_account}</span>
            );
            clipboardText = this.props.deposit_account;
            if (!!this.props.memoType && this.props.memoType === "btsid") {
                memoText =
                    availableGateways[currentGateway].fixedMemo[
                        "prepend_btsid"
                    ] +
                    this.props.account.get("id").replace("1.2.", "") +
                    availableGateways[currentGateway].fixedMemo["append"];
            } else {
                memoText =
                    availableGateways[currentGateway].fixedMemo[
                        "prepend_default"
                    ] +
                    this.props.account.get("name") +
                    availableGateways[currentGateway].fixedMemo["append"];
            }
            deposit_memo = <span>{memoText}</span>;
            withdraw_memo_prefix = this.props.deposit_coin_type + ":";
        } else {
            if (!receive_address && !this.props.supportsMemos) {
                requestDepositAddress(this._getDepositObject());
                return emptyRow;
            }
            if (receive_address.memo) {
                // This is a client that uses a deposit memo (like ethereum), we need to display both the address and the memo they need to send
                memoText = receive_address.memo;
                clipboardText = receive_address.address;
                deposit_address_fragment = (
                    <span>{receive_address.address}</span>
                );
                deposit_memo = <span>{receive_address.memo}</span>;
            } else {
                // This is a client that uses unique deposit addresses to select the output
                clipboardText = receive_address.address;
                deposit_address_fragment = (
                    <span>{receive_address.address}</span>
                );
            }
            withdraw_memo_prefix = "";
        }

        if (this.props.action === "deposit") {
            return (
                <div className="rudex__gateway grid-block no-padding no-margin">
                    <div className="small-12 medium-5">
                        <Translate
                            component="h4"
                            content="gateway.deposit_summary"
                        />
                        <div className="small-12 medium-10">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <Translate
                                            component="td"
                                            content="gateway.asset_to_deposit"
                                        />
                                        <td
                                            style={{
                                                fontWeight: "bold",
                                                color: "#049cce",
                                                textAlign: "right"
                                            }}
                                        >
                                            {this.props.deposit_asset}
                                        </td>
                                    </tr>
                                    <tr>
                                        <Translate
                                            component="td"
                                            content="gateway.asset_to_receive"
                                        />
                                        <td
                                            style={{
                                                fontWeight: "bold",
                                                color: "#049cce",
                                                textAlign: "right"
                                            }}
                                        >
                                            <AssetName
                                                name={this.props.receive_asset.get(
                                                    "symbol"
                                                )}
                                                replace={false}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <Translate
                                            component="td"
                                            content="gateway.intermediate"
                                        />
                                        <td
                                            style={{
                                                fontWeight: "bold",
                                                color: "#049cce",
                                                textAlign: "right"
                                            }}
                                        >
                                            <LinkToAccountById
                                                account={this.props.issuer_account.get(
                                                    "id"
                                                )}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <Translate
                                            component="td"
                                            content="gateway.your_account"
                                        />
                                        <td
                                            style={{
                                                fontWeight: "bold",
                                                color: "#049cce",
                                                textAlign: "right"
                                            }}
                                        >
                                            <LinkToAccountById
                                                account={this.props.account.get(
                                                    "id"
                                                )}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Translate content="gateway.balance" />
                                            :
                                        </td>
                                        <td
                                            style={{
                                                fontWeight: "bold",
                                                color: "#049cce",
                                                textAlign: "right"
                                            }}
                                        >
                                            <AccountBalance
                                                account={this.props.account.get(
                                                    "name"
                                                )}
                                                asset={this.props.receive_asset.get(
                                                    "symbol"
                                                )}
                                                replace={false}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="small-12 medium-7">
                        <Translate
                            component="h4"
                            content="gateway.deposit_inst"
                        />
                        <label className="left-label">
                            <Translate
                                content="gateway.deposit_to"
                                asset={this.props.deposit_asset}
                            />
                            :
                        </label>
                        <label className="left-label">
                            <b>
                                <Translate
                                    content="gateway.rudex.min_amount"
                                    minAmount={utils.format_number(
                                        this.props.min_amount /
                                            utils.get_asset_precision(
                                                this.props.asset_precision
                                            ),
                                        this.props.asset_precision,
                                        false
                                    )}
                                    symbol={this.props.deposit_coin_type}
                                />
                            </b>
                        </label>
                        {depositConfirmation ? (
                            <span>
                                (<i>{depositConfirmation}</i>)
                            </span>
                        ) : null}
                        <div style={{padding: "10px 0", fontSize: "1.1rem"}}>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            ADDRESS:{" "}
                                            <b>
                                                <DisableCopyText
                                                    replaceCopyText={counterpart.translate(
                                                        "gateway.use_copy_button"
                                                    )}
                                                >
                                                    {deposit_address_fragment}
                                                </DisableCopyText>
                                            </b>
                                        </td>
                                    </tr>
                                    {deposit_memo ? (
                                        <tr>
                                            <td>
                                                <DisableCopyText
                                                    replaceCopyText={counterpart.translate(
                                                        "gateway.use_copy_button"
                                                    )}
                                                >
                                                    MEMO: <b>{deposit_memo}</b>
                                                </DisableCopyText>
                                            </td>
                                        </tr>
                                    ) : null}
                                </tbody>
                            </table>
                            <div
                                className="button-group"
                                style={{paddingTop: 10}}
                            >
                                {deposit_address_fragment ? (
                                    <CopyToClipboard text={clipboardText}>
                                        <div className="button">
                                            Copy address
                                        </div>
                                    </CopyToClipboard>
                                ) : null}
                                {memoText ? (
                                    <CopyToClipboard text={memoText}>
                                        <div className="button">Copy memo</div>
                                    </CopyToClipboard>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="rudex__gateway grid-block no-padding no-margin">
                    <div className="small-12 medium-5">
                        <Translate
                            component="h4"
                            content="gateway.withdraw_summary"
                        />
                        <div className="small-12 medium-10">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <Translate
                                            component="td"
                                            content="gateway.asset_to_withdraw"
                                        />
                                        <td
                                            style={{
                                                fontWeight: "bold",
                                                color: "#049cce",
                                                textAlign: "right"
                                            }}
                                        >
                                            <AssetName
                                                name={this.props.receive_asset.get(
                                                    "symbol"
                                                )}
                                                replace={false}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <Translate
                                            component="td"
                                            content="gateway.asset_to_receive"
                                        />
                                        <td
                                            style={{
                                                fontWeight: "bold",
                                                color: "#049cce",
                                                textAlign: "right"
                                            }}
                                        >
                                            {this.props.deposit_asset}
                                        </td>
                                    </tr>
                                    <tr>
                                        <Translate
                                            component="td"
                                            content="gateway.intermediate"
                                        />
                                        <td
                                            style={{
                                                fontWeight: "bold",
                                                color: "#049cce",
                                                textAlign: "right"
                                            }}
                                        >
                                            <LinkToAccountById
                                                account={this.props.issuer_account.get(
                                                    "id"
                                                )}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Translate content="gateway.balance" />
                                            :
                                        </td>
                                        <td
                                            style={{
                                                fontWeight: "bold",
                                                color: "#049cce",
                                                textAlign: "right"
                                            }}
                                        >
                                            <AccountBalance
                                                account={this.props.account.get(
                                                    "name"
                                                )}
                                                asset={this.props.receive_asset.get(
                                                    "symbol"
                                                )}
                                                replace={false}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/*<p>When you withdraw {this.props.receive_asset.get("symbol")}, you will receive {this.props.deposit_asset} at a 1:1 ratio (minus fees).</p>*/}
                    </div>
                    <div className="small-12 medium-7">
                        <Translate
                            component="h4"
                            content="gateway.withdraw_inst"
                        />
                        <label className="left-label">
                            <Translate
                                content="gateway.withdraw_to"
                                asset={this.props.deposit_asset}
                            />
                            :
                        </label>
                        <div className="button-group" style={{paddingTop: 20}}>
                            <button
                                className="button success"
                                style={{fontSize: "1.3rem"}}
                                onClick={this.onWithdraw.bind(this)}
                            >
                                <Translate content="gateway.withdraw_now" />{" "}
                            </button>
                        </div>
                    </div>
                    <Modal
                        onCancel={this.hideModal}
                        title={counterpart.translate("gateway.withdraw_coin", {
                            coin: this.props.deposit_asset_name,
                            symbol: this.props.deposit_asset
                        })}
                        footer={null}
                        visible={this.state.isModalVisible}
                    >
                        <RuDexWithdrawModal
                            hideModal={this.hideModal}
                            showModal={this.showModal}
                            account={this.props.account.get("name")}
                            issuer={this.props.issuer_account.get("name")}
                            asset={this.props.receive_asset.get("symbol")}
                            output_coin_name={this.props.deposit_asset_name}
                            output_coin_symbol={this.props.deposit_asset}
                            output_coin_type={this.props.deposit_coin_type}
                            output_wallet_type={this.props.deposit_wallet_type}
                            output_supports_memos={
                                this.props.supports_output_memos
                            }
                            output_supportsPublicKey={
                                this.props.supportsPublicKey
                            }
                            memo_prefix={withdraw_memo_prefix}
                            modal_id={withdraw_modal_id}
                            min_amount={this.props.min_amount}
                            gateFee={this.props.gateFee}
                            asset_precision={this.props.asset_precision}
                            balance={
                                this.props.account.get("balances").toJS()[
                                    this.props.receive_asset.get("id")
                                ]
                            }
                        />
                    </Modal>
                </div>
            );
        }
    }
}

export default BindToChainState(RuDexGatewayDepositRequest);
