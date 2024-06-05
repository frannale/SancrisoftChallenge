import type React from 'react';

export interface ScreenLayoutProps {
  children: React.ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  disableBack?: boolean;
}
