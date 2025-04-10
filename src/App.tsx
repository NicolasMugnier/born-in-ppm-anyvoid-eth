import { useState } from 'react';
import './App.css';
import data from './data.json';

function App() {
  const years: number[] = Array.from({ length: 2025 - 1959 + 1 }, (_, i) => 1959 + i);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Find the data for the selected year
  const selectedData = data.data.find((entry) => entry.year === selectedYear);

  return (
    <>
      <div>
        <h2>Born in {selectedData ? selectedData.ppm : '...'} PPM</h2>
      </div>

      <select
        onChange={(e) => setSelectedYear(Number(e.target.value))}
        defaultValue=""
      >
        <option value="" disabled>
          Select a year
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {/* Metadata Section */}
      <section>
        <p><strong>Source:</strong> {data.metadata.citation}</p>
      </section>
    </>
  );
}

export default App;
