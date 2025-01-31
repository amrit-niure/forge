import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: "Find Jobs in Australia | Eloom",
    description: "Search and apply for the latest jobs in Australia. Browse thousands of job opportunities across various industries and locations. Start your career today!",
    keywords: [
      "jobs in Australia",
      "Australian job site",
      "find jobs Australia",
      "career opportunities Australia",
      "job search Australia",
      "employment Australia",
    ],
    authors: [{ name: "Eloom Jobs", url: "https://www.jobs.eloom.com.au" }],
    openGraph: {
      title: "Find Jobs in Australia | Eloom",
      description: "Search and apply for the latest jobs in Australia. Browse thousands of job opportunities across various industries and locations. Start your career today!",
      url: "https://www.jobs.eloom.com.au",
      siteName: "Eloom",
      images: [
        {
          url: "https://www.jobs.eloom.com.au/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Eloom - Find Jobs in Australia",
        },
      ],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Find Jobs in Australia | Eloom",
      description: "Search and apply for the latest jobs in Australia. Browse thousands of job opportunities across various industries and locations. Start your career today!",
      images: ["https://www.jobs.eloom.com.au/twitter-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/shortcut-icon.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "https://www.jobs.eloom.com.au/site.webmanifest",
    metadataBase: new URL("https://www.jobs.eloom.com.au"),
    alternates: {
      canonical: "/",
    },
  };
};