import Link from "next/link";
import { apps } from "@/content/apps";

const pageLabels: Record<string, string> = {
  privacy: "Privacy Policy",
  support: "Support",
  terms: "Terms",
};

export default function Home() {
  return (
    <main className="hub-page">
      <header className="hub-header">
        <p className="eyebrow">External Links</p>
        <h1>Shared app links</h1>
        <p>
          One central project for app store links, privacy policies, support
          pages, and other public pages used across apps.
        </p>
      </header>

      <section className="link-list" aria-label="Available app links">
        {apps.map((app) => (
          <article className="app-row" key={app.slug}>
            <div>
              <h2>{app.name}</h2>
              <p>{app.description}</p>
            </div>
            <div className="app-links">
              {app.pages.map((page) => (
                <Link href={`/${app.slug}/${page.type}`} key={page.type}>
                  {pageLabels[page.type] ?? page.title}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
