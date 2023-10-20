const trimWalletAddress = (address: string) => {
    return `${address?.trim().slice(0, 5)}...${address
      ?.trim()
      .slice(address.length - 6, address.length - 1)}`;
  };


export default trimWalletAddress;