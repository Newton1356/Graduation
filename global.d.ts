// global.d.ts

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id'?: string;
        style?: React.CSSProperties;
      };
    }
  }
}

// تعريف وحدة (Module) الـ Widget Embed لتجاهل أي خطأ استيراد مستقبلي
declare module '@elevenlabs/convai-widget-embed';

export {};