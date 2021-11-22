import React from "react";
import counterpart from "counterpart";
import AccountSelector from "../Account/AccountSelectorAnt";
import AssetWrapper from "../Utility/AssetWrapper";
import {
    Modal,
    Button,
    Form,
    Input,
    Notification
} from "bitshares-ui-style-guide";
import ApplicationApi from "../../api/ApplicationApi";

class ImportBalanceModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.account_input = React.createRef();
    }

    componentWillReceiveProps(np) {
        if (
            np.asset &&
            this.props.asset &&
            np.asset.get("id") !== this.props.asset.get("id")
        ) {
            this.getInitialState(np);
        }
    }

    componentDidMount() {
        const {isModalVisible, focusedOnce} = this.state;
        if (!focusedOnce && isModalVisible && passwordLogin) {
            let account_input =
                this.account_input && this.account_input.current;

            if (!account_input) {
                this.forceUpdate();
            } else if (
                account_input &&
                account_input.input &&
                typeof account_input.focus === "function"
            ) {
                account_input.focus();
                this.setState({focusedOnce: true});
            }
        }
    }

    getInitialState(props) {
        return {
            accountNameToImportBalanceTo: "",
            privateKeyToImport: ""
        };
    }

    onSubmit() {
        ApplicationApi.importBalance(
            this.state.accountNameToImportBalanceTo,
            this.state.privateKeyToImport
        )
            .then(result => {
                console.log("Balance imported");
            })
            .catch(error => {
                console.log("error", error);
                let error_msg =
                    error.message &&
                    error.message.length &&
                    error.message.length > 0
                        ? error.message.split("stack")[0]
                        : "unknown error";

                Notification.error({
                    message: counterpart.translate(
                        "notifications.import_balance_failure",
                        {
                            error_msg: error_msg
                        }
                    )
                });
            });
        this.props.hideModal();
    }

    onAccountNameToImportBalanceToInput = accountNameToImportBalanceTo =>
        this.setState({accountNameToImportBalanceTo, error: null});

    onPrivateKeyInput(e) {
        let state = {
            privateKeyToImport: e.target.value
        };

        this.setState(state);
    }

    render() {
        return (
            <Modal
                visible={this.props.visible}
                onCancel={this.props.hideModal}
                title={counterpart.translate("modal.import_balance.title")}
                footer={[
                    <Button type="primary" key="submit" onClick={this.onSubmit}>
                        {counterpart.translate("modal.import_balance.submit")}
                    </Button>,
                    <Button onClick={this.props.hideModal} key="cancel">
                        {counterpart.translate("cancel")}
                    </Button>
                ]}
            >
                <div className="grid-content">
                    <Form layout="vertical">
                        <AccountSelector
                            label="account.import_account_destination"
                            inputRef={this.account_input} // needed for ref forwarding to Input
                            accountName={
                                this.state.accountNameToImportBalanceTo
                            }
                            account={this.state.accountNameToImportBalanceTo}
                            onChange={this.onAccountNameToImportBalanceToInput}
                            onAccountChanged={() => {}}
                            size={60}
                            hideImage
                            placeholder=" "
                            useHR
                            labelClass="login-label"
                            reserveErrorSpace
                        />

                        {/* <Form.Item
                            label="Destination account name"
                        >
                            <Input
                                value={this.state.accountNameToImportBalanceTo}
                                onChange={this.onAccountNameToImportBalanceToInput.bind(this)}
                            />
                        </Form.Item> */}
                        <Form.Item label="Private key to import">
                            <Input
                                value={this.state.privateKeyToImport}
                                onChange={this.onPrivateKeyInput.bind(this)}
                            />
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        );
    }
}

ImportBalanceModal = AssetWrapper(ImportBalanceModal, {
    propNames: ["asset"]
});

export default ImportBalanceModal;
