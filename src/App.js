import { useEffect, useState } from "react";
import { getCountries, getDayOneAllStatus } from "./api";
import ContriesSelect from "./components/ContriesSelect";
import LineChart from "./components/LineChart";
import SummaryCards from "./components/SummaryCards";

function App() {
  const [countries, setCountries] = useState([]);
  const [slug, setSlug] = useState("vietnam");
  const [summary, setSummary] = useState({});
  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data);
    });
  }, []);
  useEffect(() => {
    getDayOneAllStatus(slug).then((res) => {
      setSummary(res.data);
    });
  }, [slug]);
  const handleSelectCountry = (sl) => {
    setSlug(sl);
  };
  return (
    <div>
      <ContriesSelect
        countries={countries}
        onSelectCountry={(c) => handleSelectCountry(c)}
        slug={slug}
      />
      <SummaryCards summary={summary} />
      <LineChart summary={summary}/>
    </div>
  );
}

export default App;
