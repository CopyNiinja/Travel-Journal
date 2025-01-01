import data from "../traveldata";

import SingleLog from "./SingleLog";
export default function MainContent() {
  return (
    <main className="main">
      <section className="main-container">
        {data.map((obj) => {
          return <SingleLog {...obj} key={obj.id} />;
        })}
      </section>
    </main>
  );
}
