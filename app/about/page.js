// this is a server side rendered component.
import MyComponent from "../components/MyComponent";
const About = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>About</h1>
      <p> Hi caro!!!!</p>
      <p>{data.title}</p>
      {/* pass the title to a component. */}
      <MyComponent label={data.title} />
    </div>
  );
};

export default About;
