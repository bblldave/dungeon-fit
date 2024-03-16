import Image from "next/image";
import { Button } from 'antd';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button type="primary">Primary Button</Button>
      <Button type="dashed">Primary Button</Button>
      <Button type="link">Primary Button</Button>
    </main>
  );
}
