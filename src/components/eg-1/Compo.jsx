import Compo2 from "./Compo2";

// Method 1
export function Compo({ name, number }) {
  return (
    <div>
      <h1 className="text-2xl">
        Hi I am a Component - {name} Roll Number {number}
      </h1>
      <Compo2 name={name} number={number} />
    </div>
  );
}

// Method 2
// export default Compo
