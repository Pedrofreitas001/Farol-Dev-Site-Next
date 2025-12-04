export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.faroldev.com.br";

export const buildCanonical = (path: string) => {
    if (path === "/") {
        return siteUrl;
    }

    return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
};
