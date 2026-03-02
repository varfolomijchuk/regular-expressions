interface ComparisonTableProps {
  title: string;
  headers: string[];
  rows: (string | number)[][];
}

export default function ComparisonTable({ title, headers, rows }: ComparisonTableProps) {
  return (
    <div className="my-6 overflow-x-auto">
      {title && <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>}
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr className="bg-gray-200">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border border-gray-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-sm text-gray-700 border border-gray-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
