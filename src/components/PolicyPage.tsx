import type { AppEntry, ExternalPage, RichText } from "@/content/apps";

function renderRichText(content: RichText) {
  if (typeof content === "string") {
    return content;
  }

  return content.map((part, index) => {
    if (part.type === "link") {
      return (
        <a key={index} href={part.href} rel="noreferrer" target="_blank">
          {part.text}
        </a>
      );
    }

    return <span key={index}>{part.text}</span>;
  });
}

type PolicyPageProps = {
  app: AppEntry;
  page: ExternalPage;
};

export function PolicyPage({ app, page }: PolicyPageProps) {
  return (
    <main className="policy-page">
      <header className="policy-header">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{app.name}</h1>
        <p className="updated">Last updated: {page.updated}</p>
      </header>

      {page.sections.map((section) => (
        <section className="policy-section" key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs?.map((paragraph, index) => (
            <p key={index}>{renderRichText(paragraph)}</p>
          ))}
          {section.items ? (
            <ul>
              {section.items.map((item, index) => (
                <li key={index}>{renderRichText(item)}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </main>
  );
}
