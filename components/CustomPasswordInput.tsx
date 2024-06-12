'use client';

import { Input } from '@/components/ui/input';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';

const CustomPasswordInput = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Input
        className="pl-10 cursor-pointer"
        placeholder="Password..."
        type={visible ? 'text' : 'password'}
      />
      {visible ? (
        <Eye
          onClick={() => setVisible((prev) => !prev)}
          className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      ) : (
        <EyeOff
          onClick={() => setVisible((prev) => !prev)}
          className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      )}
    </>
  );
};

export default CustomPasswordInput;
