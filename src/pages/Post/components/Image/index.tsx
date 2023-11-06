interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function Image(props: ImageProps) {
  return (
    <img
      alt="Imagem do post"
      {...props}
      className="w-full rounded-lg"
      loading="lazy"
      decoding="async"
    />
  );
}
