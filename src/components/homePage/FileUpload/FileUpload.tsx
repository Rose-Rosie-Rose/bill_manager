import { useState } from 'react';
import { DropdownBox, UploadBox } from '../../common';

export const FileUpload = () => {
  const [selectedBank, setSelectedBank] = useState('');

  const bankOptions = [
    { label: 'KB국민은행', value: 'kb' },
    { label: '신한은행', value: 'shinhan' },
    { label: '우리은행', value: 'woori' },
  ];

  const handleFileUpload = (file: File | null, type: 'pdf' | 'excel') => {
    if (!file) return;

    if (type === 'pdf') {
      console.log('청구서 PDF 업로드:', file.name);
    } else if (type === 'excel') {
      console.log('엑셀 입금내역 업로드:', file.name);
    }
  };

  const createUploadHandler = (type: 'pdf' | 'excel') => {
    return (file: File | null) => {
      handleFileUpload(file, type);
    };
  };

  return (
    <div>
      <div>
        <h2>은행 선택</h2>
        <DropdownBox
          options={bankOptions}
          selected={selectedBank}
          onChange={setSelectedBank}
          placeholder="은행을 선택하세요"
        />
      </div>
      <div>
        <UploadBox
          label="청구서 PDF 업로드"
          accept=".pdf"
          onFileSelect={createUploadHandler('pdf')}
        />
        <UploadBox
          label="은행 입금내역 엑셀 업로드"
          accept=".xlsx, .xls, .csv"
          onFileSelect={createUploadHandler('excel')}
        />
      </div>
    </div>
  );
};
