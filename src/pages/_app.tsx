import { type AppType } from "next/app";
import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm normal-case'
            }
          }}
        />
      </SignedOut>
    </ClerkProvider>);
};

export default api.withTRPC(MyApp);
