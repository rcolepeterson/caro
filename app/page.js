import Cole from "./components/Cole";

export default async function Home() {
  let myStyle = "text-green-500 mt-6";
  // This file is server side rendered. So you can just make requests whenever you want.
  // Get some data from the api/hello using async await.
  // You cant use state though. We are on the server. So maybe forget for now.

  async function getData() {
    const res = await fetch(`http://localhost:3000/api/hello`);
    return res.json();
  }
  let data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Cole label="scott" />

      <h2 className="text-2xl">
        here is some severside rendered data: {data.name}
      </h2>

      <h1 className={myStyle}>CARO</h1>
      <h1 className={myStyle}>CARO</h1>
      <h1 className={myStyle}>CARO</h1>
      <h1 className={myStyle}>CARO</h1>
      <h1 className={myStyle}>CARO</h1>
      <h1 className={myStyle}>CARO</h1>
    </main>
  );
}
