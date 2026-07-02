type ImageSource = string & { readonly __brand: 'ImageSource' }

declare module '*.svg' {
  const src: ImageSource
  export default src
}

declare module '*.png' {
  const src: ImageSource
  export default src
}

declare module '*.jpg' {
  const src: ImageSource
  export default src
}

declare module '*.jpeg' {
  const src: ImageSource
  export default src
}

declare module '*.webp' {
  const src: ImageSource
  export default src
}
