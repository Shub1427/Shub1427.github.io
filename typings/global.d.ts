// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface Navigator extends Navigator {
  share?: (options: any) => Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface Window extends Window {
  gtag: (type: string, id: string, options: Record<string, any>) => void;
}
