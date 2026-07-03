'use client';
import React from 'react';
import { UploadBox } from '@/components/annotation/UploadBox';
import { ImageSlider } from '@/components/annotation/ImageSlider';
import { Canvas } from '@/components/annotation/Canvas';
import { AnnotationSidebar } from '@/components/annotation/AnnotationSidebar';

export default function AnnotatePage() {
  return (
    <div className="h-full flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
      <div className="flex gap-4 min-h-[140px]">
        <div className="w-80 flex-shrink-0">
          <UploadBox />
        </div>
        <div className="flex-1 overflow-hidden">
          <ImageSlider />
        </div>
      </div>
      
      <div className="flex-1 flex gap-4 min-h-0">
        <Canvas />
        <AnnotationSidebar />
      </div>
    </div>
  );
}
