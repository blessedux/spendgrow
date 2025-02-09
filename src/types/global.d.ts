interface Window {
  btc?: {
    request: (method: string, params: any) => Promise<any>
  }
} 