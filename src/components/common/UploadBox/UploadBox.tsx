type FileUploadProps = {
  label: string;
  accept: string;
  onFileSelect: (file: File | null) => void;
};

export const UploadBox: React.FC<FileUploadProps> = ({
  label,
  accept,
  onFileSelect,
}) => {
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileSelect(file);
  };
  return (
    <div>
      <label>{label}</label>
      <input type="file" accept={accept} onChange={handleFileInputChange} />
    </div>
  );
};
