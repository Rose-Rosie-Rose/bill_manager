import { FileUpload } from '../components';

export const HomePage = () => {
  return (
    <div>
      <div>
        <h1>미납정리</h1>
      </div>
      <div>
        <FileUpload />
        <div>
          <div>은행 입금내역 엑셀 시트 업로드</div>
        </div>
        <div>청구서 pdf 파일 업로드</div>
      </div>
      <div>
        <div>미납 내역 정리 table</div>
      </div>
    </div>
  );
};
