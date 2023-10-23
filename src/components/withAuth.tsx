import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function withAuth(WrappedComponent: any) {
  return function WithAuthWrapper(props: any) {
    const { isAuthenticated } = useSelector((state: any) => state.auth);
    const publicKey = useSelector(
      (state: any) => state.auth.walletCredentials.publicKey
    );
    const secretKey = useSelector(
      (state: any) => state.auth.walletCredentials.secretKey
    );
    const router = useRouter();
    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/");
      }
    }, [isAuthenticated]);

    return (
      <WrappedComponent
        {...props}
        publicKey={publicKey}
        secretKey={secretKey}
      />
    );
  };
}
