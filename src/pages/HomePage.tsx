import { FileUpload, UnpaidTable } from '../components';

export const HomePage = () => {
  return (
    <div>
      <div>
        <h1>미납정리</h1>
      </div>
      <div>
        <FileUpload />
      </div>
      <div>
        <UnpaidTable />
      </div>
    </div>
  );
};
