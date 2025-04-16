import { FC } from "react";
import CardList from "@/components/ui/CardList";
import CategoryList from "@/components/ui/CategoryList";
import Featured from "@/components/ui/Featured";
import Menu from "@/components/ui/Menu";

interface PageProps {
  searchParams: {
    page?: string;
  };
}

const Page: FC<PageProps> = () => {

  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex gap-12">
        <div className="flex-[5]">
          <CardList />
        </div>
        <div className="flex-[2]">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Page;
