import React from "react";
import { useOnboard } from "use-onboard";

const App = ({ initialData }) => {
    // in case you are authorized before this won't ask to login from the wallet
    const {
        selectWallet,
        address,
        isWalletSelected,
        disconnectWallet,
        balance,
    } = useOnboard({
        options: {
            //dappId: process.env.DAPP_ID, // optional API key
            networkId: 4, // Ethereum network ID
        },
        initialData,
    });

    return (
        <div>
            {
                <button
                    onClick={async () => {
                        if (isWalletSelected) disconnectWallet();
                        else await selectWallet();
                    }}
                >
                    {isWalletSelected ? "Disconnect" : "Connect"}
                </button>
            }
            <p>Address: {address}</p>
            <p>Balance: {balance} ETH</p>
        </div>
    );
};

export default App;
