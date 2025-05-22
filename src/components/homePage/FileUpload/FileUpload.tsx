import { useState } from 'react';
import { DropdownBox } from '../../common';

export const FileUpload = () => {
  const [selectedBank, setSelectedBank] = useState('');

  const bankOptions = [
    { label: 'KB국민은행', value: 'kb' },
    { label: '신한은행', value: 'shinhan' },
    { label: '우리은행', value: 'woori' },
  ];

  return (
    <div>
      <h2>은행 선택</h2>
      <DropdownBox
        options={bankOptions}
        selected={selectedBank}
        onChange={setSelectedBank}
        placeholder="은행을 선택하세요"
      />
    </div>
  );
};
