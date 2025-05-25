import { BaseTable } from '../../common';

const dummyData = [
  { name: '홍길동', invoiceAmount: 100000, paid: false },
  { name: '김철수', invoiceAmount: 250000, paid: true },
];
export const UnpaidTable = () => {
  return (
    <div>
      <BaseTable data={dummyData} />
    </div>
  );
};
