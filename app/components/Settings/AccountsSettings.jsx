import React from "react";
import {Link} from "react-router-dom";
import AccountStore from "stores/AccountStore";
import AccountActions from "actions/AccountActions";
import {connect} from "alt-react";
import utils from "common/utils";
import Translate from "react-translate-component";
import ImportBalanceModal from "../Modal/ImportBalanceModal";
import {Tooltip, Button} from "bitshares-ui-style-guide";
import counterpart from "counterpart";

class AccountsSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isImportBalanceModalVisible: false,
            isImportBalanceModalVisibleBefore: false
        };
        this.showImportBalanceModal = this.showImportBalanceModal.bind(this);
        this.hideImportBalanceModal = this.hideImportBalanceModal.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return (
            !utils.are_equal_shallow(
                nextProps.myAccounts,
                this.props.myAccounts
            ) ||
            nextProps.hiddenAccounts !== this.props.hiddenAccounts ||
            nextProps.isImportBalanceModalVisible !=
                this.state.isImportBalanceModalVisible
        );
    }

    onToggleHide(account, hide, e) {
        e.preventDefault();
        AccountActions.toggleHideAccount(account, hide);
    }

    showImportBalanceModal() {
        this.setState({
            isImportBalanceModalVisible: true,
            isImportBalanceModalVisibleBefore: true
        });
    }

    hideImportBalanceModal() {
        this.setState({
            isImportBalanceModalVisible: false
        });
    }

    render() {
        let {myAccounts, hiddenAccounts} = this.props;

        let accounts = hiddenAccounts
            .toArray()
            .concat(myAccounts)
            .sort();

        if (!accounts.length) {
            return (
                <div>
                    <div>
                        <Translate
                            content="account.import_balance_explanation"
                            component="p"
                        />
                        <Tooltip
                            title={counterpart.translate(
                                "account.import_balance"
                            )}
                            mouseEnterDelay={0.5}
                        >
                            <Button
                                type="primary"
                                onClick={this.showImportBalanceModal}
                            >
                                <Translate content="modal.import_balance.title" />
                            </Button>
                        </Tooltip>
                    </div>
                    {/* Create Import Balance Modal */}
                    {(this.state.isImportBalanceModalVisible ||
                        this.state.isImportBalanceModalVisibleBefore) && (
                        <ImportBalanceModal
                            visible={this.state.isImportBalanceModalVisible}
                            hideModal={this.hideImportBalanceModal}
                            asset={"1.3.0"}
                            account={this.props.account}
                        />
                    )}
                    <Translate content="settings.no_accounts" />
                </div>
            );
        }

        return (
            <div>
                <div>
                    <Translate
                        content="account.import_balance_explanation"
                        component="p"
                    />
                    <Tooltip
                        title={counterpart.translate("account.import_balance")}
                        mouseEnterDelay={0.5}
                    >
                        <Button
                            type="primary"
                            onClick={this.showImportBalanceModal}
                        >
                            <Translate content="modal.import_balance.title" />
                        </Button>
                    </Tooltip>
                </div>
                {/* Create Import Balance Modal */}
                {(this.state.isImportBalanceModalVisible ||
                    this.state.isImportBalanceModalVisibleBefore) && (
                    <ImportBalanceModal
                        visible={this.state.isImportBalanceModalVisible}
                        hideModal={this.hideImportBalanceModal}
                        asset={"1.3.0"}
                        account={this.props.account}
                    />
                )}
                <table className="table">
                    <tbody>
                        {accounts.map(account => {
                            let isIgnored = hiddenAccounts.has(account);
                            let hideLink = (
                                <a
                                    onClick={
                                        isIgnored
                                            ? this.onToggleHide.bind(
                                                  this,
                                                  account,
                                                  false
                                              )
                                            : this.onToggleHide.bind(
                                                  this,
                                                  account,
                                                  true
                                              )
                                    }
                                >
                                    <Translate
                                        content={
                                            "account." +
                                            (isIgnored ? "unignore" : "ignore")
                                        }
                                    />
                                </a>
                            );

                            return (
                                <tr key={account}>
                                    <td>{account}</td>
                                    <td>
                                        <Link
                                            to={`/account/${account}/permissions`}
                                        >
                                            <Translate content="settings.view_keys" />
                                        </Link>
                                    </td>
                                    <td>{hideLink}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

AccountsSettings = connect(
    AccountsSettings,
    {
        listenTo() {
            return [AccountStore];
        },
        getProps() {
            return {
                myAccounts: AccountStore.getMyAccounts(),
                hiddenAccounts: AccountStore.getState().myHiddenAccounts
            };
        }
    }
);

export default AccountsSettings;
