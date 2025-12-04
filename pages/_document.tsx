import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <meta charSet="utf-8" />
                <meta name="color-scheme" content="light dark" />
                <meta name="format-detection" content="telephone=no,address=no,email=no" />
                <link rel="preload" as="image" href="/logo_2.png" />
                <link rel="preload" as="image" href="/quem_somos.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}