import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyPage } from "@/components/PolicyPage";
import { apps, getExternalPage } from "@/content/apps";

type PageProps = {
  params: Promise<{
    appSlug: string;
    pageType: string;
  }>;
};

export function generateStaticParams() {
  return apps.flatMap((app) =>
    app.pages.map((page) => ({
      appSlug: app.slug,
      pageType: page.type,
    })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { appSlug, pageType } = await params;
  const result = getExternalPage(appSlug, pageType);

  if (!result) {
    return {
      title: "Page not found | External Links",
    };
  }

  return {
    title: `${result.app.name} ${result.page.title}`,
    description: result.page.description,
  };
}

export default async function ExternalAppPage({ params }: PageProps) {
  const { appSlug, pageType } = await params;
  const result = getExternalPage(appSlug, pageType);

  if (!result || result.page.type !== "privacy") {
    notFound();
  }

  return <PolicyPage app={result.app} page={result.page} />;
}
