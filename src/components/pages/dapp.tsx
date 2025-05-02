import { useWallet } from '@lazorkit/wallet';

const DApp = () => {
  const {
    isConnected,
    isLoading,
    error,
    smartWalletAuthorityPubkey,
    connect,
    disconnect,
    // signMessage,
  } = useWallet();

  const handleConnect = async () => {
    try {
      await connect();
      console.log('Wallet connected:', smartWalletAuthorityPubkey);
    } catch (err) {
      console.error('Failed to connect wallet:', err);
    }
  };

  const handleDisconnect = () => {
    disconnect();
    console.log('Wallet disconnected');
  };

//   const handleSignMessage = async () => {
//     try {
//       const instruction = {}; // Replace with a valid TransactionInstruction
//       const txid = await signMessage(instruction);
//       console.log('Transaction ID:', txid);
//     } catch (err) {
//       console.error('Failed to sign message:', err);
//     }
//   };

  return (
    <div>
      <h1>Lazor Kit Wallet Integration</h1>
      {isConnected ? (
        <div>
          <p>Connected Wallet: {smartWalletAuthorityPubkey}</p>
          <button onClick={handleDisconnect}>Disconnect</button>
          {/* <button onClick={handleSignMessage}>Sign Message</button> */}
        </div>
      ) : (
        <div>
          <button onClick={handleConnect} disabled={isLoading}>
            {isLoading ? 'Connecting...' : 'Connect Wallet'}
          </button>
          
        </div>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
};

export default DApp;