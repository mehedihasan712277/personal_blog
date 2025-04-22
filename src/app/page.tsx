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
        <div className="md:flex-[5]">
          <div id="blog">
            <CardList />
          </div>
        </div>
        <div className="hidden md:block md:flex-[2]">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Page;
