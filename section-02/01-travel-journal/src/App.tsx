import Entry from "./components/entry";
import Header from "./components/header";
import journalData from "./data/journalData";

export default function App(): JSX.Element {
  const entryElements = journalData.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });

  return (
    <>
      <Header />
      <main className="container">
        <div className="journal-container">{entryElements}</div>
      </main>
    </>
  );
}
