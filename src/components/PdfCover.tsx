import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { BookOpen } from "lucide-react";

// Apuntar al worker incluido en pdfjs-dist
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

interface PdfCoverProps {
  pdfUrl: string;
  className?: string;
}

const PdfCover = ({ pdfUrl, className = "" }: PdfCoverProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!pdfUrl) return;

    setLoading(true);
    setError(false);

    let cancelled = false;

    const render = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        if (cancelled) return;

        const page = await pdf.getPage(1);
        if (cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const containerWidth = canvas.parentElement?.clientWidth || 300;
        const viewport = page.getViewport({ scale: 1 });
        const scale = containerWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        const ctx = canvas.getContext("2d")!;
        await page.render({ canvasContext: ctx, viewport: scaledViewport, canvas }).promise;

        if (!cancelled) setLoading(false);
      } catch {
        if (!cancelled) {
          setLoading(false);
          setError(true);
        }
      }
    };

    render();
    return () => { cancelled = true; };
  }, [pdfUrl]);

  return (
    <div className={`relative w-full overflow-hidden bg-muted/20 ${className}`}>
      {/* Canvas de la portada */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        style={{ display: loading || error ? "none" : "block" }}
      />

      {/* Skeleton / Loading */}
      {loading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground animate-pulse">
          <BookOpen size={36} className="opacity-30" />
          <span className="text-xs font-heading uppercase tracking-widest opacity-40">Cargando...</span>
        </div>
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
          <BookOpen size={36} className="opacity-30" />
          <span className="text-xs font-heading uppercase tracking-widest opacity-40">PDF</span>
        </div>
      )}
    </div>
  );
};

export default PdfCover;
