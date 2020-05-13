// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface Navigator extends Navigator {
  share?: (options: any) => Promise<void>;
}
