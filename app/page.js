import Image from "next/image";
import Cole from "./components/Cole";

export default function Home() {
  let myStyle = "text-green-500 mt-6";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Cole label="scott" />
      <h1 className={myStyle}>CARO</h1>
      <h1 className={myStyle}>CARO</h1>
      <h1 className={myStyle}>CARO</h1>
      <h1 className={myStyle}>CARO</h1>
      <h1 className={myStyle}>CARO</h1>
      <h1 className={myStyle}>CARO</h1>
    </main>
  );
}
