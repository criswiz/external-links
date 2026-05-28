export type RichTextPart =
  | { type: "text"; text: string }
  | { type: "link"; text: string; href: string };

export type RichText = string | RichTextPart[];

export type PolicySection = {
  title: string;
  paragraphs?: RichText[];
  items?: RichText[];
};

export type ExternalPage = {
  type: "privacy" | "terms" | "support";
  title: string;
  eyebrow: string;
  updated: string;
  description: string;
  sections: PolicySection[];
};

export type AppEntry = {
  slug: string;
  name: string;
  description: string;
  pages: ExternalPage[];
};

export const apps = [
  {
    slug: "stackit",
    name: "StackIt",
    description: "A mobile block stacking game.",
    pages: [
      {
        type: "privacy",
        title: "Privacy Policy",
        eyebrow: "Privacy Policy",
        updated: "May 28, 2026",
        description:
          "Privacy Policy for StackIt, a mobile block stacking game.",
        sections: [
          {
            title: "Overview",
            paragraphs: [
              "StackIt is a mobile block stacking game. This Privacy Policy explains what information may be collected or processed when you use StackIt, why it is used, and the choices available to you.",
              "StackIt does not ask you to create an account with us. Some features, such as ads and Google Play Games leaderboards, are provided by Google services and may process information according to their own policies.",
            ],
          },
          {
            title: "Information We Process",
            paragraphs: [
              "StackIt may store game-related information on your device, such as gameplay progress, high scores, preferences, rewarded ad limits, and similar app settings. This information is used to run the game and remember your experience.",
              "If you use Google Play Games features, Google may process information such as your Play Games profile, gamer identity, scores, leaderboard activity, device information, and related diagnostics.",
              "StackIt uses Google Mobile Ads. Advertising services may process device information, advertising identifiers, IP address, app interactions, approximate location inferred from network information, crash or diagnostic data, and ad performance data.",
            ],
          },
          {
            title: "Advertising ID",
            paragraphs: [
              "StackIt uses ads and may use the Android Advertising ID where available. The Advertising ID is used for advertising, frequency capping, fraud prevention, measurement, and related ad features. You can reset or delete your Advertising ID in your Android device settings.",
            ],
          },
          {
            title: "How Information Is Used",
            items: [
              "To provide gameplay, scoring, preferences, and core app features.",
              "To show ads, including rewarded, banner, and interstitial ads.",
              "To measure ad performance and protect against fraud or abuse.",
              "To support Google Play Games leaderboards and related features.",
              "To diagnose crashes, improve reliability, and maintain the app.",
            ],
          },
          {
            title: "Third-Party Services",
            paragraphs: [
              "StackIt uses services provided by Google. These services may collect and process information under their own privacy policies:",
            ],
            items: [
              [
                {
                  type: "link",
                  text: "Google Privacy Policy",
                  href: "https://policies.google.com/privacy",
                },
              ],
              [
                {
                  type: "link",
                  text: "How Google uses information for advertising",
                  href: "https://policies.google.com/technologies/ads",
                },
              ],
              [
                {
                  type: "link",
                  text: "Google Play Games profile privacy settings",
                  href: "https://support.google.com/googleplay/answer/3129346",
                },
              ],
            ],
          },
          {
            title: "Sharing",
            paragraphs: [
              "We do not sell personal information. Information may be processed by third-party service providers, such as Google, to provide ads, leaderboards, analytics, diagnostics, security, and app functionality. Information may also be disclosed if required by law or to protect rights, safety, and security.",
            ],
          },
          {
            title: "Data Retention",
            paragraphs: [
              "Game preferences and progress stored on your device remain until you clear the app data or uninstall the app. Data processed by third-party services is retained according to those services' policies and your account or device settings.",
            ],
          },
          {
            title: "Children",
            paragraphs: [
              "StackIt is not intended for children under the age required by applicable law to consent to data processing. If you believe a child has provided personal information through StackIt, contact us so we can review the issue.",
            ],
          },
          {
            title: "Your Choices",
            items: [
              "You can uninstall StackIt at any time.",
              "You can clear app data from your Android device settings.",
              "You can manage or reset your Android Advertising ID in device settings.",
              "You can manage Google Play Games privacy settings in your Google account.",
            ],
          },
          {
            title: "Changes",
            paragraphs: [
              "We may update this Privacy Policy from time to time. When we do, we will update the Last updated date above. Continued use of StackIt after an update means the revised policy applies.",
            ],
          },
          {
            title: "Contact",
            paragraphs: [
              "For privacy questions about StackIt, contact us through the developer contact email listed on the StackIt Google Play Store listing.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "color-rush",
    name: "Color Rush",
    description: "A mobile color-matching reflex game.",
    pages: [
      {
        type: "privacy",
        title: "Privacy Policy",
        eyebrow: "Privacy Policy",
        updated: "May 28, 2026",
        description:
          "Privacy Policy for Color Rush, a mobile color-matching reflex game.",
        sections: [
          {
            title: "Overview",
            paragraphs: [
              "Color Rush is a mobile color-matching reflex game. This Privacy Policy explains what information may be collected or processed when you use Color Rush, why it is used, and the choices available to you.",
              "Color Rush does not ask you to create an account with us. Some features, such as ads and Google Play Games leaderboards, are provided by Google services and may process information according to their own policies.",
            ],
          },
          {
            title: "Information We Process",
            paragraphs: [
              "Color Rush may store game-related information on your device, such as gameplay progress, high scores, preferences, rewarded ad limits, and similar app settings. This information is used to run the game and remember your experience.",
              "If you use Google Play Games features, Google may process information such as your Play Games profile, gamer identity, scores, leaderboard activity, device information, and related diagnostics.",
              "Color Rush uses Google Mobile Ads. Advertising services may process device information, advertising identifiers, IP address, app interactions, approximate location inferred from network information, crash or diagnostic data, and ad performance data.",
            ],
          },
          {
            title: "Advertising ID",
            paragraphs: [
              "Color Rush uses ads and may use the Android Advertising ID where available. The Advertising ID is used for advertising, frequency capping, fraud prevention, measurement, and related ad features. You can reset or delete your Advertising ID in your Android device settings.",
            ],
          },
          {
            title: "How Information Is Used",
            items: [
              "To provide gameplay, scoring, preferences, and core app features.",
              "To show ads, including rewarded, banner, and interstitial ads.",
              "To measure ad performance and protect against fraud or abuse.",
              "To support Google Play Games leaderboards and related features.",
              "To diagnose crashes, improve reliability, and maintain the app.",
            ],
          },
          {
            title: "Third-Party Services",
            paragraphs: [
              "Color Rush uses services provided by Google. These services may collect and process information under their own privacy policies:",
            ],
            items: [
              [
                {
                  type: "link",
                  text: "Google Privacy Policy",
                  href: "https://policies.google.com/privacy",
                },
              ],
              [
                {
                  type: "link",
                  text: "How Google uses information for advertising",
                  href: "https://policies.google.com/technologies/ads",
                },
              ],
              [
                {
                  type: "link",
                  text: "Google Play Games profile privacy settings",
                  href: "https://support.google.com/googleplay/answer/3129346",
                },
              ],
            ],
          },
          {
            title: "Sharing",
            paragraphs: [
              "We do not sell personal information. Information may be processed by third-party service providers, such as Google, to provide ads, leaderboards, analytics, diagnostics, security, and app functionality. Information may also be disclosed if required by law or to protect rights, safety, and security.",
            ],
          },
          {
            title: "Data Retention",
            paragraphs: [
              "Game preferences and progress stored on your device remain until you clear the app data or uninstall the app. Data processed by third-party services is retained according to those services' policies and your account or device settings.",
            ],
          },
          {
            title: "Children",
            paragraphs: [
              "Color Rush is not intended for children under the age required by applicable law to consent to data processing. If you believe a child has provided personal information through Color Rush, contact us so we can review the issue.",
            ],
          },
          {
            title: "Your Choices",
            items: [
              "You can uninstall Color Rush at any time.",
              "You can clear app data from your Android device settings.",
              "You can manage or reset your Android Advertising ID in device settings.",
              "You can manage Google Play Games privacy settings in your Google account.",
            ],
          },
          {
            title: "Changes",
            paragraphs: [
              "We may update this Privacy Policy from time to time. When we do, we will update the Last updated date above. Continued use of Color Rush after an update means the revised policy applies.",
            ],
          },
          {
            title: "Contact",
            paragraphs: [
              "For privacy questions about Color Rush, contact us through the developer contact email listed on the Color Rush Google Play Store listing.",
            ],
          },
        ],
      },
    ],
  },
] satisfies AppEntry[];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}

export function getExternalPage(appSlug: string, pageType: string) {
  const app = getApp(appSlug);
  const page = app?.pages.find((candidate) => candidate.type === pageType);

  if (!app || !page) {
    return null;
  }

  return { app, page };
}
