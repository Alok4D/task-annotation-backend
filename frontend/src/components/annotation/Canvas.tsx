'use client';
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image as KonvaImage, Line, Circle } from 'react-konva';
import useImage from 'use-image';
import { useGetImagesQuery, useGetAnnotationsQuery, useSaveAnnotationMutation } from '@/features/annotations/annotationApi';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Button } from '@/components/ui/Button';
import { Save, RefreshCw } from 'lucide-react';

export const Canvas = () => {
  const selectedImageId = useSelector((state: RootState) => state.annotations.selectedImageId);
  const { data: images = [] } = useGetImagesQuery();
  const { data: annotations = [] } = useGetAnnotationsQuery();
  const [saveAnnotation, { isLoading: isSaving }] = useSaveAnnotationMutation();

  const selectedImage = images.find(img => img.id === selectedImageId);
  const imageUrl = selectedImage ? (selectedImage.image.startsWith('http') ? selectedImage.image : `http://127.0.0.1:8000${selectedImage.image}`) : '';
  
  const [image] = useImage(imageUrl, 'anonymous');
  
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const currentAnnotations = annotations.filter(a => a.image === selectedImageId);

  useEffect(() => {
    setPoints([]);
    setIsFinished(false);
  }, [selectedImageId]);

  const handleStageClick = (e: any) => {
    if (isFinished) return;
    const stage = e.target.getStage();
    const pos = stage.getPointerPosition();
    if (!pos) return;

    if (points.length >= 3) {
      const startPoint = points[0];
      const dx = pos.x - startPoint.x;
      const dy = pos.y - startPoint.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 10) {
        setIsFinished(true);
        return;
      }
    }
    setPoints([...points, { x: pos.x, y: pos.y }]);
  };

  const handleSave = async () => {
    if (points.length > 2 && selectedImageId) {
      try {
        await saveAnnotation({
          image: selectedImageId,
          polygon_points: points,
        }).unwrap();
        setPoints([]);
        setIsFinished(false);
      } catch (err) {
        console.error('Failed to save annotation', err);
      }
    }
  };

  const handleReset = () => {
    setPoints([]);
    setIsFinished(false);
  };

  if (!selectedImage) {
    return (
      <div className="flex-1 bg-white rounded-2xl border border-gray-100 flex items-center justify-center shadow-sm">
        <p className="text-gray-400 font-medium">Select an image to start annotating</p>
      </div>
    );
  }

  const flatPoints = points.flatMap(p => [p.x, p.y]);
  if (isFinished && points.length > 0) {
    flatPoints.push(points[0].x, points[0].y);
  }

  return (
    <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col relative">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <div>
          <h3 className="font-bold text-gray-800">Annotation Canvas</h3>
          <p className="text-xs text-gray-500 mt-1">Click around the object to draw a polygon. Click near the start point to close it.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={handleReset} disabled={points.length === 0} className="gap-2">
            <RefreshCw className="w-4 h-4" /> Reset
          </Button>
          <Button size="sm" onClick={handleSave} disabled={!isFinished || points.length < 3} isLoading={isSaving} className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md">
            <Save className="w-4 h-4" /> Save Polygon
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto bg-gray-100/50 flex justify-center items-center p-4">
        {image ? (
          <div className="shadow-2xl rounded-md overflow-hidden bg-white cursor-crosshair">
            <Stage
              width={image.width > 800 ? 800 : image.width}
              height={image.width > 800 ? (image.height * 800) / image.width : image.height}
              scaleX={image.width > 800 ? 800 / image.width : 1}
              scaleY={image.width > 800 ? 800 / image.width : 1}
              onClick={handleStageClick}
            >
              <Layer>
                <KonvaImage image={image} />
                
                {currentAnnotations.map((ann) => {
                  const savedFlatPoints = ann.polygon_points.flatMap(p => [p.x, p.y]);
                  savedFlatPoints.push(ann.polygon_points[0].x, ann.polygon_points[0].y);
                  
                  return (
                    <React.Fragment key={ann.id}>
                      <Line
                        points={savedFlatPoints}
                        stroke="#3b82f6"
                        strokeWidth={2}
                        closed
                        fill="rgba(59, 130, 246, 0.3)"
                      />
                    </React.Fragment>
                  );
                })}

                {points.length > 0 && (
                  <>
                    <Line
                      points={flatPoints}
                      stroke="#ef4444"
                      strokeWidth={3}
                      dash={isFinished ? [] : [5, 5]}
                      closed={isFinished}
                      fill={isFinished ? "rgba(239, 68, 68, 0.3)" : undefined}
                    />
                    {points.map((p, i) => (
                      <Circle
                        key={i}
                        x={p.x}
                        y={p.y}
                        radius={i === 0 && !isFinished ? 6 : 4}
                        fill={i === 0 && !isFinished ? "#f59e0b" : "#ef4444"}
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    ))}
                  </>
                )}
              </Layer>
            </Stage>
          </div>
        ) : (
          <p className="text-gray-500">Loading image on canvas...</p>
        )}
      </div>
    </div>
  );
};
