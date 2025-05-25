type UnpaidRecord = {
  name: string;
  invoiceAmount: number;
  paid: boolean;
};

type UnpaidTableProps = {
  data: UnpaidRecord[];
};

export const BaseTable: React.FC<UnpaidTableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>청구 금액</th>
          <th>납부 여부</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.name}</td>
            <td>{row.invoiceAmount.toLocaleString()}원</td>
            <td>{row.paid ? '완납' : '미납'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
