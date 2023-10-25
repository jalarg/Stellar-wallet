import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Spiral } from "./commons";
import { IAuth } from "../types/types";
import { handleWalletInformation } from "../actions/handlers";

export default function withAuth(WrappedComponent: any) {
  return function WithAuthWrapper(props: any) {
    const { isAuthenticated } = useSelector((state: IAuth) => state.auth);
    const publicKey = useSelector(
      (state: IAuth) => state.auth.walletCredentials.publicKey
    );
    const secretKey = useSelector(
      (state: IAuth) => state.auth.walletCredentials.secretKey
    );
    const isAlbedo = useSelector((state: IAuth) => state.auth.isAlbedo);
    const [isLoading, setIsLoading] = useState(false);
    const [balance, setBalance] = useState("0");
    const [payments, setPayments] = useState(null);
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/");
      }
      handleWalletInformation({
        publicKey,
        setBalance,
        setPayments,
        setIsLoading,
      });
    }, [isAuthenticated]);

    return (
      <>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <Spiral size="large" />
          </div>
        ) : (
          <WrappedComponent
            {...props}
            publicKey={publicKey}
            secretKey={secretKey}
            balance={balance}
            payments={payments}
            setBalance={setBalance}
            setPayments={setPayments}
            isAlbedo={isAlbedo}
          />
        )}
      </>
    );
  };
}
