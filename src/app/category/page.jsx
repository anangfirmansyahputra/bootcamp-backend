import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { db } from "@/lib/db";
import Link from "next/link";
import Table from "@/app/category/_components/table";

export const metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default async function CategoryPage() {
  const categories = await db.category.findMany({
    orderBy: {
      created_at: "asc",
    },
  });

  async function handleDelete() {}

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Category" />

      <Table categories={categories} />
    </DefaultLayout>
  );
}
