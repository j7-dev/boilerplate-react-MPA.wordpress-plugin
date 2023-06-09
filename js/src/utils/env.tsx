export const baseUrl = import.meta.env.VITE_BASE_URL || '/'
export const renderId = import.meta.env.VITE_RENDER_ID || 'my-app'
export const apiUrl = window?.wpApiSettings?.apiUrl || '/wp-json'
export const apiTimeout = import.meta.env.VITE_API_TIMEOUT || '30000'
