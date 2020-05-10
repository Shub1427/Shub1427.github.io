/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable no-var */

declare namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    BASE_API_URL: string;
  }

  interface Process extends NodeJS.Process {
    env: ProcessEnv;
  }

  declare var process = Process;
}
