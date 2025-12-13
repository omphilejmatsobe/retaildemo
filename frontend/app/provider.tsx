'use client'

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";


export default function StoreProvider({children,}: Readonly<{children: React.ReactNode;}>)
{
    const stroreElem = useRef<AppStore>(undefined);
    if (!stroreElem.current) stroreElem.current = makeStore();

    return (
        <Provider store={stroreElem.current}>
            {children}
        </Provider>
    )
}
