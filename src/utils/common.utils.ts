import type { Metadata } from 'next';
import { headers } from 'next/headers';

export async function generateBasicMetadata(): Promise<Metadata> {
    const host = await getHost();
    const title = {
        template: `%s SBS HOUSE`,
        default: `SBS HOUSE`,
    };

    const description = 'SBS HOUSE thiết kế nhà đẹp Đà Nẵng - Quảng Nam. Chuyên thiết kế xây dựng nhà đẹp, thiết kế kiến trúc, thiết kế nội thất, thi công trọn gói nhà phố.';

    return {
        title,
        description,
        keywords: ['Nhà', 'thi công', 'thiết kế nhà', 'xây dựng', 'nhà đẹp', 'thiết kế kiến trúc', 'nhà phố'],
        metadataBase: new URL(host),
        openGraph: {
            url: host,
            title,
            description,
            images: [
                {
                    url: `${host}/images/logo.svg`, // FIXME: use real image
                    width: 300,
                    height: 300,
                    alt: 'Logo-favicon',
                },
            ],
            // siteName: AppConfig.name,
            // emails: AppConfig.email,
        },

        icons: [
            {
                rel: 'apple-touch-icon',
                url: '/apple-touch-icon.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/favicon-32x32.png',
            },
            // {
            //     rel: 'icon',
            //     type: 'image/png',
            //     sizes: '16x16',
            //     url: '/favicon-16x16.png',
            // },
            {
                rel: 'icon',
                url: '/favicon.ico',
            },
        ],
    };
}


async function getHostFromHeader(): Promise<string> {
    const headersList = await headers();
    const host = headersList.get('Host') || headersList.get('x-forwarded-host');
    return host || '';
}
export default async function getHost(): Promise<string> {
    const isClient = typeof window !== 'undefined';
    let host = '';
    if (isClient) {
        host = window.location.origin;
    } else {
        host = await getHostFromHeader();
    }
    if (!host.startsWith('http')) {
        host = `https://${host}`;
    }
    return host;
}
