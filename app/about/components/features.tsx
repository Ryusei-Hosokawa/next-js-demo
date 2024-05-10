import { Button } from "@/components/ui/button";
import Link from "next/link";
import Section from "@/app/about/components/section";

export default function Features() {
  return (
    <Section title="サービスの特徴" subTitle="素敵な機能が盛り沢山です">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="border relative rounded-md p-6 shadow space-x-3 space-y-3">
          <div className="aspect-video bg-muted"></div>
          <h2>
            記事タイトル<Link href="/" className="absolute inset-0"></Link>
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <Button className="pr-10 pl-10">詳細</Button>
        </div>
        <div className="border relative rounded-md p-6 shadow space-x-3 space-y-3">
          <div className="aspect-video bg-muted"></div>
          <h2>
            記事タイトル<Link href="/" className="absolute inset-0"></Link>
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <Button className="pr-10 pl-10">詳細</Button>
        </div>
        <div className="border relative rounded-md p-6 shadow space-x-3 space-y-3">
          <div className="aspect-video bg-muted"></div>
          <h2>
            記事タイトル<Link href="/" className="absolute inset-0"></Link>
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <Button className="pr-10 pl-10">詳細</Button>
        </div>
      </div>
    </Section>
  );
}
